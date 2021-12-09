(function($) {

	"use strict";

  var $loginContainer = $('.nova-login-wrapper'),
      $links = $('.register-link,.login-link');

  $links.on('click', function(e) {
    e.preventDefault();
    var _this = $(this);

    if (_this.hasClass('register-link')) {
      $('.nova-form-container', $loginContainer).addClass('register-box-active');
    } else {
      $('.nova-form-container', $loginContainer).removeClass('register-box-active');
    }

  });

})(jQuery);
