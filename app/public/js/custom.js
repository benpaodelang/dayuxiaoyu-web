// This file is autogenerated via the `commonjs` Grunt task. You can require() this file in a CommonJS environment.

//to top
jQuery(function($){
           // Plugin activation (basic)
           // $('.to-top').toTop();

           // Plugin activation with options
           $('.to-top').toTop({
               //options with default values
               autohide: true,  //boolean 'true' or 'false'
               offset: 420,     //numeric value (as pixels) for scrolling length from top to hide automatically
               speed: 500,      //numeric value (as mili-seconds) for duration
               //right: 15,       //numeric value (as pixels) for position from right
               //bottom: 30       //numeric value (as pixels) for position from bottom
           });
       });

//自定义滚动条
(function($){
			$(window).load(function(){

				$(".content_1").mCustomScrollbar({
					scrollButtons:{enable:true},
					scrollInertia:150,
					autoDraggerLength:false,
					set_height:"85%",
					mouseWheel:false,
					horizontalScroll:true,
					theme:"dark-thin",
					advanced:{autoExpandHorizontalScroll:true},
					set_width:"95%",
				});

				$(".content_7").mCustomScrollbar({
					theme:"dark-thin",
					scrollInertia:500,
				});

			});

		})(jQuery);


// 固定层
function buffer(a, b, c) {
    var d;
    return function() {
        if (d) return;
        d = setTimeout(function() {
            a.call(this),
            d = undefined
        },
        b)
    }
} (function() {
    function e() {
        var d = document.body.scrollTop || document.documentElement.scrollTop;
        d > b ? (a.className = "div1 div2", c && (a.style.top = d - b + "px")) : a.className = "div1"
    }
    var a = document.getElementById("float");
    if (a == undefined) return ! 1;
    var b = 0,
    c, d = a;
    while (d) b += d.offsetTop,
    d = d.offsetParent;
    c = window.ActiveXObject && !window.XMLHttpRequest;
    if (!c || !0) window.onscroll = buffer(e, 150, this)
})();



/*  视屏弹出 */
$(function() {
	
    var moveshow = function(type) {
        $('.popup-box').show();
        if (type == "MP4") {
            $('.alert-video').append('<video loop="loop" controls="controls" autoplay="autoplay" preload="none" poster="newimg/video.jpg" src="newimg/video.mp4"></video>');
        } else {
            $('.alert-video').append('<embed src="http://pic.ibaotu.com/00/07/49/96v888piCXab.swf" name="swfPlayer" autostart="true" allowscriptaccess="sameDomain" swliveconnect="true" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash">');
        }
    }

    $('.video-src').click(function() {
        // 这个位置写的视频类型
        //var type = "swf";
        //moveshow(type); 
        var src = $(this).attr('src');
        $('.popup-box').show();
        $('.alert-video').append('<video loop="loop" controls="controls" autoplay="autoplay" preload="none" src="' + src + '"></video>');
    })

    $('.close-btn').click(function() {
        $('.popup-box').hide();
        $(this).siblings().remove();
    });
	
})

/*  tip */
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})