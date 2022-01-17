jQuery(function($) {

	"use strict";

  Novaworks.core.DomLoadEvent = function () {
    function LoadLazyScripts() {
        if (!Novaworks.global.isPageSpeed()) {
            $('body').addClass('body-completely-loaded');
        }
    }
    if( document.readyState !== 'loading' ) {
      LoadLazyScripts();
    } else {
        document.addEventListener('DOMContentLoaded', function () {
            LoadLazyScripts();
        });
    }
  };
  Novaworks.core.DomLoadEvent();
});
