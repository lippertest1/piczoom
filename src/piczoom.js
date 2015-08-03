





//tools
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

    //https://github.com/vczero/OurTimes/blob/master/server/util/guid.js
    window.Guid =function(){
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        }).toUpperCase();
    };

});

commentIdList = [
    {"name":"莫奈",  "comment":"光与影的绝妙组合"},
    {"name":"安格尔", "comment":"这幅作品放到下个世纪也难以被人超越！"},
    {"name":"毕加索", "comment":"这幅作品比我的只差了那么一点点"},
    {"name":"达芬奇", "comment":"你有着热爱艺术的心，就是技术有待提高"},
    {"name":"梵高",  "comment":"幸好我没自挖双目，才能遇见这绝世的佳作"},
    {"name":"德加",  "comment":"还好我们生活在不同的时代"},
    {"name":"德拉克洛瓦",   "comment":"我的艺术理念后继有人了！"},
    {"name":"佛里达", "comment":"你又激发了我的创作灵感"},
    {"name":"戈雅",  "comment":"抽象派与野兽派的完美结合"},
    {"name":"卡拉瓦乔",    "comment":"运气与实力混杂各半造就的成品"},
    {"name":"库贝尔", "comment":"一幅作品中蕴藏着一个别样的世界"},
    {"name":"拉斐尔", "comment":"我看到了人世间的悲欢离合"},
    {"name":"雷诺阿", "comment":"此情此景不禁让我潸然泪下"},
    {"name":"达利",  "comment":"在你的作品中，我仿佛看到了又一个梦境"},
    {"name":"鲁本斯", "comment":"灵与肉，生命与死亡，你与我，感同身受。"},
    {"name":"伦勃朗", "comment":"作品没有好坏，只有喜欢不喜欢"},
    {"name":"马蒂斯", "comment":"我想将这幅作品挂到我家的壁炉上"},
    {"name":"米开朗琪罗",   "comment":"犹如写意的笔墨，挥洒自如"},
    {"name":"米勒",  "comment":"如何用一副作品去探讨一个生与死的主题"},
    {"name":"委拉斯开兹",   "comment":"摄影师与变态，只差一步"}
]
dialogIdList =[
    {"name1":"安格尔", "dialog1":"请问你的作品都在表达什么？","name2":   "毕加索","dialog2": "漂亮就行！"},
    {"name1":"德加",  "dialog1":"你喜欢油画还是素描？","name2":  "德拉克洛瓦","dialog2":   "只要心情对了，白纸也是艺术"},
    {"name1":"夏加尔", "dialog1":"你在画中看到了什么？","name2":  "库尔贝","dialog2": "是朕为你打下的江山啊！"},
    {"name1":"伦勃朗", "dialog1":"有人说你自画像丑","name2":    "毕加索","dialog2": "那是他们没看过我真人，那才叫丑"},
    {"name1":"佛里达", "dialog1":"如果让我来一幅一幅一幅的剖析你的画……","name2": "戈雅","dialog2":  "你会坐牢的我跟你讲"},
    {"name1":"米开朗琪罗",   "dialog1":"我能欣赏一下你的《星空》吗？","name2":  "梵高","dialog2":  "****       *****"},
    {"name1":"拉斐尔", "dialog1":"你见过最美丽的人是蒙娜丽莎还是……","name2":   "达芬奇","dialog2": "是我！"},
    {"name1":"卡拉瓦乔",    "dialog1":"我还以为在这里见不到像样的作品呢！","name2":   "库尔贝","dialog2": "在哪儿呢？！"},
    {"name1":"米勒",  "dialog1":"这幅作品的名字是什么啊？","name2":    "委拉斯开兹","dialog2":   "我画你猜！"},
    {"name1":"毕加索", "dialog1":"听说你很羡慕我？","name2":    "梵高","dialog2":  "卢浮宫没请你去开业剪彩吗？"},
    {"name1":"鲁本斯", "dialog1":"给爷扭个秧歌儿？","name2":    "马蒂斯","dialog2": "老子会画不代表老子会跳！"},
    {"name1":"毕加索", "dialog1":"活的久了真是什么都能见到啊。","name2":  "梵高","dialog2":  "滚开！老不死的！"},
    {"name1":"米开朗琪罗",   "dialog1":"现在几点了？","name2":  "达利","dialog2":  "我的钟，看的是命运，而不是时间。"},
    {"name1":"委拉斯开兹",   "dialog1":"您觉得这幅画能卖多少钱呢？","name2":   "雷诺阿","dialog2": "无价、无~价!"},
    {"name1":"德加",  "dialog1":"除了草垛子，你还会画什么！","name2":   "莫奈","dialog2":  "  总比你整天画舞妹子强，变态大叔！ "},
    {"name1":"德加",  "dialog1":"今天这张跳舞的妹子画的好成功。","name2": "雷诺阿","dialog2": "妹子？什么妹子？哪的妹子？身材如何！ "},
    {"name1":"库尔贝", "dialog1":"年轻人，不用在意画的好坏，美与丑，善与恶，到头来都是一片虚无。","name2": "鲁本斯","dialog2": "画家界最伟大的鸡汤大师，鸡汤界最伟大的画家。"},
    {"name1":"佛里达", "dialog1":"谁说自己画的比我好？！来决斗！","name2": "卡拉瓦乔","dialog2":    "决斗？！我喜欢！在哪里？"}
]


