


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
            var img = $(".viewport-show .pic-zoom img")[0];//document.createElement('img');
            img.title = file[file.length-1].name;
            img.src = G.pic.host+G.pic["bkg"];

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

        this.onload();
    },
    onload:function(){
        this.onshow();
    },
    onshow:function(area){
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


        if(area == "show" || !area){
            var ajax = new XMLHttpRequest();
            ajax.open('GET', 'http://192.168.1.116/X_1_FirstWebAPI/api/art/get', true);
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
    },
    render:function(area,data){
        if(area == "show" || !area){
            console.log("render");
            if(G&&G.pic&&G.pic["bkg"]){
                var img = $(".viewport-show .pic-zoom img")[0];//document.createElement('img');
                img.title = "";
                img.src = G.pic.host+G.pic["bkg"];
            }


            $('.infoBox').hide();
            $(".commentBox").hide();
            $(".borderChoose").hide();

            if(history.state.state == ""){
                $('.show-init').show();

                $(".show-finishUpload").show();
                $(".borderChoose").show();
            }
            else if(history.state.state == "finishUpload"){
                $(".show-finishUpload").show();
                $(".borderChoose").show();
            }
            else if(history.state.state == "confirm"){
                $('.show-confirm').show();

                var ajax = new XMLHttpRequest();
                ajax.open('GET', 'http://192.168.1.116/X_1_FirstWebAPI/api/art/get?data='+data, true);
                ajax.onreadystatechange = function() {
                    if (ajax.readyState === 4 && ajax.status === 200) {
                        var res = parseJSON(ajax.responseText);
                        console.log(res);
                        $(".commentBox-comment").show();
                        var name = commentIdList[res.commentIdList[0]-1].name;
                        var comment = commentIdList[res.commentIdList[0]-1].comment;
                        $(".commentBox-comment .nickname").html(name);
                        $(".commentBox-comment .comment-content").html(comment);
                        


                        var dialogIdList = res.dialogIdList.split(",");

                        if(dialogIdList.length){
                            $(".discusing").hide();
                            dialogIdList.forEach(function(c, i){
                                console.log(c);
                            });
                        }
                    }
                };
                ajax.send(JSON.stringify(data));
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
    // document.getElementById('canvas').height = window.innerHeight;
    // var cxt = document.getElementById('canvas').getContext('2d');
    // cxt.globalAlpha = "0.5";

    //上传图片按钮
    // var upfile = document.querySelector('#uploadBtn');
    // upfile.onchange = function (evt) {
    //     var files = evt.target.files;
    //     for(var i = 0, f; f = files[i]; i++){
    //         if(!f.type.match('image.*')) continue;
            
    //         var reader = new FileReader();
    //         reader.onload = (function(theFile){
    //             return function(e){
    //                 var img = $(".viewport-show .pic-zoom img")[0];//document.createElement('img');
    //                 img.title = theFile.name;
    //                 img.src = e.target.result;
    //             }
    //         })(f);
    //         reader.readAsDataURL(f);
    //     }  
    //     goTo('show');
    // }

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
    

    $('.pic-container').hide();
    $('.pic-container').show();

    var area = $.getQuery('area');
    goTo(area);

});
