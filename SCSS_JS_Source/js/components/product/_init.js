(function($) {

	"use strict";
	singleProductStyle3();
	function singleProductStyle3()  {
		var $product = $( 'div.product_infos.product-single-layout-style_3' );
		if ( !$product.length ) {
			return;
		}
		var $window = $( window ),
		$summary = $product.find( '.summary' ),
		summarySticky = false;

		// Init zoom for product gallery images
		if ( '1' === nova_js_var.product_image_zoom ) {
			$product.find( '.woocommerce-product-gallery .woocommerce-product-gallery__image' ).each( function() {
				zoomSingleProductImage( this );
			} );
		}
		// Sticky summary
		if ( $.fn.stick_in_parent ) {
			$summary.on( 'sticky_kit:bottom', function() {
				$( this ).parent().css( 'position', 'static' );
			} );

			stickySummary(summarySticky,$summary);

			$window.on( 'resize', stickySummary(summarySticky,$summary)  );
		}
	}
  function zoomSingleProductImage ( zoomTarget ) {
		if ( typeof wc_single_product_params == 'undefined' || !$.fn.zoom ) {
			return;
		}

		var $target = $( zoomTarget ),
			width = $target.width(),
			zoomEnabled = false;

		$target.each( function( index, target ) {
			var $image = $( target ).find( 'img' );

			if ( $image.data( 'large_image_width' ) > width ) {
				zoomEnabled = true;
				return false;
			}
		} );

		// Only zoom if the img is larger than its container.
		if ( zoomEnabled ) {
			var zoom_options = $.extend( {
				touch: false
			}, wc_single_product_params.zoom_options );

			if ( 'ontouchstart' in document.documentElement ) {
				zoom_options.on = 'click';
			}

			$target.trigger( 'zoom.destroy' );
			$target.zoom( zoom_options );
		}
	}
	/**
	 * Sticky summary
	 */
	function stickySummary($summarySticky,$summary) {
		var $window = $( window );
		var  options = {};
		var summarySticky = $summarySticky;

		if ( nova_js_var.enable_header_sticky == '1' ) {
			var offset = $('#masthead').height(),
				$topbar = $( '#topbar' );

			if ( $topbar.length ) {
				offset += $topbar.height();
			}

			options = {
				recalc_every: 1,
				offset_top: offset
			}
		}

		if ( $window.width() > 991 ) {
			if ( ! summarySticky ) {
				$summary.stick_in_parent( options );
			}
			summarySticky = true;
		} else {
			$summary.trigger( 'sticky_kit:detach' );
			summarySticky = false;
		}
	}
})(jQuery);
