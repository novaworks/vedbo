jQuery(function($) {

	"use strict";

	var header = document.getElementById( 'masthead' );
	var topbar = document.getElementById( 'topbar' );
	var headermobiles = document.getElementById( 'header-mobile' );
	var handheldBar = document.getElementById( 'handheld_bar' );
	var offset = 0;
	var mqL = window.matchMedia('(min-width: 1280px)');

	if(nova_js_var.enable_header_sticky == 1 && header ) {
		topbar_space();
		if (!$("body").hasClass("has-transparent-header")) {
			prepareForWhiteHeader();
		}
		$(window).resize(function(){
			topbar_space();
			if (!$("body").hasClass("has-transparent-header")) {
			 	prepareForWhiteHeader();
			}
		 });
		offset = topbar ? topbar.clientHeight : 1;

		var stickyHeader = new Headroom( header, {
			offset  : offset,
			classes: {
				initial: "animated",
				pinned: "slideDown",
				unpinned: "slideUp"
			}
		} );
		var stickyMobileHeader = new Headroom( headermobiles, {
			offset  : 1,
			classes: {
				initial: "animated",
				pinned: "slideDown",
				unpinned: "slideUp"
			},
			onNotTop : function() {
    		handheldBar.classList.add("postion--fixed");
				handheldBar.classList.add("animated");
  		},
			onTop : function() {
				handheldBar.classList.remove("postion--fixed");
				handheldBar.classList.remove("slideUp");
			},
			onPin : function() {
				handheldBar.classList.add("slideUp");
			},
			onUnpin : function() {
				handheldBar.classList.remove("slideUp");
			}
		} );

		var headroomHeader = function () {
		  if (mqL.matches) {
				stickyMobileHeader.destroy();
				stickyHeader.init();
		  } else {
				stickyHeader.destroy();
				stickyMobileHeader.init();
		  }
		}

		mqL.addListener(headroomHeader);
		headroomHeader();
	}
	function topbar_space() {
		if ( topbar ) {
			header.style.top = topbar.clientHeight + 'px';
		}
	}
	function prepareForWhiteHeader() {
		if ( header ) {
			if ( topbar ) {
				topbar.style.marginBottom = header.clientHeight - 1 + 'px';
			} else {
				document.getElementById( 'site-content' ).style.paddingTop = header.clientHeight + 'px';
			}
		}
	}
});
