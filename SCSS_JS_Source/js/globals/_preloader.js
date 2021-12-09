(function($){

	"use strict";

	if(nova_js_var.site_preloader == 1) {
		setTimeout(function() {
			$('body').removeClass('site-loading');
		}, 500);
		$(window).load(function() {
				$('body').removeClass('site-loading');
		});
		$(window).on('beforeunload', function(e) {
			$('body').addClass('site-loading');
		});
		$(window).on('pageshow', function(e) {
				if (e.originalEvent.persisted) {
						$('body').removeClass('site-loading');
				}
		});
	}

})(jQuery);
