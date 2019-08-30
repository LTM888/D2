
$(function () {
    "use strict";
    var header = $("header"),
        navbar = $("nav");
    $(window).scroll(function () {
        if ($(window).scrollTop() >= header.height() ? navbar.addClass("scrolled fixed-top") : navbar.removeClass("scrolled fixed-top"));
    });

});




