jQuery(function($) {

	"use strict";

	if ( ( $('.woocommerce-checkout').length ) && ( $('.woocommerce-form-login').length ) ) {

		 $('body.woocommerce-checkout .showlogin').on('click', function() {
		 	if($('.woocommerce-form-login').hasClass('show')) {
				$('.woocommerce-form-login').removeClass('show');
			 } else {
			 	setTimeout( function() {
					$('.woocommerce-form-login').addClass('show');
				}, 300);
			 }
		});

	}
});
