jQuery(function($) {

	"use strict";
	$( ".js-video-popup-btn" ).each(function() {
		$(this).videoPopup({
			autoplay: 1,
			controlsColor: 'white',
			showVideoInformations: 0,
			showControls: false,
			width: 1000,
		});
	});
	$('.blog-layout-5 .blog-articles').imagesLoaded( function() {
		$('.blog-layout-5 .blog-articles').isotope({
			// options
			itemSelector: 'article',
			layoutMode: 'fitRows'
		});
	});

});
 
