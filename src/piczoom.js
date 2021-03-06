





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
endCommentListG=[
    "你敢点吗？",
    "但求一战！",
    "不服戳我啊！",
    "跪下唱征服！",
    "快来膜拜我！",
    "不来一发吗？",
    "求超越！",
    "代购算神马！",
    "叫我陈关西！"
];

endCommentListB=[
    "心好累！",
    "人艰不拆！",
    "为何要彼此伤害？",
    "我想静静…"
];
borderIdList=[
    "木质1",
    "木质1",
    "木质2",
    "木质3",
    "塑料制1",
    "塑料制2",
    "现代1",
    "现代带黑框黑",
    "现代带框黑",
    "现代带框红",
    "现代带框黄",
    "现代带框青",
    "现代带青框红",
    "现代红",
    "现代黄",
    "现代青",
    "现代青"
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
    view.onshow(area,state);
}

window.addEventListener("popstate", function() {
    console.log("popState history.state="+JSON.stringify(history.state));
    var currentState = history.state;
    // view.onshow(history.state && history.state.area);                                         
});

window.G = {};
G.pic={};
G.pic.host="http://7xkkuk.com2.z0.glb.qiniucdn.com/";
// G.pic[G.pic.type]
// G.pic["bkg"] G.pic["border"] G.pic["sign"]
G.pic.type="bkg";//or border

