$('.copy-anchor').click(function(e) {
    e.preventDefault();
    var url = $(this).prop('href');

    navigator.clipboard.writeText(url);

    $(this).tooltip("show");
    var tooltip = $(this);
    setTimeout(function() {
        tooltip.tooltip("hide");
    }, 2000)
});

$(document).ready(function() {
    $(window).scroll();

    $('.copy-anchor').tooltip({ 
        trigger: 'manual',
    });
    $('[data-toggle="tooltip"]').tooltip({ 
        trigger: 'hover',
    });
    
});

$(window).scroll(function() {
    // scrolled main nav
    if ($(window).scrollTop() > 50) {
        $("#main-nav").addClass('scrolled');
    } else {
        $("#main-nav").removeClass('scrolled');
    }
});
