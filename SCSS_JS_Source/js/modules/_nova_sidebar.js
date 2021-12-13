jQuery(function($) {

	"use strict";

	$(document).on('click', '#sidebar_primary .js-sidebar-toogle', function() {
		$(this).closest('#sidebar_primary').toggleClass('opened');
	});
})