window.view = {
    init:function(){

        
        this.onload();
    },
    onload:function(){
        this.onshow();
    },
    onshow:function(area, state){
        area = area||$.getQuery("area");

        G.pic.host="http://7xkkuk.com2.z0.glb.qiniucdn.com/";

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


        if(area == "show" && state != "finishUpload" && state != "confirm"){
            var artId = $.getQuery("artId") || 'ECDB430C-EFD5-45C3-943B-4183AED0684D';
            var ajax = new XMLHttpRequest();
            ajax.open('GET', 'http://campaign.vart.cc/201508/api/art/get?artId='+artId, true);
            // ajax.setRequestHeader("If-Modified-Since", "0");
            ajax.onreadystatechange = function() {
                if (ajax.readyState === 4 && ajax.status === 200) {
                    var res = parseJSON(ajax.responseText);
                    console.log(res);
                    that.render(area,res)
                }
            };
            ajax.send();
        }
        else if (area == "show" && state == "finishUpload"){
            that.render(area);
            var img = $(".viewport-show .pic-zoom")[0];
            $(img).attr("style","");

            var slide_dom_string = '<div class="slider-page slide-page-4"></div><div class="slider-page slide-page-5"></div><div class="slider-page slide-page-6"></div><div class="slider-page slide-page-7"></div><div class="slider-page slide-page-8"></div><div class="slider-page slide-page-9"></div><div class="slider-page slide-page-10"></div><div class="slider-page slide-page-11"></div><div class="slider-page slide-page-12"></div><div class="slider-page slide-page-13"></div><div class="slider-page slide-page-14"></div><div class="slider-page slide-page-15"></div>';
            $('#slide_title_div').append(slide_dom_string);
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
                G.pic.borderId = /\d+/.exec(e.target.className)[0];

                $(".border_image").css("border-image",$(e.target).css("background-image").replace("qiniucdn.com/n-hk-s","qiniucdn.com/n-hk-l")+" 70 70 round");
                $(".-moz-border-image").css("border-image",$(e.target).css("background-image").replace("qiniucdn.com/n-hk-s","qiniucdn.com/n-hk-l")+" 70 70 round");
                $(".-webkit-border-image").css("border-image",$(e.target).css("background-image").replace("qiniucdn.com/n-hk-s","qiniucdn.com/n-hk-l")+" 70 70 round");
                $(".-o-border-image").css("border-image",$(e.target).css("background-image").replace("qiniucdn.com/n-hk-s","qiniucdn.com/n-hk-l")+" 70 70 round");

            });
        }
        else if (area == "show" && state == "confirm"){
            that.render(area);
        }
        else if(area == "intro"){
            window.uploader = Qiniu.uploader({
                runtimes: 'html5,flash,html4',
                browse_button: 'uploadDiv',
                container: 'button-container',
                drop_element: 'button-container',
                max_file_size: '100mb',
                flash_swf_url: 'Moxie.swf',
                dragdrop: true,
                chunk_size: '4mb',
                uptoken_url: 'http://campaign.vart.cc/201508/api/qiniu/get',
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
                        console.log("UploadProgress",file.percent + "%");
                        $(".ui-progressbar").css("width",file.percent*0.8 + "%");
                        $(".ui-progressbar").css("height","20px");
                        $(".ui-progressbar-text").show();
                        $(".ui-progressbar-text").css("height","20px");
                        // var progress = new FileProgress(file, 'fsUploadProgress');
                        // var chunk_size = plupload.parseSize(this.getOption('chunk_size'));

                        // progress.setProgress(file.percent + "%", file.speed, chunk_size);
                    },
                    'UploadComplete': function(up, file) {
                        console.log("UploadComplete");
                        // alert(G.pic.type+" "+G.pic[G.pic.type]);
                        if(G&&G.pic&&G.pic["bkg"]){
                            var img = $(".viewport-show .pic-zoom img")[0];//document.createElement('img');
                            img.title = "";
                            img.src = G.pic.host+G.pic["bkg"];
                        }
                        var img = $(".viewport-show .pic-sign img")[0];//document.createElement('img');
                        img.title = "";
                        img.src = "";
                        $(".ui-progressbar-text").hide();
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

            $('.infoBox').hide();
            $(".commentBox").hide();endCommentListG
            $(".borderChoose").hide();

            if(res){
                G&&G.pic&&(G.pic["bkg"] = res.picKey);
                G&&G.pic&&(G.pic["sign"] = res.signKey);
                G&&G.pic&&(G.pic["css"] = res.css);
                G&&G.pic&&(G.pic["score"] = res.score);
                G&&G.pic&&(G.pic["artName"] = res.artName);
                G&&G.pic&&(G.pic["scoreComment"] = res.scoreComment);
                G&&G.pic&&(G.pic["commentIdList"] = res.commentIdList);
                G&&G.pic&&(G.pic["borderId"] = res.borderId);
            }

            if(G&&G.pic&&G.pic["borderId"]){
                $(".border_image").css("border-image","url(http://7xkkuk.com2.z0.glb.qiniucdn.com/n-hk-l-"+borderIdList[G.pic["borderId"]]+".png) 70 70 round");
                $(".-moz-border-image").css("border-image","url(http://7xkkuk.com2.z0.glb.qiniucdn.com/n-hk-l-"+borderIdList[G.pic["borderId"]]+".png) 70 70 round");
                $(".-webkit-border-image").css("border-image","url(http://7xkkuk.com2.z0.glb.qiniucdn.com/n-hk-l-"+borderIdList[G.pic["borderId"]]+".png) 70 70 round");
                $(".-o-border-image").css("border-image","url(http://7xkkuk.com2.z0.glb.qiniucdn.com/n-hk-l-"+borderIdList[G.pic["borderId"]]+".png) 70 70 round");
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
                try{
                    $(img).attr("style",JSON.parse(G.pic["css"]));
                }
                catch(e){
                    $(img).attr("style",G.pic["css"]);
                }
            }
            if(G&&G.pic&&G.pic["score"]){
                var div = $(".viewport-show .price-text i")[0];
                var score = G.pic["score"];
                if(score.toString().length>3){
                    scoreStr = score.replace(/(\d)(\d{3})(?=(?:\d{4})*(?!\d))/g,'$1,$2'); 
                }else{
                    scoreStr = score;
                }
                $(div).html("$ "+scoreStr);
            }
            if(G&&G.pic&&G.pic["artName"]){
                var div = $(".viewport-show .name-show div")[0];
                $(div).html("《"+G.pic["artName"]+"》");
            }
            if(G&&G.pic&&G.pic["scoreComment"]){
                G.pic.commentIdList = Math.floor(commentIdList.length * Math.random());
                var name = commentIdList[G.pic.commentIdList%commentIdList.length].name;
                // var comment = commentIdList[G.pic.commentIdList-1].comment;
                var comment = G.pic.scoreComment;
                $(".commentBox-comment .nickname").html(name);
                $(".commentBox-comment .comment-content").html(comment);
                $(".commentBox-comment .avatar").css("background-image","url(http://7xkkuk.com2.z0.glb.qiniucdn.com/"+name+".jpg)");
            }
            

            if(!history.state || (history.state && !history.state.state) ){
                $('.show-init').show();

                // $(".show-finishUpload").show();
                // $(".borderChoose").show();
            }
            else if(history.state && history.state.state == "finishUpload"){
                $(".show-finishUpload").show();
                turnOn();
                $('.show-init').hide();
                $(".borderChoose").show();
            }
            else if(history.state && history.state.state == "confirm"){
                $('.show-confirm').show();
                $(".fixed-mask").show();
                turnOff();
                $.ajax({
                    dataType: 'json',
                    url:'http://campaign.vart.cc/201508/api/art/post',
                    type:"POST",
                    contentType:"application/json; charset=utf-8",
                    // data:{"":JSON.stringify(G.   )},
                    data:JSON.stringify(G.postData),
                    success: function(res){
                        console.log("show share",res);
                        var dialogIdRand = Math.floor(Math.random()*dialogIdList.length);
                        var dialog = dialogIdList[dialogIdRand];

                        $(".commentBox-discus .nickname").html(dialog.dialog1);
                        $(".commentBox-discus .nickname-right").html(dialog.dialog2);

                        $(".commentBox-discus .avatar-left").css("background-image","url(http://7xkkuk.com2.z0.glb.qiniucdn.com/"+dialog.name1+".jpg)");
                        $(".commentBox-discus .avatar-right").css("background-image","url(http://7xkkuk.com2.z0.glb.qiniucdn.com/"+dialog.name2+".jpg)");

                        
                        if(res){
                            G.pic = res;
                            //替换分数和名字
                            //显示评论和对话
                            if(G&&G.pic&&G.pic["score"]){
                                var div = $(".viewport-show .price-text i")[0];
                                var score = G.pic["score"];
                                if(score.toString().length>3){
                                    scoreStr = score.replace(/(\d)(\d{3})(?=(?:\d{4})*(?!\d))/g,'$1,$2'); 
                                }else{
                                    scoreStr = score;
                                }
                                $(div).html("$ "+scoreStr);
                            }
                            if(G&&G.pic&&G.pic["artName"]){
                                var div = $(".viewport-show .name-show div")[0];
                                $(div).html("《"+G.pic["artName"]+"》");
                            }
                            if(G&&G.pic&&G.pic["scoreComment"]){
                                var div = $(".commentBox-comment .comment-content")[0];
                                $(div).html(G.pic["scoreComment"]);
                            }

                                // $(div).html(G.pic["scoreComment"]);
                            $(".show-init").show();
                            $(".show-init-confirm-not").hide();
                            // $(".discusing").hide();
                            
                            var score = G.pic.score;
                            var endComment = "";
                            if(score=="无法估价"){
                                document.title = "VART艺廊为了评估我的作品导致系统全线崩坏，求赞我！";
                            }
                            else{
                                if(score==0){
                                    document.title="VART艺廊为我的作品估价$0,我是1好嘛！";
                                }
                                else if(score==100000){
                                    document.title="VART艺廊为我的作品估价$100000,一定交给国家！";
                                }
                                else if(score<0){
                                    document.title="VART艺廊为我的作品估价$"+score+"这是什么鬼！";
                                }
                                else if(score<999){
                                    document.title="VART艺廊为我的作品估价$"+score+endCommentListG[Math.floor(endCommentListG.length*Math.random())%endCommentListG.length];
                                }
                                else if(score>=999){
                                    document.title="VART艺廊为我的作品估价$"+score+endCommentListB[Math.floor(endCommentListB.length*Math.random())%endCommentListB.length];
                                }
                            }
                            history.replaceState({}, "asdasd", location.href+"area=show&artId="+G.artId);

                        }
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
            var score = G.pic.score;
            var endComment = "";
            if(score=="无法估价"){
                document.title = "VART艺廊为了评估我的作品导致系统全线崩坏，求赞我！";
            }
            else{
                if(score==0){
                    document.title="VART艺廊为我的作品估价$0,我是1好嘛！";
                }
                else if(score==100000){
                    document.title="VART艺廊为我的作品估价$100000,一定交给国家！";
                }
                else if(score<0){
                    document.title="VART艺廊为我的作品估价$"+score+"这是什么鬼！";
                }
                else if(score<999){
                    document.title="VART艺廊为我的作品估价$"+score+endCommentListG[Math.floor(endCommentListG.length*Math.random())%endCommentListG.length];
                }
                else if(score>=999){
                    document.title="VART艺廊为我的作品估价$"+score+endCommentListB[Math.floor(endCommentListB.length*Math.random())%endCommentListB.length];
                }
            }
        }
    }
};

//main
$(function () {

    var el = document.getElementById("moveid");
    var START_X = 0;
    var START_Y = 0;
    var transform = {
        translate: { x: START_X, y: START_Y },
        scale: 1,
        angle: 0,
        rx: 0,
        ry: 0,
        rz: 0
    };
    var ticking = false;

    var hammertime = new Hammer.Manager(el);
    // hammertime.add(new Hammer.Rotate());  
    hammertime.add(new Hammer.Pan({ threshold: 0, pointers: 0 }));
    hammertime.add(new Hammer.Swipe()).recognizeWith(hammertime.get('pan'));
    hammertime.add(new Hammer.Rotate({ threshold: 0 })).recognizeWith(hammertime.get('pan'));
    hammertime.add(new Hammer.Pinch({ threshold: 0 })).recognizeWith([hammertime.get('pan'), hammertime.get('rotate')]);

    turnOn =function(){ 
        hammertime.on("panstart panmove", onPan);
        hammertime.on("rotatestart rotatemove", onRotate);
        hammertime.on("pinchstart pinchmove", onPinch);

    }
    turnOff =function(){ 
        hammertime.off("panstart panmove", onPan);
        hammertime.off("rotatestart rotatemove", onRotate);
        hammertime.off("pinchstart pinchmove", onPinch);
    }
    function updateElementTransform() {
        var value = [
            'translate3d(' + transform.translate.x + 'px, ' + transform.translate.y + 'px, 0)',
            'scale(' + transform.scale + ', ' + transform.scale + ')',
            'rotate3d('+ transform.rx +','+ transform.ry +','+ transform.rz +','+  transform.angle + 'deg)'
        ];

        value = value.join(" ");
        el.style.webkitTransform = value;
        el.style.mozTransform = value;
        el.style.transform = value;
        ticking = false;
    }
    var reqAnimationFrame = (function () {
        return window[Hammer.prefixed(window, 'requestAnimationFrame')] || function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
    })();
    function requestElementUpdate() {
        if(!ticking) {
            reqAnimationFrame(updateElementTransform);
            ticking = true;
        }
    }
    function onPan(ev) {
        transform.translate = {
            x: START_X + ev.deltaX,
            y: START_Y + ev.deltaY
        };

        // logEvent(ev);
        requestElementUpdate();
    }
    function onPinch(ev) {
        if(ev.type == 'pinchstart') {
            initScale = transform.scale || 1;
        }
        transform.scale = initScale * ev.scale;

        // logEvent(ev);
        requestElementUpdate();
    }
    function onRotate(ev) {
        if(ev.type == 'rotatestart') {
            initAngle = transform.angle || 0;
        }
        transform.rz = 1;
        transform.angle = initAngle + ev.rotation;

        // logEvent(ev);
        requestElementUpdate();
    }   




    paint.init();
    document.getElementById('canvas').width  = window.innerWidth;
    paint.cxt.lineWidth=2;

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
        if(!G.artName){
            $("#artName").attr("placeholder",'请输入作品名');
            return;
        }
        G.pic.css = JSON.stringify($($(".viewport-show .pic-zoom")[0]).attr("style")).replace(',"webkitTextDecorationSkip":"","webkitTextDecorationStyle":"","webkitTextDecorationsInEffect":"","webkitTextEmphasis":"","webkitTextEmphasisColor":"","webkitTextEmphasisPosition":"","webkitTextEmphasisStyle":"","webkitTextFillColor":"","webkitTextOrientation":"","webkitTextSecurity":"","webkitTextSizeAdjust":"","webkitTextStroke":"","webkitTextStrokeColor":"","webkitTextStrokeWidth":"","webkitTextUnderlinePosition":"","webkitTouchCallout":"","webkitTransform":"","webkitTransformOrigin":"","webkitTransformOriginX":"","webkitTransformOriginY":"","webkitTransformOriginZ":"","webkitTransformStyle":"","webkitTransition":"","webkitTransitionDelay":"","webkitTransitionDuration":"","webkitTransitionProperty":"","webkitTransitionTimingFunction":"","webkitUserDrag":"","webkitUserModify":"","webkitUserSelect":"","webkitWritingMode":"","whiteSpace":"","widows":"","width":"","wordBreak":"","wordSpacing":"","wordWrap":"","writingMode":"","zIndex":"","zoom":"","length":0',"").replace('"alignmentBaseline":"","background":"","backgroundAttachment":"","backgroundBlendMode":"","backgroundClip":"","backgroundColor":"","backgroundImage":"","backgroundOrigin":"","backgroundPosition":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","backgroundRepeatX":"","backgroundRepeatY":"","backgroundSize":"","baselineShift":"","border":"","borderBottom":"","borderBottomColor":"","borderBottomLeftRadius":"","borderBottomRightRadius":"","borderBottomStyle":"","borderBottomWidth":"","borderCollapse":"","borderColor":"","borderImage":"","borderImageOutset":"","borderImageRepeat":"","borderImageSlice":"","borderImageSource":"","borderImageWidth":"","borderLeft":"","borderLeftColor":"","borderLeftStyle":"","borderLeftWidth":"","borderRadius":"","borderRight":"","borderRightColor":"","borderRightStyle":"","borderRightWidth":"","borderSpacing":"","borderStyle":"","borderTop":"","borderTopColor":"","borderTopLeftRadius":"","borderTopRightRadius":"","borderTopStyle":"","borderTopWidth":"","borderWidth":"","bottom":"","boxShadow":"","boxSizing":"","bufferedRendering":"","captionSide":"","clear":"","clip":"","clipPath":"","clipRule":"","color":"","colorInterpolation":"","colorInterpolationFilters":"","colorProfile":"","colorRendering":"","content":"","counterIncrement":"","counterReset":"","cursor":"","direction":"","display":"","dominantBaseline":"","emptyCells":"","enableBackground":"","fill":"","fillOpacity":"","fillRule":"","filter":"","float":"","floodColor":"","floodOpacity":"","font":"","fontFamily":"","fontSize":"","fontStretch":"","fontStyle":"","fontVariant":"","fontWeight":"","glyphOrientationHorizontal":"","glyphOrientationVertical":"","height":"","imageRendering":"","isolation":"","kerning":"","left":"","letterSpacing":"","lightingColor":"","lineHeight":"","listStyle":"","listStyleImage":"","listStylePosition":"","listStyleType":"","margin":"","marginBottom":"","marginLeft":"","marginRight":"","marginTop":"","marker":"","markerEnd":"","markerMid":"","markerStart":"","mask":"","maskType":"","maxHeight":"","maxWidth":"","minHeight":"","minWidth":"","mixBlendMode":"","objectFit":"","opacity":"","orphans":"","outline":"","outlineColor":"","outlineOffset":"","outlineStyle":"","outlineWidth":"","overflow":"","overflowWrap":"","overflowX":"","overflowY":"","padding":"","paddingBottom":"","paddingLeft":"","paddingRight":"","paddingTop":"","page":"","pageBreakAfter":"","pageBreakBefore":"","pageBreakInside":"","paintOrder":"","pointerEvents":"","position":"","quotes":"","resize":"","right":"","shapeRendering":"","size":"","speak":"","src":"","stopColor":"","stopOpacity":"","stroke":"","strokeDasharray":"","strokeDashoffset":"","strokeLinecap":"","strokeLinejoin":"","strokeMiterlimit":"","strokeOpacity":"","strokeWidth":"","tabSize":"","tableLayout":"","textAlign":"","textAnchor":"","textDecoration":"","textIndent":"","textLineThrough":"","textLineThroughColor":"","textLineThroughMode":"","textLineThroughStyle":"","textLineThroughWidth":"","textOverflow":"","textOverline":"","textOverlineColor":"","textOverlineMode":"","textOverlineStyle":"","textOverlineWidth":"","textRendering":"","textShadow":"","textTransform":"","textUnderline":"","textUnderlineColor":"","textUnderlineMode":"","textUnderlineStyle":"","textUnderlineWidth":"","top":"","transition":"","transitionDelay":"","transitionDuration":"","transitionProperty":"","transitionTimingFunction":"","unicodeBidi":"",',"").replace('"webkitBoxOrdinalGroup":"","webkitBoxOrient":"","webkitBoxPack":"","webkitBoxReflect":"","webkitBoxShadow":"","webkitClipPath":"","webkitColorCorrection":"","webkitColumnAxis":"","webkitColumnBreakAfter":"","webkitColumnBreakBefore":"","webkitColumnBreakInside":"","webkitColumnCount":"","webkitColumnFill":"","webkitColumnGap":"","webkitColumnProgression":"","webkitColumnRule":"","webkitColumnRuleColor":"","webkitColumnRuleStyle":"",','');
        G.uploadDate = (new Date()).getTime();

        G.postData = {
            artId : G.artId,
            artName : G.artName,
            openId : "openid",
            picKey : G.pic.bkg,
            css : G.pic.css,
            borderId : G.pic.borderId,
            signKey : G.pic.sign,
            uploadDate : G.uploadDate ,
            // score : ,
            // commentIdList: "2" 
            dialogIdList:"2"
        }
        goTo('show',"confirm");
    }

    document.querySelector('.fixed-mask').onclick=function(){
        $(this).hide();
    }
    
    document.querySelector('.rule-mask').onclick=function(){
        $(this).hide();
    }

    document.querySelector('.rule-detail').onclick=function(){
        $(".rule-mask").show();
    }

    document.querySelector('.button-share').onclick=function(){
        $(".share-div").show();
    }
    document.querySelector('.share-div').onclick=function(){
        $(".share-div").hide();
    }

    document.querySelector('.button-ranking').onclick=function(){
        $(".ranking-div").show();
    }
    document.querySelector('.ranking-div').onclick=function(){
        $(".ranking-div").hide();
    }
    $('.border_image').css('height',$('.border_image').width()*7/12+'px');
    

    // var area = $.getQuery('area');
    // goTo(area);

});
