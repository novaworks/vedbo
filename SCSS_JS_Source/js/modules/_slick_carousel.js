jQuery(function($) {

	"use strict";

		window.nova_slick_slider = function(carousel){

			var $slider = $(carousel),
					options =  $slider.data('slider_config') || {};

			var init = function(){
					setup_slick();
			};

			var setup_slick = function(){
					var laptopSlides, tabletPortraitSlides, tabletSlides, mobileSlides, mobilePortraitSlides, defaultOptions, slickOptions;
					laptopSlides = parseInt(options.slidesToShow.laptop) || 1;
					tabletSlides = parseInt(options.slidesToShow.tablet) || 1;
					tabletPortraitSlides = parseInt(options.slidesToShow.tabletportrait) || 1;
					mobileSlides = parseInt(options.slidesToShow.mobile) || 1;
					mobilePortraitSlides = parseInt(options.slidesToShow.mobileportrait) || 1;
					options.slidesToShow = parseInt(options.slidesToShow.desktop) || 1;

					defaultOptions = {

							responsive: [
									{
											breakpoint: 1336,
											settings: {
													slidesToShow: laptopSlides,
													slidesToScroll: options.slidesToScroll
											}
									},
									{
											breakpoint: 1025,
											settings: {
													slidesToShow: tabletSlides,
													slidesToScroll: tabletSlides
											}
									},
									{
											breakpoint: 769,
											settings: {
													slidesToShow: tabletPortraitSlides,
													slidesToScroll: tabletPortraitSlides
											}
									},
									{
											breakpoint: 481,
											settings: {
													slidesToShow: mobileSlides,
													slidesToScroll: mobileSlides
											}
									},
									{
											breakpoint: 361,
											settings: {
													slidesToShow: mobilePortraitSlides,
													slidesToScroll: mobilePortraitSlides
											}
									}
							]
					};
					$slider.on('init', function(e, slick){
							if(slick.slideCount <= slick.options.slidesToShow){
									slick.$slider.addClass('hidden-dots');
							}
							else{
									slick.$slider.removeClass('hidden-dots');
							}
							if(slick.options.centerMode){
									slick.$slider.addClass('nova-slick-centerMode');
							}
					});
					slickOptions = $.extend( {}, defaultOptions, options );
					$slider.not('.slick-initialized').slick( slickOptions );
			};

			return init();

	};
	if($('.slick-carousel').length > 0) {
		var slick_carousel = $('.slick-carousel');
		slick_carousel.each(function(){
				nova_slick_slider($(this));
		});
	}
})
