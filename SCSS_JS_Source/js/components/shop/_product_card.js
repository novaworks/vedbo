(function($) {

	"use strict";

	$(window).load(function() {
        setTimeout(function() {
			$(".product-item__thumbnail-placeholder.second_image_enabled").addClass("second_image_loaded");
        }, 300);
	});

	// =============================================================================
	// Shop Archive Buttons Click States
	// =============================================================================

	// Wishlist

	$(document).on('click', '.product-item__thumbnail .add_to_wishlist',  function(e) {
		var this_button = $(this);
		this_button.addClass('clicked');
		this_button.parents('.product-item').addClass('adding');
		setTimeout(function() {
        	this_button.addClass('loading');
        }, 400);
		$(document.body).on('added_to_wishlist', function() {
			this_button.removeClass('loading');
			this_button.parents('.product-item').removeClass('adding');
			this_button.removeClass('add_to_wishlist').addClass('added');
			this_button.attr("href", this_button.data("wishlist-url"));
		});
	});


	// Quick View

	$(document).on('click', '.nova_product_quick_view_btn',  function() {
		var this_button = $(this);
		$.LoadingOverlay("show", {
		    image       : '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: rgba(255, 255, 255,0); display: block; shape-rendering: auto;" width="51px" height="51px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><circle cx="50" cy="25" r="15" fill="#1d0e0b"><animate attributeName="cy" dur="1s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.9 0.55;0 0.45 0.55 0.9" keyTimes="0;0.5;1" values="25;75;25"></animate></circle></svg>',
				imageAnimation: '',
				maxSize:	51
		});
		$(document.body).on('opened_product_quickview', function() {
					$.LoadingOverlay("hide");
		});
	});



	// Add to Cart

	$(document).on('click', '.product-item__description--button .ajax_add_to_cart, .nova-product-mini .add_to_cart_button', function() {
		var this_button = $(this);
		var minicart_box = $('#MiniCartCanvas');
		var minicart_box_loading = $('#MiniCartCanvas .add_ajax_loading');
		this_button.addClass('clicked');
		this_button.parents('.product-item').addClass('adding');
		minicart_box.foundation('open');
		setTimeout(function() {
        	minicart_box_loading.addClass('visible');
        }, 300);
		$(document.body).on('wc_cart_button_updated', function() {
			minicart_box_loading.removeClass('visible');
			this_button.parents('.product-item').removeClass('adding');
			if (this_button.siblings('.added_to_cart').length ) {
				this_button.siblings('.added_to_cart').remove();
			}
		});
	});

	//Product hover
	product_borderd_hover();

})(jQuery);
