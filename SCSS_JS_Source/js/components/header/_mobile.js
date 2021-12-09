(function($) {

	"use strict";

	$(document).on('click', '.header-handheld-header-bar .nova_com_action--dropdownmenu .component-target', function(e) {
	  e.preventDefault();
	  var $_parent = $(this).parent();
	  if ($_parent.hasClass('active')) {
	      $_parent.removeClass('active');
	      $('body').removeClass('open-overlay');
	  } else {
	      $_parent.addClass('active');
	      $_parent.siblings().removeClass('active');
	      $('body').addClass('open-overlay');
	  }
  });

})(jQuery);
