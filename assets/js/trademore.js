//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(document).ready(function(){
	if(document.URL == 'http://whatplant.github.io/?submitted=true'){
		$('#form_submitted').finish().fadeIn("fast").delay(4000).fadeOut("slow");
	};
});