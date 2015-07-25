/*global jQuery, console, define, setTimeout, window*/
(function () {
    'use strict';
    var definePicZoom = function ($) {
        var PicZoom = function (el, options) {
                this.el = $(el);
                this.zoomFactor = 1;
                this.lastScale = 1;
                this.offset = {
                    x: 0,
                    y: 0
                };
                this.options = $.extend({}, this.defaults, options);
                this.setupMarkup();
                this.bindEvents();
                this.update();
                // default enable.
                this.enable();

            },
            sum = function (a, b) {
                return a + b;
            },
            isCloseTo = function (value, expected) {
                return value > expected - 0.01 && value < expected + 0.01;
            };

        PicZoom.prototype = {

            defaults: {
                tapZoomFactor: 2,
                zoomOutFactor: 1.3,
                animationDuration: 300,
                animationInterval: 5,
                maxZoom: 4,
                minZoom: 0.5,
                lockDragAxis: false,
                use2d: true,
                zoomStartEventName: 'pz_zoomstart',
                zoomEndEventName: 'pz_zoomend',
                dragStartEventName: 'pz_dragstart',
                dragEndEventName: 'pz_dragend',
                doubleTapEventName: 'pz_doubletap'
            },

            handleDragStart: function (event) {
                this.el.trigger(this.options.dragStartEventName);
                this.stopAnimation();
                this.lastDragPosition = false;
                this.hasInteraction = true;
                this.handleDrag(event);
            },

            handleDrag: function (event) {

                if (this.zoomFactor > 1.0) {
                    var touch = this.getTouches(event)[0];
                    this.drag(touch, this.lastDragPosition);
                    this.offset = this.sanitizeOffset(this.offset);
                    this.lastDragPosition = touch;
                }
            },

            handleDragEnd: function () {
                this.el.trigger(this.options.dragEndEventName);
                this.end();
            },

            handleZoomStart: function (event) {
                this.el.trigger(this.options.zoomStartEventName);
                this.stopAnimation();
                this.lastScale = 1;
                this.nthZoom = 0;
                this.lastZoomCenter = false;
                this.hasInteraction = true;
                this.startAngle = 0;
            },

            handleFirstZoom: function (event) {
                this.startAngle = this.getRotateAngle(this.getTouches(event));
            },
            handleZoom: function (event, newScale) {

                // a relative scale factor is used
                var touchCenter = this.getTouchCenter(this.getTouches(event)),
                    scale = newScale / this.lastScale;
                this.lastScale = newScale;

                // the first touch events are thrown away since they are not precise
                this.nthZoom += 1;
                if (this.nthZoom > 3) {

                    this.scale(scale, touchCenter);
                    this.drag(touchCenter, this.lastZoomCenter);
                    this.rotate(touchCenter, this.lastZoomCenter);
                    this.rotateAngle = this.getRotateAngle(this.getTouches(event)) - this.startAngle;
                    this.rotateAngle += this.lastAngle||0;

                }
                this.lastZoomCenter = touchCenter;
            },

            handleZoomEnd: function () {
                this.el.trigger(this.options.zoomEndEventName);
                this.end();
            },

            handleDoubleTap: function (event) {
                var center = this.getTouches(event)[0],
                    zoomFactor = this.zoomFactor > 1 ? 1 : this.options.tapZoomFactor,
                    startZoomFactor = this.zoomFactor,
                    updateProgress = (function (progress) {
                        this.scaleTo(startZoomFactor + progress * (zoomFactor - startZoomFactor), center);
                    }).bind(this);

                if (this.hasInteraction) {
                    return;
                }
                if (startZoomFactor > zoomFactor) {
                    center = this.getCurrentZoomCenter();
                }

                this.animate(this.options.animationDuration, this.options.animationInterval, updateProgress, this.swing);
                this.el.trigger(this.options.doubleTapEventName);
            },

            sanitizeOffset: function (offset) {
                var maxX = (this.zoomFactor - 1) * this.getContainerX(),
                    maxY = (this.zoomFactor - 1) * this.getContainerY(),
                    maxOffsetX = Math.max(maxX, 0),
                    maxOffsetY = Math.max(maxY, 0),
                    minOffsetX = Math.min(maxX, 0),
                    minOffsetY = Math.min(maxY, 0);

                return {
                    x: Math.min(Math.max(offset.x, minOffsetX), maxOffsetX),
                    y: Math.min(Math.max(offset.y, minOffsetY), maxOffsetY)
                };
            },

            scaleTo: function (zoomFactor, center) {
                this.scale(zoomFactor / this.zoomFactor, center);
            },

            scale: function (scale, center) {
                scale = this.scaleZoomFactor(scale);
                this.addOffset({
                    x: (scale - 1) * (center.x + this.offset.x),
                    y: (scale - 1) * (center.y + this.offset.y)
                });
            },

            //Scales the zoom factor relative to current state
            //@return the actual scale (can differ because of max min zoom factor)
            scaleZoomFactor: function (scale) {
                var originalZoomFactor = this.zoomFactor;
                this.zoomFactor *= scale;
                this.zoomFactor = Math.min(this.options.maxZoom, Math.max(this.zoomFactor, this.options.minZoom));
                return this.zoomFactor / originalZoomFactor;
            },

            drag: function (center, lastCenter) {
                if (lastCenter) {
                  if(this.options.lockDragAxis) {
                    // lock scroll to position that was changed the most
                    if(Math.abs(center.x - lastCenter.x) > Math.abs(center.y - lastCenter.y)) {
                      this.addOffset({
                        x: -(center.x - lastCenter.x),
                        y: 0
                      });
                    }
                    else {
                      this.addOffset({
                        y: -(center.y - lastCenter.y),
                        x: 0
                      });
                    }
                  }
                  else {
                    this.addOffset({
                      y: -(center.y - lastCenter.y),
                      x: -(center.x - lastCenter.x)
                    });
                  }
                }
            },

            rotate: function (center, lastCenter) {

            },

            //return first two touch angle
            getRotateAngle: function (touches) {
                if(touches.length > 1){
                    var delX = touches[1].x-touches[0].x;
                    var delY = touches[1].y-touches[0].y;
                    return delX?Math.atan(delY/delX):0;
                }
            },
            
            //Calculates the touch center of multiple touches
            getTouchCenter: function (touches) {
                return this.getVectorAvg(touches);
            },

            /**
             * Calculates the average of multiple vectors (x, y values)
             */
            getVectorAvg: function (vectors) {
                return {
                    x: vectors.map(function (v) { return v.x; }).reduce(sum) / vectors.length,
                    y: vectors.map(function (v) { return v.y; }).reduce(sum) / vectors.length
                };
            },

            //Adds an offset
            //param offset the offset to add
            //return return true when the offset change was accepted
            addOffset: function (offset) {
                this.offset = {
                    x: this.offset.x + offset.x,
                    y: this.offset.y + offset.y
                };
            },

            sanitize: function () {
                if (this.zoomFactor < this.options.zoomOutFactor) {
                    this.zoomOutAnimation();
                } else if (this.isInsaneOffset(this.offset)) {
                    this.sanitizeOffsetAnimation();
                }
            },

            //Checks if the offset is ok with the current zoom factor
            isInsaneOffset: function (offset) {
                var sanitizedOffset = this.sanitizeOffset(offset);
                return sanitizedOffset.x !== offset.x ||
                    sanitizedOffset.y !== offset.y;
            },

            //Creates an animation moving to a sane offset
            sanitizeOffsetAnimation: function () {
                var targetOffset = this.sanitizeOffset(this.offset),
                    startOffset = {
                        x: this.offset.x,
                        y: this.offset.y
                    },
                    updateProgress = (function (progress) {
                        this.offset.x = startOffset.x + progress * (targetOffset.x - startOffset.x);
                        this.offset.y = startOffset.y + progress * (targetOffset.y - startOffset.y);
                        this.update();
                    }).bind(this);

                this.animate(
                    this.options.animationDuration,
                    this.options.animationInterval,
                    updateProgress,
                    this.swing
                );
            },

            //Zooms back to the original position,(no offset and zoom factor 1)
            zoomOutAnimation: function () {
                var startZoomFactor = this.zoomFactor,
                    zoomFactor = 1,
                    center = this.getCurrentZoomCenter(),
                    updateProgress = (function (progress) {
                        this.scaleTo(startZoomFactor + progress * (zoomFactor - startZoomFactor), center);
                    }).bind(this);

                this.animate(
                    this.options.animationDuration,
                    this.options.animationInterval,
                    updateProgress,
                    this.swing
                );
            },

            updateAspectRatio: function () {
                this.setContainerY(this.getContainerX() / this.getAspectRatio());
            },

            //for the element to fit into the container)
            getInitialZoomFactor: function () {
                // use .offsetWidth instead of width()  height()
                // because jQuery-width() return the original width but Zepto-width() will calculate width with transform.
                return this.container[0].offsetWidth / this.el[0].offsetWidth;
            },

            getAspectRatio: function () {
                return this.el[0].offsetWidth / this.el[0].offsetHeight;
            },

            //Calculates the virtual zoom center for the current offset and zoom factor
            //(used for reverse zoom)
            getCurrentZoomCenter: function () {

                // uses following formula to calculate the zoom center x value
                // offset_left / offset_right = zoomcenter_x / (container_x - zoomcenter_x)
                var length = this.container[0].offsetWidth * this.zoomFactor,
                    offsetLeft  = this.offset.x,
                    offsetRight = length - offsetLeft -this.container[0].offsetWidth,
                    widthOffsetRatio = offsetLeft / offsetRight,
                    centerX = widthOffsetRatio * this.container[0].offsetWidth / (widthOffsetRatio + 1),

                // the same for the zoomcenter y
                    height = this.container[0].offsetHeight * this.zoomFactor,
                    offsetTop  = this.offset.y,
                    offsetBottom = height - offsetTop - this.container[0].offsetHeight,
                    heightOffsetRatio = offsetTop / offsetBottom,
                    centerY = heightOffsetRatio * this.container[0].offsetHeight / (heightOffsetRatio + 1);

                // prevents division by zero
                if (offsetRight === 0) { centerX = this.container[0].offsetWidth; }
                if (offsetBottom === 0) { centerY = this.container[0].offsetHeight; }

                return {
                    x: centerX,
                    y: centerY
                };
            },

            canDrag: function () {
                return !isCloseTo(this.zoomFactor, 1);
            },

            //return array touches
            getTouches: function (event) {
                var position = this.container.offset();
                return Array.prototype.slice.call(event.touches).map(function (touch) {
                    return {
                        x: touch.pageX - position.left,
                        y: touch.pageY - position.top
                    };
                });
            },

            //Animation loop    does not support simultaneous animations
            animate: function (duration, interval, framefn, timefn, callback) {
                var startTime = new Date().getTime(),
                    renderFrame = (function () {
                        if (!this.inAnimation) { return; }
                        var frameTime = new Date().getTime() - startTime,
                            progress = frameTime / duration;
                        if (frameTime >= duration) {
                            framefn(1);
                            if (callback) {
                                callback();
                            }
                            this.update();
                            this.stopAnimation();
                            this.update();
                        } else {
                            if (timefn) {
                                progress = timefn(progress);
                            }
                            framefn(progress);
                            this.update();
                            setTimeout(renderFrame, interval);
                        }
                    }).bind(this);
                this.inAnimation = true;
                renderFrame();
            },

            stopAnimation: function () {
                this.inAnimation = false;
            },

            //Swing timing function for animations
            swing: function (p) {
                return -Math.cos(p * Math.PI) / 2  + 0.5;
            },

            getContainerX: function () {
                return this.container[0].offsetWidth;
            },

            getContainerY: function () {
                return this.container[0].offsetHeight;
            },

            setContainerY: function (y) {
                return this.container.height(y);
            },

            setupMarkup: function () {
                this.container = $('<div class="pic-zoom-container"></div>');
                this.el.before(this.container);
                this.container.append(this.el);

                this.container.css({
                    'overflow': 'hidden',
                    'position': 'relative'
                });

                // Zepto doesn't recognize `webkitTransform..` style
                this.el.css({
                    '-webkit-transform-origin': '0% 0%',
                    '-moz-transform-origin': '0% 0%',
                    '-ms-transform-origin': '0% 0%',
                    '-o-transform-origin': '0% 0%',
                    'transform-origin': '0% 0%',
                    'position': 'absolute'
                });
            },

            end: function () {
                this.hasInteraction = false;
                this.sanitize();
                this.update();
            },

            //Binds all required event listeners
            bindEvents: function () {
                detectGestures(this.container.get(0), this);
                $(window).on('resize', this.update.bind(this));
                $(this.el).find('img').on('load', this.update.bind(this));
            },

            //Updates the css values according to the current zoom factor and offset
            update: function () {

                if (this.updatePlaned) {
                    return;
                }
                this.updatePlaned = true;

                setTimeout((function () {
                    this.updatePlaned = false;
                    this.updateAspectRatio();

                    // console.log(this.rotateAngle);

                    var zoomFactor = this.getInitialZoomFactor() * this.zoomFactor,
                        offsetX = -this.offset.x / zoomFactor,
                        offsetY = -this.offset.y / zoomFactor,
                        transform3d =   'rotate('+this.rotateAngle+'rad) scale3d('     + zoomFactor + ', '  + zoomFactor + ',1) ' +
                            'translate3d(' + offsetX    + 'px,' + offsetY    + 'px,0px)',
                        transform2d =   'rotate('+this.rotateAngle+'rad) scale('       + zoomFactor + ', '  + zoomFactor + ') ' +
                            'translate('   + offsetX    + 'px,' + offsetY    + 'px)',
                        removeClone = (function () {
                            if (this.clone) {
                                this.clone.remove();
                                delete this.clone;
                            }
                        }).bind(this);

                    // Scale 3d and translate3d are faster (at least on ios)
                    // but they also reduce the quality.
                    // PicZoom uses the 3d transformations during interactions
                    // after interactions it falls back to 2d transformations

                        this.el.css({
                            '-webkit-transform-origin': 50+'% '+50+'%',
                            '-moz-transform-origin': 50+'% '+50+'%',
                            '-ms-transform-origin': 50+'% '+50+'%',
                            '-o-transform-origin': 50+'% '+50+'%',
                            'transform-origin': 50+'% '+50+'%',
                        });


                    if (!this.options.use2d || this.hasInteraction || this.inAnimation) {
                        this.is3d = true;
                        removeClone();
                        this.el.css({
                            '-webkit-transform':  transform3d,
                            '-o-transform':       transform2d,
                            '-ms-transform':      transform2d,
                            '-moz-transform':     transform2d,
                            'transform':        transform3d
                        });
                    } else {

                        // When changing from 3d to 2d transform webkit has some glitches.
                        // To avoid this, a copy of the 3d transformed element is displayed in the
                        // foreground while the element is converted from 3d to 2d transform
                        if (this.is3d) {
                            this.clone = this.el.clone();
                            this.clone.css('pointer-events', 'none');
                            this.clone.appendTo(this.container);
                            setTimeout(removeClone, 200);
                        }
                        this.el.css({
                            '-webkit-transform':  transform2d,
                            '-o-transform':       transform2d,
                            '-ms-transform':      transform2d,
                            '-moz-transform':     transform2d,
                            'transform':        transform2d
                        });
                        this.is3d = false;
                    }
                }).bind(this), 0);
            },

            enable: function() {
              this.enabled = true;
            },

            disable: function() {
              this.enabled = false;
            }
        };

        var detectGestures = function (el, target) {
            var interaction = null,
                fingers = 0,
                lastTouchStart = null,
                startTouches = null,

                setInteraction = function (newInteraction, event) {
                    if (interaction !== newInteraction) {

                        if (interaction && !newInteraction) {
                            switch (interaction) {
                                case "zoom":
                                    target.handleZoomEnd(event);
                                    break;
                                case 'drag':
                                    target.handleDragEnd(event);
                                    break;
                            }
                        }

                        switch (newInteraction) {
                            case 'zoom':
                                target.handleZoomStart(event);
                                break;
                            case 'drag':
                                target.handleDragStart(event);
                                break;
                        }
                    }
                    interaction = newInteraction;
                },

                updateInteraction = function (event) {
                    if (fingers === 2) {
                        setInteraction('zoom');
                    } else if (fingers === 1 && target.canDrag()) {
                        setInteraction('drag', event);
                    } else {
                        setInteraction(null, event);
                    }
                },

                targetTouches = function (touches) {
                    return Array.prototype.slice.call(touches).map(function (touch) {
                        return {
                            x: touch.pageX,
                            y: touch.pageY
                        };
                    });
                },

                getDistance = function (a, b) {
                    var x, y;
                    x = a.x - b.x;
                    y = a.y - b.y;
                    return Math.sqrt(x * x + y * y);
                },

                calculateScale = function (startTouches, endTouches) {
                    var startDistance = getDistance(startTouches[0], startTouches[1]),
                        endDistance = getDistance(endTouches[0], endTouches[1]);
                    return endDistance / startDistance;
                },

                cancelEvent = function (event) {
                    event.stopPropagation();
                    event.preventDefault();
                },

                detectDoubleTap = function (event) {
                    var time = (new Date()).getTime();

                    if (fingers > 1) {
                        lastTouchStart = null;
                    }

                    if (time - lastTouchStart < 300) {
                        cancelEvent(event);

                        target.handleDoubleTap(event);
                        switch (interaction) {
                            case "zoom":
                                target.handleZoomEnd(event);
                                break;
                            case 'drag':
                                target.handleDragEnd(event);
                                break;
                        }
                    }

                    if (fingers === 1) {
                        lastTouchStart = time;
                    }
                },
                firstMove = true;

            el.addEventListener('touchstart', function (event) {
                if(target.enabled) {
                    firstMove = true;
                    fingers = event.touches.length;
                    // detectDoubleTap(event);
                }
            });

            el.addEventListener('touchmove', function (event) {
                if(target.enabled) {
                    if (firstMove) {
                        updateInteraction(event);
                        if (interaction) {
                            switch (interaction) {
                                case 'zoom':
                                    target.handleFirstZoom(event);
                                    break;
                            }
                            cancelEvent(event);
                        }
                        startTouches = targetTouches(event.touches);
                    } else {
                        switch (interaction) {
                            case 'zoom':
                                target.handleZoom(event, calculateScale(startTouches, targetTouches(event.touches)));
                                break;
                            case 'drag':
                                target.handleDrag(event);
                                break;
                        }
                        if (interaction) {
                            cancelEvent(event);
                            target.update();
                        }
                    }

                    firstMove = false;
                }
            });

            el.addEventListener('touchend', function (event) {
                if(target.enabled) {
                    target.lastAngle = target.rotateAngle;
                    fingers = event.touches.length;
                    updateInteraction(event);
                }
            });
        };

        return PicZoom;
    };

    if (typeof define !== 'undefined' && define.amd) {
        define(['zepto'], function ($) {
            return definePicZoom($);
        });
    } else {
        window.PicZoom = definePicZoom(window.$);
    }
}).call(this);


