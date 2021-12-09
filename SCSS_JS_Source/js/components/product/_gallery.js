(function($) {

	"use strict";

	// =============================================================================
	// Gallery Trigger
	// =============================================================================
	if ( typeof wc_single_product_params === 'undefined' || wc_single_product_params.photoswipe_enabled !== '1' ) {
		return;
	}
	$( '.woocommerce-product-gallery' ).on( 'click', '.zoomImg', function() {
		if ( wc_single_product_params.flexslider_enabled ) {
			$( this ).closest( '.woocommerce-product-gallery' ).children( '.woocommerce-product-gallery__trigger' ).trigger( 'click' );
		} else {
			$( this ).prev( 'a' ).trigger( 'click' );
		}
	} );

})(jQuery);
