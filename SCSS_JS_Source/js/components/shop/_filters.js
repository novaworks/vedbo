(function($) {

	"use strict";

	// =============================================================================
	// Filters Toggle
	// =============================================================================

	$(document).on('click', '.js-product-filters-toogle', function() {
		$('body').toggleClass('panel-open-menu');
		$('#side-filters').toggleClass('opened');
		setTimeout(function() {
			$('#side-filters').toggleClass('opened-opacity');
		}, 100);
		// $('#side-filters').toggle(100, function() {
		// 	$('#side-filters').toggleClass('opened');
		// });
	});

})(jQuery);
