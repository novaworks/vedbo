jQuery(function($) {

	"use strict";

	window.nova_slider = function(carousel){

		var $slider = $(carousel),
				options =  $slider.data('settings') || {};

		var init = function(){
				setup_slider();
		};

		var setup_slider = function(){

			var slider_autoplay, slider_autoplay_delay, slide_autoplay_on_hover, slider_loop, slide_duration, captionOptions = {}, imageOptions = {};
			slider_autoplay = options.autoplay;
			slider_autoplay_delay = options.autoplayDelay;
			slide_autoplay_on_hover = options.autoplayHover;
			slider_loop = options.loop;
			slide_duration = options.speed;
			//settings for caption slider
			captionOptions['slidesPerView'] = 1;
			captionOptions['loop'] = slider_loop;
			captionOptions['effect'] = 'fade';
			captionOptions['parallax'] = true;
			captionOptions['speed'] = slide_duration;
			captionOptions['simulateTouch'] = false;
			//settings for image slider
			imageOptions['slidesPerView'] = 1;
			imageOptions['loop'] = slider_loop;
			imageOptions['pagination'] = {
				el: '.swiper-pagination',
				type: 'fraction',
				clickable: true
			};
			imageOptions['autoplay'] = slider_autoplay ? { delay: slider_autoplay_delay, disableOnInteraction: false } : false;
			imageOptions['speed'] = slide_duration;
			imageOptions['simulateTouch'] = false;
			imageOptions['roundLengths'] = true;
			imageOptions['keyboard'] = true;
			imageOptions['mousewheel'] = false;
			imageOptions['parallax'] = true;
			imageOptions['navigation'] = {
				nextEl: '.nova-slider-button-next',
				prevEl: '.nova-slider-button-prev'
			};

			$slider.imagesLoaded().always( function( instance ) {

				// Half slider
				var interleaveOffset = 0.5;
				var novaSliderCaption = new Swiper($('.slider__caption',$slider), captionOptions);

				imageOptions = $.extend({}, imageOptions, {
					on: {
						progress: function() {
							var swiper = this;
							for (var i = 0; i < swiper.slides.length; i++) {
								var slideProgress = swiper.slides[i].progress;
								var innerOffset = swiper.width * interleaveOffset;
								var innerTranslate = slideProgress * innerOffset;
								swiper.slides[i].querySelector('.cover-slider').style.transform =
								'translateX(' + innerTranslate + 'px)';
							}
						},
						touchStart: function() {
							var swiper = this;
							for (var i = 0; i < swiper.slides.length; i++) {
								swiper.slides[i].style.transition = '';
							}
						},
						setTransition: function(speed) {
							var swiper = this;
							for (var i = 0; i < swiper.slides.length; i++) {
								swiper.slides[i].style.transition = speed + 'ms';
								swiper.slides[i].querySelector('.cover-slider').style.transition =
								speed + 'ms';
							}
						},
						slideChangeTransitionStart: function() {
							$('.slider-nav__path-progress',$slider).css({'transition': slide_duration+'ms','stroke-dashoffset': '0'});
						},
						slideChangeTransitionEnd: function() {
							$('.slider-nav__path-progress',$slider).css({'transition': '0ms','stroke-dashoffset': '141'});
						}
					}
				});

				var novaSliderImage = new Swiper($('.slider__image',$slider), imageOptions);

				novaSliderCaption.controller.control = novaSliderImage;
				novaSliderImage.controller.control = novaSliderCaption;

				if(slide_autoplay_on_hover != 'none'){

					if(slide_autoplay_on_hover == 'pause' || 'stop' ) {
						$slider.on("mouseover", function( e ) {
							novaSliderCaption.autoplay.stop();
							novaSliderImage.autoplay.stop();
						});
					}
					if(slide_autoplay_on_hover == 'pause'){
						$slider.on("mouseleave", function( e ) {
							novaSliderCaption.autoplay.start();
							novaSliderImage.autoplay.start();
						});
					}
				}

			});

		};

		return init();
	};

	if($('.shortcode_nova_slider').length > 0) {
		var shortcode_nova_slider = $('.shortcode_nova_slider');
		shortcode_nova_slider.each(function(){
				nova_slider($(this));
		});
	}

});
