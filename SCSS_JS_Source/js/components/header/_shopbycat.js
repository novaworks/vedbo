(function($) {

	"use strict";

	var shopbycat_dropdown_hide = nova_js_debounce(function(e) {
			var container = $(".shopbycat-button");
			if (!container.is(e.target) && container.has(e.target).length === 0)
			{
					$('.shopbycat__dropdown').removeClass('is-open');
			}
	}, 200);
	$(document).on('click', function(e) {
			shopbycat_dropdown_hide(e);
	});

})(jQuery);