(function() {
    var paint = {
        init: function() {
            this.load();
        },
        load: function() {
            this.x = []; //记录鼠标移动是的X坐标 
            this.y = []; //记录鼠标移动是的Y坐标 
            this.clickDrag = [];
            this.lock = false; //鼠标移动前，判断鼠标是否按下 
            this.isEraser = false;
            //this.Timer=null;//橡皮擦启动计时器 
            //this.radius=5; 
            this.storageColor = "#000000";
            this.eraserRadius = 15; //擦除半径值 
            this.color = ["#000000", "#FF0000", "#80FF00", "#00FFFF", "#808080", "#FF8000", "#408080", "#8000FF", "#CCCC00"]; //画笔颜色值 
            this.fontWeight = [2, 5, 8];
            this.$ = function(id) {
                return typeof id == "string" ? document.getElementById(id) : id;
            };
            this.canvas = this.$("canvas");
            if (this.canvas.getContext) {} else {
                alert("您的浏览器不支持 canvas 标签");
                return;
            }
            this.cxt = this.canvas.getContext('2d');
            this.cxt.lineJoin = "round"; //context.lineJoin - 指定两条线段的连接方式 
            this.cxt.lineWidth = 5; //线条的宽度 
            this.iptClear = this.$("clear");
            this.revocation = this.$("revocation");
            this.imgurl = this.$("imgurl"); //图片路径按钮 
            this.w = this.canvas.width; //取画布的宽 
            this.h = this.canvas.height; //取画布的高 
            this.touch = ("createTouch" in document); //判定是否为手持设备 
            this.StartEvent = this.touch ? "touchstart" : "mousedown"; //支持触摸式使用相应的事件替代 
            this.MoveEvent = this.touch ? "touchmove" : "mousemove";
            this.EndEvent = this.touch ? "touchend" : "mouseup";
            this.bind();
        },
        bind: function() {
            var t = this;
            /*清除画布*/
            this.iptClear.onclick = function() {
                t.clear();
            };
            /*鼠标按下事件，记录鼠标位置，并绘制，解锁lock，打开mousemove事件*/
            this.canvas['on' + t.StartEvent] = function(e) {
                var touch = t.touch ? e.touches[0] : e;
                var _x = touch.clientX - touch.target.offsetLeft; //鼠标在画布上的x坐标，以画布左上角为起点 
                var _y = touch.clientY - touch.target.offsetTop+$('body').scrollTop(); //鼠标在画布上的y坐标，以画布左上角为起点 
                if (t.isEraser) {
                    /* 
                    t.cxt.globalCompositeOperation = "destination-out"; 
                    t.cxt.beginPath(); 
                    t.cxt.arc(_x, _y,t.eraserRadius, 0, Math.PI * 2); 
                    t.cxt.strokeStyle = "rgba(250,250,250,0)"; 
                    t.cxt.fill(); 
                    t.cxt.globalCompositeOperation = "source-over"; 
                    */
                    t.resetEraser(_x, _y, touch);
                } else {
                    t.movePoint(_x, _y); //记录鼠标位置 
                    t.drawPoint(); //绘制路线 
                }
                t.lock = true;
                e.stopPropagation();
                e.preventDefault();
            };
            /*鼠标移动事件*/
            this.canvas['on' + t.MoveEvent] = function(e) {
                var touch = t.touch ? e.touches[0] : e;
                if (t.lock) //t.lock为true则执行 
                {
                    var _x = touch.clientX - touch.target.offsetLeft; //鼠标在画布上的x坐标，以画布左上角为起点 
                    var _y = touch.clientY - touch.target.offsetTop+$('body').scrollTop(); //鼠标在画布上的y坐标，以画布左上角为起点 
                    if (t.isEraser) {
                        //if(t.Timer)clearInterval(t.Timer); 
                        //t.Timer=setInterval(function(){ 
                        t.resetEraser(_x, _y, touch);
                        //},10); 
                    } else {
                        t.movePoint(_x, _y, true); //记录鼠标位置 
                        t.drawPoint(); //绘制路线 
                    }
                }
                e.stopPropagation();
                e.preventDefault();
            };
            this.canvas['on' + t.EndEvent] = function(e) {
                /*重置数据*/
                t.lock = false;
                t.x = [];
                t.y = [];
                t.clickDrag = [];
                clearInterval(t.Timer);
                t.Timer = null;
                e.stopPropagation();
                e.preventDefault();
            };
            this.revocation.onclick = function() {
                t.redraw();
            };
            this.changeColor();
            this.imgurl.onclick = function() {
                t.getUrl();
            };
            /*橡皮擦*/
            this.$("eraser").onclick = function(e) {
                t.isEraser = true;
                t.$("error").style.color = "red";
                t.$("error").innerHTML = "您已使用橡皮擦！";
            };
        },
        movePoint: function(x, y, dragging) {
            /*将鼠标坐标添加到各自对应的数组里*/
            this.x.push(x);
            this.y.push(y);
            this.clickDrag.push(y);
        },
        drawPoint: function(x, y, radius) {
            for (var i = 0; i < this.x.length; i++) //循环数组 
            {
                this.cxt.beginPath(); //context.beginPath() , 准备绘制一条路径 
                if (this.clickDrag[i] && i) { //当是拖动而且i!=0时，从上一个点开始画线。 
                    this.cxt.moveTo(this.x[i - 1], this.y[i - 1]); //context.moveTo(x, y) , 新开一个路径，并指定路径的起点 
                } else {
                    this.cxt.moveTo(this.x[i] - 1, this.y[i]);
                }
                this.cxt.lineTo(this.x[i], this.y[i]); //context.lineTo(x, y) , 将当前点与指定的点用一条笔直的路径连接起来 
                this.cxt.closePath(); //context.closePath() , 如果当前路径是打开的则关闭它 
                this.cxt.stroke(); //context.stroke() , 绘制当前路径 
            }
        },
        clear: function() {
            this.cxt.clearRect(0, 0, this.w, this.h); //清除画布，左上角为起点 
        },
        redraw: function() {
            /*撤销*/
            this.cxt.restore();
        },
        preventDefault: function(e) {
            /*阻止默认*/
            var touch = this.touch ? e.touches[0] : e;
            if (this.touch) touch.preventDefault();
            else window.event.returnValue = false;
        },
        changeColor: function() {
            /*为按钮添加事件*/
            var t = this,
                iptNum = this.$("color").getElementsByTagName("input"),
                fontIptNum = this.$("font").getElementsByTagName("input");
            for (var i = 0, l = iptNum.length; i < l; i++) {
                iptNum[i].index = i;
                iptNum[i].onclick = function() {
                    t.cxt.save();
                    t.cxt.strokeStyle = t.color[this.index];
                    t.storageColor = t.color[this.index];
                    t.$("error").style.color = "#000";
                    t.$("error").innerHTML = "如果有错误，请使用橡皮擦：";
                    t.cxt.strokeStyle = t.storageColor;
                    t.isEraser = false;
                }
            }
            for (var i = 0, l = fontIptNum.length; i < l; i++) {
                t.cxt.save();
                fontIptNum[i].index = i;
                fontIptNum[i].onclick = function() {
                    t.changeBackground(this.index);
                    t.cxt.lineWidth = t.fontWeight[this.index];
                    t.$("error").style.color = "#000";
                    t.$("error").innerHTML = "如果有错误，请使用橡皮擦：";
                    t.isEraser = false;
                    t.cxt.strokeStyle = t.storageColor;
                }
            }
        },
        changeBackground: function(num) {
            /*添加画笔粗细的提示背景颜色切换，灰色为当前*/
            var fontIptNum = this.$("font").getElementsByTagName("input");
            for (var j = 0, m = fontIptNum.length; j < m; j++) {
                fontIptNum[j].className = "";
                if (j == num) fontIptNum[j].className = "grea";
            }
        },
        getUrl: function() {
            this.$("html").innerHTML = this.canvas.toDataURL();
        },
        resetEraser: function(_x, _y, touch) {
            /*使用橡皮擦-提醒*/
            var t = this;
            //this.cxt.lineWidth = 30; 
            /*source-over 默认,相交部分由后绘制图形的填充(颜色,渐变,纹理)覆盖,全部浏览器通过*/
            t.cxt.globalCompositeOperation = "destination-out";
            t.cxt.beginPath();
            t.cxt.arc(_x, _y, t.eraserRadius, 0, Math.PI * 2);
            t.cxt.strokeStyle = "rgba(250,250,250,0)";
            t.cxt.fill();
            t.cxt.globalCompositeOperation = "source-over"
        }
    };
    window.paint = paint;
}).call(this);

