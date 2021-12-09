jQuery(function($) {

	"use strict";

	//===============================================================
	// Add (+/-) Button Number Incrementers
	//==============================================================
	$( document.body ).on( 'updated_cart_totals', function(){
		$(".quantity").append('<div class="qty-button inc">+</div><div class="qty-button dec">-</div>');
		$(".qty-button").on("click", function() {

			var $button = $(this);
			var oldValue = $button.parent().find("input").val();

			if ($button.text() == "+") {
				var newVal = parseFloat(oldValue) + 1;
			} else {
			 // Don't allow decrementing below zero
				if (oldValue > 0) {
					var newVal = parseFloat(oldValue) - 1;
				} else {
					newVal = 0;
				}
			}

			$button.parent().find("input").val(newVal);
			$( '.woocommerce-cart-form :input[name="update_cart"]' ).prop( 'disabled', false );
		});
	});
});
