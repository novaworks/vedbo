(function($){

	"use strict";

	function  NovalazyLoadImages () {
		var lazyLoadImagesEvent;

		$( document.body ).on( 'nova_lazy_load_images', function() {
			try {
				lazyLoadImagesEvent = new Event( 'jetpack-lazy-images-load', {
					bubbles: true,
					cancelable: true
				} );
			} catch ( e ) {
				lazyLoadImagesEvent = document.createEvent( 'Event' )
				lazyLoadImagesEvent.initEvent( 'jetpack-lazy-images-load', true, true );
			}

			document.body.dispatchEvent( lazyLoadImagesEvent );
		} );
	};
	NovalazyLoadImages();
	
})(jQuery);
