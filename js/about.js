
$(function () {
    "use strict";
    var header = $("header"),
        navbar = $("nav");
    $(window).scroll(function () {
        if ($(window).scrollTop() >= header.height() ? navbar.addClass("scrolled fixed-top") : navbar.removeClass("scrolled fixed-top"));
    });

});

var touch = Modernizr.touch;
$('.img-holder').imageScroll({
    imageAttribute: (touch === true) ? 'image-mobile' : 'image',
    touch: touch
});
