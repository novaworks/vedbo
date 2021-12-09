(function($) {
	
	"use strict";

	$(document).ready(function() {

		$(".single-product .product .cart .woocommerce-product-details__add-to-cart #wc-stripe-payment-request-button-separator").css("display", "none");
		$(".single-product .product .cart .woocommerce-product-details__add-to-cart #wc-stripe-payment-request-wrapper").css("display", "none");

		setTimeout(function(){
			if($(".single-product .product .cart .woocommerce-product-details__add-to-cart .StripeElement").children().length > 0) {
				$(".single-product .product .cart .woocommerce-product-details__add-to-cart").addClass("stripe-button");
				$(".single-product .product .cart .woocommerce-product-details__add-to-cart #wc-stripe-payment-request-button-separator").css("display", "block");
				$(".single-product .product .cart .woocommerce-product-details__add-to-cart #wc-stripe-payment-request-wrapper").css("display", "block");
			}
		},1000);

	});

})(jQuery);