window.parseJSON = function(data) {
    // Attempt to parse using the native JSON parser first
    if (window.JSON && window.JSON.parse) {
        return window.JSON.parse(data);
    }

    if (data === null) {
        return data;
    }
    if (typeof data === "string") {

        // Make sure leading/trailing whitespace is removed (IE can't handle it)
        data = this.trim(data);

        if (data) {
            // Make sure the incoming data is actual JSON
            // Logic borrowed from http://json.org/json2.js
            if (/^[\],:{}\s]*$/.test(data.replace(/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, "@").replace(/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {

                return (function() {
                    return data;
                })();
            }
        }
    }
};

window.goTo = function(area,state){
    console.log("goTo area="+area);
    history.pushState({area:area,state:state||""}, "页面标题", "piczoom.html?area="+area+"&state=test")
    view.onshow(area);
}

window.addEventListener("popstate", function() {
    console.log("popState history.state="+JSON.stringify(history.state));
    var currentState = history.state;
    view.onshow(history.state.area);                                         
});

window.G = {};
G.pic={};
G.pic.host="http://7xkkuk.com2.z0.glb.qiniucdn.com/";
// G.pic[G.pic.type]
// G.pic["bkg"] G.pic["border"] G.pic["sign"]
G.pic.type="bkg";//or border

window.view = {
    init:function(){

        var slide_title_div = new Slider('.slide_title_outer', {
            widthScale: 1.2/5,
            moveFromScale: 1.2/5,
            X: true,
            Y: false,
            Xfrom: true,
            Yfrom: false,
            resizeInInit: true,
            offsetPageCount: 2,
            allPageCountPercent: 15,
            slideBackScale: 11
        });

        $('.slide_title_outer').on('click', function(e){
            $(e.target).siblings().css("background-color","#fff");
            $(e.target).css("background-color","#3f3f3f");
            G.pic.border = /\d+/.exec(e.target.className)[0];

            $(".border_image").css("border-image",$(e.target).css("background-image").replace("qiniucdn.com/hk-s","qiniucdn.com/hk-l")+" 70 70 round");
            $(".-moz-border-image").css("border-image",$(e.target).css("background-image").replace("qiniucdn.com/hk-s","qiniucdn.com/hk-l")+" 70 70 round");
            $(".-webkit-border-image").css("border-image",$(e.target).css("background-image").replace("qiniucdn.com/hk-s","qiniucdn.com/hk-l")+" 70 70 round");
            $(".-o-border-image").css("border-image",$(e.target).css("background-image").replace("qiniucdn.com/hk-s","qiniucdn.com/hk-l")+" 70 70 round");

        });
        this.onload();
    },
    onload:function(){
        this.onshow();
    },
    onshow:function(area){

        var that = this;
        console.log("onshow area="+area);
        //render which view
        $('.viewport-show').hide();
        $('.viewport-intro').hide();
        $('.viewport-canvas').hide();
        if (area) {
            if(area=='all'){
                $('.viewport-show').show();
                $('.viewport-intro').show();
                $('.viewport-canvas').show();
            }
            $('.viewport-'+area).show();
            if(area=="intro"){
                $(".finishUpload").show();
                $("#uploadDiv").show();
            }
        }
        else{
            $('.viewport-show').show();
        }


        if(area == "show"){
            var artId = $.getQuery("artId") || 'ECDB430C-EFD5-45C3-943B-4183AED0684D';
            var ajax = new XMLHttpRequest();
            ajax.open('GET', 'http://192.168.1.116/X_1_FirstWebAPI/api/art/get?artId='+artId, true);
            // ajax.setRequestHeader("If-Modified-Since", "0");
            ajax.onreadystatechange = function() {
                if (ajax.readyState === 4 && ajax.status === 200) {
                    var res = parseJSON(ajax.responseText);
                    console.log(res);
                    that.render(area,res)
                }
            };
            ajax.send();
        }else if(area == "intro"){
            window.uploader = Qiniu.uploader({
                runtimes: 'html5,flash,html4',
                browse_button: 'uploadDiv',
                container: 'button-container',
                drop_element: 'button-container',
                max_file_size: '100mb',
                flash_swf_url: 'Moxie.swf',
                dragdrop: true,
                chunk_size: '4mb',
                uptoken_url: 'http://192.168.1.116/X_1_FirstWebAPI/api/qiniu/get',
                domain: 'http://7xkkuk.com2.z0.glb.qiniucdn.com/',
                // downtoken_url: '/downtoken',
                // unique_names: true,
                // save_key: true,
                // x_vars: {
                //     'id': '1234',
                //     'time': function(up, file) {
                //         var time = (new Date()).getTime();
                //         // do something with 'time'
                //         return time;
                //     },
                // },
                auto_start: true,
                init: {
                    'FilesAdded': function(up, files) {
                        console.log("FilesAdded");
                        // $('table').show();
                        // $('#success').hide();
                        // plupload.each(files, function(file) {
                        //     var progress = new FileProgress(file, 'fsUploadProgress');
                        //     progress.setStatus("等待...");
                        // });
                    },
                    'BeforeUpload': function(up, file) {
                        console.log("BeforeUpload");
                        // var progress = new FileProgress(file, 'fsUploadProgress');
                        // var chunk_size = plupload.parseSize(this.getOption('chunk_size'));
                        // if (up.runtime === 'html5' && chunk_size) {
                        //     progress.setChunkProgess(chunk_size);
                        // }
                    },
                    'UploadProgress': function(up, file) {
                        console.log("UploadProgress");
                        // var progress = new FileProgress(file, 'fsUploadProgress');
                        // var chunk_size = plupload.parseSize(this.getOption('chunk_size'));

                        // progress.setProgress(file.percent + "%", file.speed, chunk_size);
                    },
                    'UploadComplete': function(up, file) {
                        console.log("UploadComplete");
                        // alert(G.pic.type+" "+G.pic[G.pic.type]);

                        goTo('canvas');
                        // $('#success').show();
                    },
                    'FileUploaded': function(up, file, info) {
                        console.log("FileUploaded");
                        // var progress = new FileProgress(file, 'fsUploadProgress');
                        // progress.setComplete(up, info);
                    },
                    'Error': function(up, err, errTip) {
                        console.log("Error");
                        // $('table').show();
                        // var progress = new FileProgress(err.file, 'fsUploadProgress');
                        // progress.setError();
                        // progress.setStatus(errTip);
                    }
                    // ,
                    // 'Key': function(up, file) {
                    //     var key = "";
                    //     // do something with key
                    //     return key
                    // }
                }
            });

            uploader.bind('FileUploaded', function() {
                console.log('hello man,a file is uploaded');
            });
        } 
    },
    render:function(area,res){
        if(area == "show"){
            console.log("render");

            var dialogIdRand = Math.floor(Math.random()*dialogIdList.length);
            var dialog = dialogIdList[dialogIdRand];

            $(".commentBox-discus").show();
            $(".commentBox-discus .nickname").html(dialog.dialog1);
            $(".commentBox-discus .nickname-right").html(dialog.dialog2);

            $(".commentBox-discus .avatar-left").css("background-image","url(http://7xkkuk.com2.z0.glb.qiniucdn.com/"+dialog.name1+".jpg)");
            $(".commentBox-discus .avatar-right").css("background-image","url(http://7xkkuk.com2.z0.glb.qiniucdn.com/"+dialog.name2+".jpg)");


            $('.infoBox').hide();
            $(".commentBox").hide();
            $(".borderChoose").hide();

            if(res){
                G&&G.pic&&(G.pic["bkg"] = res.picKey);
                G&&G.pic&&(G.pic["sign"] = res.signKey);
                G&&G.pic&&(G.pic["css"] = res.css);
                G&&G.pic&&(G.pic["score"] = res.score);
                G&&G.pic&&(G.pic["artName"] = res.artName);

            }

            
            if(G&&G.pic&&G.pic["bkg"]){
                var img = $(".viewport-show .pic-zoom img")[0];//document.createElement('img');
                img.title = "";
                img.src = G.pic.host+G.pic["bkg"];
            }
            if(G&&G.pic&&G.pic["sign"]){
                var img = $(".viewport-show .pic-sign img")[0];//document.createElement('img');
                img.title = "";
                img.src = G.pic.host+G.pic["sign"];
            }
            if(G&&G.pic&&G.pic["css"]){
                var img = $(".viewport-show .pic-zoom")[0];
                $(img).attr("style",G.pic["css"]);
            }
            if(G&&G.pic&&G.pic["score"]){
                var div = $(".viewport-show .price-text i")[0];
                var score = G.pic["score"];
                if(score-score%1000){
                    scoreStr = (score-score%1000)/1000 + "," +score%1000;
                }else{
                    scoreStr = score;
                }
                $(div).html("$ "+scoreStr);
            }
            if(G&&G.pic&&G.pic["artName"]){
                var div = $(".viewport-show .name-show div")[0];
                $(div).html("$ "+G.pic["artName"]);
            }
            

            if(history.state.state == ""){
                $('.show-init').show();

                // $(".show-finishUpload").show();
                // $(".borderChoose").show();
            }
            else if(history.state.state == "finishUpload"){
                $(".show-finishUpload").show();
                $(".borderChoose").show();
            }
            else if(history.state.state == "confirm"){
                $('.show-confirm').show();

                $.ajax({
                    url:'http://192.168.1.116/X_1_FirstWebAPI/api/art/post',
                    type:"POST",
                    // contentType:"application/json; charset=utf-8",
                    data:{"":JSON.stringify({"artId":7,"artName":"test007","openId":"","picKey":"lipper.jpg","css":"","borderId":7,"signKey":"FpAAO2CE7pZzNKFdpEUb4HQ_dRY9","uploadDate":"0001-01-01T00:00:00","score":1888,"commentIdList":"1,2,6"})},
                    success: function(){
                        alert(1);
                    }
                })

                // var ajax = new XMLHttpRequest();
                // var data = [{"artId":7,"artName":"test007","openId":"","picKey":"lipper.jpg","css":"","borderId":7,"signKey":"FpAAO2CE7pZzNKFdpEUb4HQ_dRY9","uploadDate":"0001-01-01T00:00:00","score":1888,"commentIdList":"1,2,6"}];
                // ajax.open('POST', 'http://192.168.1.116/X_1_FirstWebAPI/api/art/post', true);            
                // // ajax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
                // ajax.setRequestHeader("Content-Type", "application/json;charset=utf-8");
                // ajax.onreadystatechange = function() {
                //     if (ajax.readyState === 4 && ajax.status === 200) {
                //         var res = parseJSON(ajax.responseText);
                //         console.log(res);
                //         $(".commentBox-comment").show();
                //         var name = commentIdList[res.commentIdList-1].name;
                //         var comment = commentIdList[res.commentIdList-1].comment;
                //         $(".commentBox-comment .nickname").html(name);
                //         $(".commentBox-comment .comment-content").html(comment);
                //         $(".commentBox-comment .avatar").css("background-image","url(http://7xkkuk.com2.z0.glb.qiniucdn.com/"+name+".jpg)");

                        
                //     }
                // };
                // ajax.send(JSON.stringify(data));
            }
            $('.viewport-show');
        }
    }
};

//main
$(function () {
    $('div.pic-zoom').each(function () {
        new PicZoom($(this), {});
    });
    paint.init();
    document.getElementById('canvas').width  = window.innerWidth;

    //上传图片按钮
    // var upfile = document.querySelector('#uploadBtn');
    // upfile.onchange = function (evt) {
    //     var files = evt.target.files;
    //     for(var i = 0, f; f = files[i]; i++){
    //         if(!f.type.match('image.*')) continue;
            
    //         var reader = new FileReader();
    //         reader.onload = (function(theFile){
    //             return function(e){
    //             }
    //         })(f);
    //         reader.readAsDataURL(f);
    //     }  
    //     goTo('show');
    // }
    view.init();

    document.querySelector('#button-show').onclick=function(){
        goTo('intro');
    }

    document.querySelector('#confirm').onclick=function(){
        G.artId = Guid();
        G.artName = $("#artName").val();
        G.css = $(".border_image").attr("style");
        G.uploadDate = (new Date()).getTime();

        var data = {
            artId : G.artId,
            artName : G.artName,
            openId : "",
            picKey : G.pic.bkg,
            css : G.css,
            bordeId : G.pic.border,
            signKey : G.pic.sign,
            uploadDate : G.uploadDate 
            // score : ,
            // commentIdList : 
        }
        goTo('show',"confirm");
    }


    var area = $.getQuery('area');
    goTo(area);

});
