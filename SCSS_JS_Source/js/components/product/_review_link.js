(function($) {

	"use strict";

	$('body')
		// Review link
		.on( 'click', 'a.woocommerce-review-link', function() {
			$(".nova-product-info-mn .panel_reviews a").trigger("click");
			setTimeout(function(){
				var tag = $("#reviews");
	    		$('html,body').animate({scrollTop: tag.offset().top},'slow');
    		}, 300);
			return true;
		} );

})(jQuery);
