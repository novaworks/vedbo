jQuery(function($) {

	"use strict";

	var listing_class 		= ".products";
	var item_class 			= ".products > .product";
	var pagination_class 	= "body.woocommerce-shop .woocommerce-pagination";
	var next_page_class 	= ".woocommerce-pagination a.next";
	var ajax_button_class 	= ".products_ajax_button";
	var ajax_loader_class 	= ".products_ajax_loader";
	var loadmore_text = nova_js_var.load_more_btn;

	var ajax_load_items = {

	    init: function() {

	        if (nova_js_var.shop_pagination_type == 'load_more_button' || nova_js_var.shop_pagination_type == 'infinite_scroll') {

		        $(document).ready(function() {

		            if ($(pagination_class).length) {

		                $(pagination_class).before('<div class="'+ajax_button_class.replace('.', '')+'" data-processing="0"><span>'+loadmore_text+'</span></div>');

		            }

		        });

		        $('body').on('click', ajax_button_class, function() {

		            if ($(next_page_class).length) {

		                $(ajax_button_class).attr('data-processing', 1).addClass('loading');

		                var href = $(next_page_class).attr('href');

		                ajax_load_items.onstart();

		                $.get(href, function(response) {

		                    $(pagination_class).html($(response).find(".woocommerce-pagination").html());

		                    $(response).find(item_class).each(function(i) {

		                    	$(this).find('.product-item__thumbnail-placeholder.second_image_enabled').addClass('second_image_loaded');

		                        $(listing_class).append($(this));

		                    });

		                    $(ajax_button_class).attr('data-processing', 0).removeClass('loading');

		                    ajax_load_items.onfinish();

		                    if ($(next_page_class).length == 0) {
		                        $(ajax_button_class).addClass('disabled').show();
		                    } else {
		                    	$(ajax_button_class).show();
		                    }
		                });

		            } else {

		                $(ajax_button_class).addClass('disabled').show();

		            }

		        });

	        }

	        if (nova_js_var.shop_pagination_type == 'infinite_scroll') {

		        var buffer_pixels = Math.abs(100);

		        $(window).scroll(function() {

		            if ($(listing_class).length) {

		                var a = $(listing_class).offset().top + $(listing_class).outerHeight();
		                var b = a - $(window).scrollTop();

		                if ((b - buffer_pixels) < $(window).height()) {
		                    if ($(ajax_button_class).attr('data-processing') == 0) {
		                        $(ajax_button_class).trigger('click');
		                    }
		                }

		            }

		        });

	        }

	    },

	    onstart: function() {
	    },

	    onfinish: function() {

	    },

	    msieversion: function() {
	        var ua = window.navigator.userAgent;
	        var msie = ua.indexOf("MSIE ");

	        if (msie > 0)
	            return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)));

	        return false;
	    },

	};
	ajax_load_items.init();
	//ajax_load_items.onfinish();

});
