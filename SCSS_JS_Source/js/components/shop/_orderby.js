(function($) {

	"use strict";

	// =============================================================================
	// Shop Archive Orderby Select Options
	// =============================================================================

	if ( typeof $.fn.select2 === 'function' ) {

		$('.woocommerce-ordering .orderby').select2({
			minimumResultsForSearch: -1,
			placeholder: nova_js_var.select_placeholder,
			dropdownParent: $('.woocommerce-archive-header-inside'),
			allowClear: false,
			dropdownAutoWidth: true,
		})
	}

})(jQuery);
