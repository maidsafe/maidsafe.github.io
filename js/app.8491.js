var INTRO_VIDEO_SRC="https://www.youtube.com/embed/bXOaxjvefGc",updateHeader=function(){return window.scrollY>0?($("header").addClass("invert onScroll"),$("#site-logo").addClass("invert"),$("#secNav").addClass("invert"),void $("#secNavButton").addClass("invert")):($("header").removeClass("onScroll"),void(window.invertedHeader||($("header").removeClass("invert"),$("#site-logo").removeClass("invert"),$("#secNav").removeClass("invert"),$("#secNavButton").removeClass("invert"))))},showMobPrimaryNav=function(){$("#secNavButton").on("click",function(){var a=$("#secNav"),b=window.location.pathname.split("/");return b=b[b.length-1],window.invertedHeader&&($(this).addClass("invert"),a.addClass("invert")),$(this).hasClass("selected")?$(this).removeClass("selected"):$(this).addClass("selected"),a.hasClass("show")?void a.removeClass("show"):void a.addClass("show")})},Modal={target:$("#Modal"),open:function(){this.target.show()},close:function(){this.target.hide()}},loadTeamBanner=function(){var a=$(".team-img"),b=a.width(),c=null,d=8;a.empty(),1134>=b&&b>=830&&(d=6),829>=b&&(d=5);var e={Adam:"./img/team/adam.JPG",Andrew:"./img/team/andrew.jpg",David:"./img/team/david.jpg",Viv:"./img/team/viv.jpg",Krishna:"./img/team/krishna.png",Justine:"./img/team/justine.jpg",Ross:"./img/team/ross.jpg",Fraser:"./img/team/fraser.jpg",Nick:"./img/team/nick.jpg",Paige:"./img/team/paige.jpg",Shona:"./img/team/shona.jpg",Vinicius:"./img/team/vinicius.jpg",Spandan:"./img/team/spandan.jpg",Scott:"./img/team/scott.jpg",Qi:"./img/team/qi.jpg",Peter:"./img/team/peter.jpg"},f=parseFloat(b/d);for(var g in e)e[g]&&(c='<div class="team-img-i"><img height="'+f+'" src="'+e[g]+'" alt="'+g+'" title="'+g+'"></div>',a.append(c));a.addClass("banner-gradian")},accordian=function(){$("#accordian ul li").on("click",function(){var a=$(this);return a.hasClass("active")?void a.removeClass("active"):($("#accordian ul li").removeClass("active"),void a.addClass("active"))})},typingEffect=function(){var a,b=["a secure","a free"],c=0,d=0,e="",f="",g=document.getElementById("typing");if(g){var h=function(){return d===b.length&&(d=0),0===c?(document.getElementById("typing").innerHTML="",clearTimeout(a),a=setTimeout(h,1500),void c++):(e=b[d],f=e.slice(0,++c),g.innerHTML=f,f.length===e.length?(d++,c=0,clearTimeout(a),void(a=setTimeout(h,4e3))):void(a=setTimeout(h,200)))};h()}};$(function(){typingEffect(),accordian(),showMobPrimaryNav(),loadTeamBanner(),$("#IntroVideoTrigger").on("click",function(a){a.preventDefault(),Modal.open(),$("#IntroVideo").attr("src",INTRO_VIDEO_SRC)}),$("#Modal").on("click",function(a){a.stopPropagation(),Modal.close(),$("#IntroVideo").attr("src","about:blank")})}),$(window).scroll(updateHeader);