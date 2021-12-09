(function($) {

  "use strict";
  if ($("#js_vedbo_burger_menu").hasClass("vedbo_burger_menu")) {
    $("#js_vedbo_burger_menu").animatedModal({
      animatedIn: 'slideInDown',
      animatedOut: 'slideOutUp',
      beforeOpen: function() {
        window.setTimeout(function() {
          $(".full-menu, .nova-fullscreen-menu__slidebar").addClass('animate');
        }, 300);
        window.setTimeout(function() {
          $(".full-menu, .nova-fullscreen-menu__slidebar").addClass('animate-line');
        }, 1000);
      },
      afterClose: function() {
        // $(".full-menu, .nova-fullscreen-menu__slidebar").removeClass('animate animate-line');
      }
    });
  }
  $('.full-menu > li').first().addClass('active-sub');

  $('.full-menu > li').on({
    mouseenter: function() {
      $(this).siblings().removeClass('active-sub');
      $(this).addClass('active-sub');
    }
  });

})(jQuery);
