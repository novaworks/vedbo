(function($){

	"use strict";

		window.nova_custom_scrollbar = function(el) {
			var self = this,
      		$scrollBars = el ? el : $('.nova_box_ps, .nova-product-filter-content .wcapf-layered-nav');

      $scrollBars.each(function() {
        var that = $(this);
        that.perfectScrollbar({
          wheelPropagation: false,
          suppressScrollX: true
        });
      });

      $(window).resize(function() {
        resize($scrollBars);
      });

      var resize = function(container) {
        container.perfectScrollbar('update');
      };
		};
		nova_custom_scrollbar();
})(jQuery);
