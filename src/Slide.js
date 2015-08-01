/**
 * @slide 滑动控件
 * @author zhangliping
 */
    function Slider(slide_container_dom, options) {
        var defaults = {
            widthScale: 1,
            moveFromScale: 1,
            X: true,
            Xfrom: true,
            Xmin: -Infinity,
            Xmax: Infinity,
            Y: true,
            Yfrom: true,
            Ymin: -Infinity,
            Ymax: Infinity,
            resizeInInit: true,
            slideBackScale: 0.25,
            speed: 600,
            startRadius: 50,
            angle: Math.PI / 3,
            offsetShowY: 144,
            offsetNowY: 144,
            offsetHideY: 8,
            offsetPageCount: 0,
            allPageCountPercent: undefined
        };
        this.options = $.extend(defaults, options);

        this.$C = $(slide_container_dom);
        this.W = this.$C.children()[0];
        this.$W = $(this.W);

        this.page_count = this.$W.children().length;
        this.options.allPageCountPercent = this.options.allPageCountPercent || this.page_count;
        this.cur_page = (this.page_count + this.page_count % 2) / 2 - 1;
        //calc page width and set them
        this.page_width = this.$C.width() * this.options.widthScale;
        this.slide_bkrange = this.page_width * this.options.slideBackScale;
        this.all_pageWidth = this.page_width * this.page_count;
        this.options.resizeInInit && this.$W.width(this.all_pageWidth + "px");
        this.options.resizeInInit && this.$W.children(" div").width(this.page_width + "px");

        this.$W.on('touchstart', this.onTouchStart.bind(this));
        this.$W.on('touchmove', this.onTouchMove.bind(this));
        this.$W.on('touchend', this.onTouchEnd.bind(this));
        this.$W.on('touchcancel', this.onTouchEnd.bind(this));
        // this.slideToCurPage(0);
        // console.log(this);
    };

    Slider.prototype.onTouchStart = function(e, efrom) {
        e.data = this;
        !efrom && e && this._onEvent('touchstart', e);
        e.stopPropagation();
        var touches = efrom ? efrom.touches[0] : e.touches[0];

        this.touchFirst_obj = {
            startX: touches.clientX,
            startY: touches.clientY,
            time: +new Date()
        };
        this.$W.removeClass('transition_fast');

        var transfrom_info = window.getComputedStyle(e.currentTarget, null).getPropertyValue("-webkit-transform").split(',');
        this.startTranslateX = transfrom_info && transfrom_info[4] || 0;
        this.startTranslateY = transfrom_info && (transfrom_info[5] || "").replace(/\)/, "").trim() || 0;
    };

    Slider.prototype.onTouchMove = function(e, efrom) {
        e.data = this;
        !efrom && this.movingDir && this._onEvent('touchmove', e);
        e.preventDefault();
        this.touchLast_obj = efrom ? efrom.touches[0] : e.touches[0];
        this.moveX = this.options.X ? this.touchLast_obj.clientX - this.touchFirst_obj.startX : 0;
        this.moveY = this.options.Y ? this.touchLast_obj.clientY - this.touchFirst_obj.startY : 0;

        // use every move data when efrom
        // if (efrom) {
        //     this.movingDir = efrom.data.movingDir;
        //     this.tmpMoveX = this.options.Xfrom ? efrom.data.tmpMoveX * this.options.moveFromScale : 0;
        //     this.tmpMoveY = this.options.Yfrom ? efrom.data.tmpMoveY * this.options.moveFromScale : 0;

        //     this.moveX = this.options.Xfrom ? efrom.data.moveX * this.options.moveFromScale : 0;
        //     this.moveY = this.options.Yfrom ? efrom.data.moveY * this.options.moveFromScale : 0;
        // } else {
        //     if (Math.pow(this.moveX, 2) + Math.pow(this.moveY, 2) < Math.pow(this.options.startRadius, 2)) {
        //         Math.abs(this.moveY) > Math.abs(this.moveX) * Math.tan(this.options.angle) ? (this.movingDir = 'Y') : (this.movingDir = 'X');
        //         this.tmpMoveX = this.moveX;
        //         this.tmpMoveY = this.moveY;
        //     } else {
        //         if (this.movingDir == 'X') {
        //             this.moveY = this.tmpMoveY || 0;
        //         } else {
        //             this.moveX = this.tmpMoveX || 0;
        //         }
        //     }
        // }

        if (this.movingDir == 'Y') {
            !efrom && this._onEvent('touchmoveY', e, this.moveY);
        }
        
        this.currentTranslateX = +this.startTranslateX + +this.moveX ;//- this.tmpMoveX;
        this.currentTranslateY = +this.startTranslateY + +this.moveY ;//- this.tmpMoveY;
// console.log("move ",this.$C[0].className,this);
        this.translate(this.currentTranslateX, this.currentTranslateY, 0);
    };

    Slider.prototype.onTouchEnd = function(e, efrom) {
        e.data = this;
        e.stopPropagation();

        console.log(this.slide_bkrange);
        if (this.currentTranslateX > 0) {
            this.translate(0, this.currentTranslateY, 600);
        } 
        else if (this.currentTranslateX < -this.slide_bkrange) {
            this.translate(-this.slide_bkrange, this.currentTranslateY, 600);
        }

        // if (this.moveX > this.slide_bkrange) {
        //     if (this.cur_page != 0) {
        //         this.cur_page--;
        //     }
        // } else if (this.moveX < -this.slide_bkrange) {
        //     if (this.cur_page != +this.page_count - 1) {
        //         this.cur_page++;
        //     }
        // }
        
        // !efrom && this._onEvent('touchend', e);

        // efrom && (this.cur_page = efrom.data.cur_page);
        // // todo
        // if (this.moveY < -this.options.startRadius || (efrom && efrom.data.moveY < -this.options.startRadius) ) {
        //     this.options.offsetNowY = this.options.offsetHideY;
        // } else if(this.moveY > this.options.startRadius || (efrom && efrom.data.moveY > this.options.startRadius) ) {
        //     this.options.offsetNowY = this.options.offsetShowY;
        // }
// console.log("end ",this.$C[0].className,this);
        // this.slideToCurPage();
        // this.movingDir = undefined;
        // this.moveX = 0;
    };

