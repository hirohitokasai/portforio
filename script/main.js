$(function() {
    $('.nav_toggle').click(function() {
        $('.nav_toggle').toggleClass("menu_icon_animate");
        $('nav').toggleClass("show2");
        $('.main-p').toggleClass("background");
    });

    $(".gotop").click(function(){
        $("body,html").animate({scrollTop: 0}, 500);
        return false;
    })
});

