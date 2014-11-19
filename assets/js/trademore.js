//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.homepage a').on('click', function(event) {
        var $anchor = $(this);
        //var frag = $anchor.attr('href').match(/#\w+/g)[0];
        //console.log("frag: " + frag);
        //console.log($anchor)
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});