//     Slider.prototype.slideToCurPage = function(speed) {
//         $(this.$W.children()[this.cur_page]).addClass("current").siblings().removeClass("current");

//         var offsetX = (this.options.Xfrom||this.options.X) ? 100 * (this.options.offsetPageCount - this.cur_page) / this.options.allPageCountPercent + '%' : 0;
//         var offsetY = (this.options.Yfrom||this.options.Y) ? /translateY\([-\d]*px\)/.exec(this.$W.css('-webkit-transform')) : 0;

//         //todo
//         if(this.options.specialFlag){
//             offsetY = this.options.offsetNowY;
//         }
//         else{
//             //has offsetY over the container ? then set it to default.
//             offsetY = offsetY ? (offsetY[0].indexOf('-') > -1 ? offsetY[0] : this.options.offsetNowY) : this.options.offsetNowY;

//             // has offsetY almost to the last children ? then set it back to the deepest it can
//             var lc = this.$W.children('.current').children(":last-child");
//             if (lc.offset() && lc.offset().top < lc.height() * 2 - this.options.offsetNowY) {
//                 var offsetYBottom = lc.height() * (1 - lc.siblings().length);
//                 offsetYBottom >= 0 && (offsetYBottom = this.options.offsetNowY);
//                 offsetY = offsetYBottom;
//             }
//         }

// // console.log(this.$W,offsetY);
//         !this.options.Y && !this.options.Yfrom && (offsetY = 0);
//         this.translate(offsetX, offsetY, speed);
//     };

    Slider.prototype.translate = function(posX, posY, speed) {
        // if(posX==0){debugger;}
        this.setSpeed(speed);
        var posX = posX;
        var posY = posY;
        if(posX < this.options.Xmin) posX = this.options.Xmin;
        if(posX > this.options.Xmax) posX = this.options.Xmax;
        if(posY < this.options.Ymin) posY = this.options.Ymin;
        if(posY > this.options.Ymax) posY = this.options.Ymax;

        if(posX.toString().indexOf("%")<0) posX += "px";
        if(posY.toString().indexOf("%")<0) posY += "px";
        this.$W.css('-webkit-transform', 'translateX(' + posX + ') translateY(' + posY + ') translateZ(0)');
    };

    Slider.prototype.setSpeed = function(speed){
        if(typeof speed != "number") speed = this.options.speed;
        this.W.style.webkitTransitionDuration =
        this.W.style.MozTransitionDuration =
        this.W.style.msTransitionDuration =
        this.W.style.OTransitionDuration =
        this.W.style.transitionDuration = speed + 'ms';
    };

    Slider.prototype._onEvent = function() {
        // console.log("u should rewrite _onEvent function");
    };

    Slider.prototype.setEventHandler = function(fun) {
        this._onEvent = fun;
    };