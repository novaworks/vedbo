(function($) {

	"use strict";

	// =============================================================================
	// Header Search
	// =============================================================================

	// Search fullscreen
	if($('#masthead').find('#js_header_search_modal').length !== 0) {
		$("#js_header_search_modal").animatedModal({
			animatedIn: 'slideInDown',
			animatedOut: 'slideOutUp',
			beforeOpen: function() {
				window.setTimeout(function () {
								$(".header-search").addClass('animate');
				 }, 300);
				 window.setTimeout(function () {
								 $(".header-search").addClass('animate-line');
					}, 1000);
			},
		});
	}

	if($('.elementor-location-header').find('#js_header_search_modal').length !== 0) {
		$("#js_header_search_modal").animatedModal({
			animatedIn: 'slideInDown',
			animatedOut: 'slideOutUp',
			beforeOpen: function() {
				window.setTimeout(function () {
								$(".header-search").addClass('animate');
				 }, 300);
				 window.setTimeout(function () {
								 $(".header-search").addClass('animate-line');
					}, 1000);
			},
		});
	}
	if($('.header-mobiles-wrapper').find('#js_mobile_search_modal').length !== 0) {
		$("#js_mobile_search_modal").animatedModal({
			animatedIn: 'slideInDown',
			animatedOut: 'slideOutUp',
			beforeOpen: function() {
				window.setTimeout(function () {
								$(".header-search").addClass('animate');
				 }, 300);
				 window.setTimeout(function () {
								 $(".header-search").addClass('animate-line');
					}, 1000);
			},
		});
	}
	// Init

	$(document).keyup(function(e) {
	    if( e.keyCode == 27 ) {
	    	$('.site-search.off-canvas .header_search_ajax_results_wrapper').removeClass('visible animated');
	    	return false;
    	}
	});

	if ( typeof $.fn.select2 === 'function' ) {

		$('.off-canvas-wrapper .header_search_select').select2({
			minimumResultsForSearch: -1,
			allowClear: false,
			dropdownParent: $('.off-canvas-wrapper .header_search_form'),
			containerCssClass: "select2_no_border",
			dropdownCssClass: "select2_no_border",
		});

		$('.header-type-1 .header_search_select').select2({
			minimumResultsForSearch: -1,
			allowClear: false,
			dropdownParent: $('.header-type-1 .header_search_form'),
			containerCssClass: "select2_no_border",
			dropdownCssClass: "select2_no_border",
		});

	}

	// Show it
	$('.header_search_select_wrapper').addClass('visible');
	// Open
	$('.header_search_input_wrapper input').on('click', function() {
		$(this).parents('form.header_search_form').addClass('active');
	    $('.header_search_ajax_results_wrapper').addClass('visible animated');
	});
	window.original_results = $('.header_search_ajax_results').html();

	// Start Close
	window.header_search_results_close = function(e) {

		var header_search_results_hiding = function(e) {
		    var container = $(".alwayshow-box .header_search_input_wrapper input, .alwayshow-box .header_search_ajax_results_wrapper");
		    if (!container.is(e.target) && container.has(e.target).length === 0)
		    {
		        $('.alwayshow-box  .header_search_ajax_results_wrapper').removeClass('animated');
		    }
		};

		var header_search_results_hide = nova_js_debounce(function(e) {
		    var container = $(".alwayshow-box .header_search_input_wrapper input, .alwayshow-box .header_search_ajax_results_wrapper");
		    if (!container.is(e.target) && container.has(e.target).length === 0)
		    {
		        $('.alwayshow-box  .header_search_ajax_results_wrapper').removeClass('visible');
		    }
		}, 300);

		var header_search_border = function(e) {
			var container = $('.header_search_form');
			if (!container.is(e.target) && container.has(e.target).length === 0)
			{
				container.removeClass('active');
			}
		}

		var header_search_results_reset = nova_js_debounce(function(e) {
		    var container = $(".header_search_input_wrapper input, .header_search_ajax_results_wrapper");
		    if (!container.is(e.target) && container.has(e.target).length === 0)
		    {
		        if(!$('.header_search_input').val()) {
		        	$('.header_search_ajax_results').html(window.original_results);
	        	}
		    }
		}, 400);

		header_search_results_hiding(e);
		header_search_results_hide(e);
		header_search_border(e);
		header_search_results_reset(e);

	}

	$(document).on('click', function(e) {
	    header_search_results_close(e);
	});

	$('.header_search_form').on('click', 'a.view-all', function(){
		$(this).parents('.header_search_form').submit();
	})
	// End Close

	// =============================================================================
	// WP Search
	// =============================================================================

	// Open
	$('.woocommerce-product-search input').on('click', function() {
		$(this).parents('form.woocommerce-product-search').addClass('active');
	});

	$('.search-form input').on('click', function() {
		$(this).parents('form.search-form').addClass('active');
	});

	// Close
	$(document).on('click', function(e) {
	    header_wp_search_border(e);
	    header_wc_search_border(e);
	});

	var header_wp_search_border = function(e) {
		var container = $('.search-form');
		if (!container.is(e.target) && container.has(e.target).length === 0)
		{
			container.removeClass('active');
		}
	}

	var header_wc_search_border = function(e) {
		var container = $('.woocommerce-product-search');
		if (!container.is(e.target) && container.has(e.target).length === 0)
		{
			container.removeClass('active');
		}
	}

})(jQuery);
