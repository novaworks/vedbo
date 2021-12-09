(function($) {

  "use strict";
  var $window = $( window ),
      $container = $( 'div.sidebar-status.sidebar_sticky' ),
      $sidebar = $container.find( '.nova-sidebar__container' ),
      summarySticky = false;

  if ( !$container.length ) {
		return;
	}
  function stickyElm($summarySticky,$summary) {
    var $window = $( window );
    var  options = {};
    var summarySticky = $summarySticky;
    if ( nova_js_var.enable_header_sticky == '1' ) {
			var offset = $('#masthead').height(),
				$topbar = $( '#topbar' );

			if ( $topbar.length ) {
				offset += $topbar.height();
			}

			options = {
				recalc_every: 1,
				offset_top: offset
			}
		}

    if ( $window.width() > 1024 ) {
      if ( ! summarySticky ) {
        $sidebar.stick_in_parent( options );
      }
      summarySticky = true;
    } else {
      $sidebar.trigger( 'sticky_kit:detach' );
      summarySticky = false;
    }

  }
  // Sticky Sidebar
  if ( $.fn.stick_in_parent ) {
    $sidebar.on( 'sticky_kit:bottom', function() {
      $( this ).parent().css( 'position', 'static' );
    } );

    stickyElm(summarySticky,$sidebar);
    $window.on( 'resize', stickyElm(summarySticky,$sidebar)  );
  }
})(jQuery);
