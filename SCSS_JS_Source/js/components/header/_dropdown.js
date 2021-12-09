jQuery(function($) {

	"use strict";

	$(".nova-header__navigation, .nova-header__right-action")

	.on("mouseenter", "a[data-toggle]", function(e) {
		var panel_id = $(e.currentTarget).data("toggle");
		$(e.delegateTarget).find("#" + panel_id).addClass("animated");
	})

	.on("mouseleave", "a[data-toggle]", function(e) {
		$(e.delegateTarget).find(".dropdown-pane").removeClass("animated");
	});

	// =============================================================================
	// Shop Archive Orderby Select Options
	// =============================================================================

	if ( typeof $.fn.select2 === 'function' ) {

		$('.nova-topbar__right .dropdown select').select2({
			minimumResultsForSearch: -1,
			allowClear: false,
			dropdownAutoWidth: true,
			containerCssClass: "select2_no_border",
			dropdownCssClass: "select2_no_border",
		})
	}


});
