(function($) {

	"use strict";

	// =============================================================================
	// Select2
	// =============================================================================

	if ( typeof $.fn.select2 === 'function' ) {
		$('.variations_form select').select2({
			minimumResultsForSearch: -1,
			placeholder: nova_js_var.select_placeholder,
			allowClear: true,
		});
	}

})(jQuery);
