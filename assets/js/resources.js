$(document).ready(function() {
    $(window).scroll();

    // set category open arrows to active if screen width is greater than 768px 
    // (because that is the screen size that height will be 100% based on the style.css)
    if ($(".resource-content").height() > 0) {
        $(".show-more").addClass("active");
    }
});

var fromTop = $("#resources-nav").offset().top;

$(window).resize(function() {
    // check what to do with arrows when screen is resized
    if ($(".resource-content").height() > 0) {
        $(".show-more").addClass("active");
    } else {
        $(".show-more").removeClass("active");
    }
})

$(window).scroll(function() {
    // scrolled resources nav
    if ($(window).scrollTop() >= fromTop - 30) {
        $("#resources-nav").addClass("sticky-scroll");
    } else {
        $("#resources-nav").removeClass("sticky-scroll");
    }
});

$(".show-more-link").click(function() {
    var elementToShow = $("#" + $(this).attr("data-show"));
    if (elementToShow.height() == 0) {
        elementToShow.css("height", "100%");
        $(".show-more", this).addClass("active");
    } else {
        elementToShow.css("height", "0px");
        $(".show-more", this).removeClass("active");
    }
});