$(function(){
    $.getQuery = function( key , url )
    {
        url = url || window.location.href;
        var rts = [],rt;
        queryReg = new RegExp( '(^|\\?|&)' + key + '=([^&]*)(?=&|#|$)' , 'g' );
        while ( ( rt = queryReg.exec( url ) ) != null )
        {
            rts.push( decodeURIComponent( rt[ 2 ] ) );
        }
        if ( rts.length == 0 ) return null;
        if ( rts.length == 1 ) return rts[ 0 ];
        return rts;
    };
});

$(function () {
    $('div.pic-zoom').each(function () {
        new PicZoom($(this), {});
    });
    paint.init();
    document.getElementById('canvas').width  = window.innerWidth;
    // document.getElementById('canvas').height = window.innerHeight;
    // var cxt = document.getElementById('canvas').getContext('2d');
    // cxt.globalAlpha = "0.5";

    var upfile = document.querySelector('#uploadBtn');
     
    upfile.onchange = function (evt) {
        var files = evt.target.files;
        for(var i = 0, f; f = files[i]; i++){
            if(!f.type.match('image.*')) continue;
            
            var reader = new FileReader();
            reader.onload = (function(theFile){
                return function(e){
                    var img = $(".pic-zoom img")[0];//document.createElement('img');
                    img.title = theFile.name;
                    img.src = e.target.result;
                }
            })(f);
            reader.readAsDataURL(f);
        }  
    }


    $('.pic-container').hide();
    $('.pic-container').show();






    $('.viewport-show').hide();
    $('.viewport-canvas').hide();

    var area = $.getQuery('area');
    if (area) {
        $('.viewport-'+area).show();
    }
    else{
        $('.viewport-show').show();
    }

});
