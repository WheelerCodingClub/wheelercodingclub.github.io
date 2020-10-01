$('.copy-anchor').click(function(e) {
    e.preventDefault();
    var url = $(this).prop('href');

    document.addEventListener('copy', function(e) {
        e.clipboardData.setData('text/plain', url);
        e.preventDefault();
    }, true);

    document.execCommand('copy');

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

$(document).scroll(function() {
    if ($(window).scrollTop() > 50) {
        $(".navbar").addClass('scrolled');

    } else {
        $(".navbar").removeClass('scrolled');
    }
});