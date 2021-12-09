jQuery(function($) {

	"use strict";

  $('.cover-slider').each(function() {
    $(this).css('background-image', 'url('+$(this).data('bg')+')');
  });

});
