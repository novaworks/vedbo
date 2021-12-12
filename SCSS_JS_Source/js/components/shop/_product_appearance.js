(function($){

	"use strict";

	// =============================================================================
	// Switch Products Appearance
	// =============================================================================
	Novaworks.module.SwitchProductsAppearance = function( el ){

		var shop_display_grid_btn 	= $('.shop-display-type .shop-display-grid');
		var shop_display_list_btn 	= $('.shop-display-type .shop-display-list');
		var products_container 	= $('.post-type-archive-product ul.products');

		var shop_display_grid = function(){
			shop_display_list_btn.removeClass('active');
			shop_display_grid_btn.addClass('active');
			products_container.removeClass('product-list-display')
			Cookies.set("shop_display", "grid");
		};
		var shop_display_list = function() {
			shop_display_grid_btn.removeClass('active');
			shop_display_list_btn.addClass('active');
			products_container.addClass('product-list-display');
			Cookies.set("shop_display", "list");
		};

		shop_display_grid_btn.on('click', function() {
			requestAnimationFrame(function() {
				shop_display_grid();
				product_card_animation('reset');
			});
		});

		shop_display_list_btn.on('click', function() {
			requestAnimationFrame(function() {
				shop_display_list();
				product_card_animation('reset');
			});
		});

		if (nova_js_var.is_customize_preview == 1) {
			if(nova_js_var.shop_display == 'list') {
				shop_display_list();
			} else {
				shop_display_grid();
			}
		} else {
			switch(Cookies.get('shop_display')) {
				case 'list':
					shop_display_list();
					break;
				case 'grid':
					shop_display_grid();
					break;
				default:
					if(nova_js_var.shop_display == 'list') {
						shop_display_list();
					} else {
						shop_display_grid();
					}
			}
		}
	}
	Novaworks.module.SwitchProductsAppearance();

})(jQuery);
