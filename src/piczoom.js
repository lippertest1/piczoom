


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

                $(".show-sign").show();
                $(".borderChoose").show();
            }
            else if(history.state.state == "finishUpload"){
                $(".show-sign").show();
                $(".borderChoose").show();
            }
            else if(history.state.state == "confirm"){
                $('.show-finish').show();

                var ajax = new XMLHttpRequest();
                ajax.open('GET', 'http://192.168.1.116/X_1_FirstWebAPI/api/art/get?data='+data, true);
                ajax.onreadystatechange = function() {
                    if (ajax.readyState === 4 && ajax.status === 200) {
                        var res = parseJSON(ajax.responseText);
                        console.log(res);
                        
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
