
$(function () {
    "use strict";
    var header = $("header"),
        navbar = $("nav");
    $(window).scroll(function () {
        if ($(window).scrollTop() >= header.height() ? navbar.addClass("scrolled fixed-top") : navbar.removeClass("scrolled fixed-top"));
    });

});



var $left = $(".left");
var $gl = $(".gallery");
var $gl2 = $(".gallery2");
var $photosCounterFirstSpan = $(".photos-counter span:nth-child(1)");
$gl2.on("init", function (event, slick) {
    $photosCounterFirstSpan.text("".concat(slick.currentSlide + 1, "/"));
    $(".photos-counter span:nth-child(2)").text(slick.slideCount);
});
$gl.slick({
    rows: 0,
    slidesToShow: 2,
    arrows: false,
    draggable: false,
    useTransform: false,
    mobileFirst: true,
    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 3
        }
    }, {
        breakpoint: 1023,
        settings: {
            slidesToShow: 1,
            vertical: true
        }
    }]
});
$gl2.slick({
    rows: 0,
    useTransform: false,
    prevArrow: ".arrow-left",
    nextArrow: ".arrow-right",
    fade: true,
    asNavFor: $gl
});

function handleCarouselsHeight() {
    if (window.matchMedia("(min-width: 1024px)").matches) {
        var gl2H = $(".gallery2").height();
        $left.css("height", gl2H);
    } else {
        $left.css("height", "auto");
    }
}

$(window).on("load", function () {
    handleCarouselsHeight();
    setTimeout(function () {
        $(".loading").fadeOut();
        $("body").addClass("over-visible");
    }, 300);
});
$(window).on("resize", _.debounce(function () {
    handleCarouselsHeight();
    /*You might need this code in your projects*/
    //$gl1.slick("resize");
    //$gl2.slick("resize");
}, 200));
$(".gallery .item").on("click", function () {
    var index = $(this).attr("data-slick-index");
    $gl2.slick("slickGoTo", index);
});
$gl2.on("afterChange", function (event, slick, currentSlide) {
    $photosCounterFirstSpan.text("".concat(slick.currentSlide + 1, "/"));
});