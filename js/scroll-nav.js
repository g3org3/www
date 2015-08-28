//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var __a = $(this);
        var id  = __a.attr('href');
        var div = $(id);


        $('html, body').stop().animate({
            scrollTop: div.offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});