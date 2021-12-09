jQuery(function($) {

    "use strict";

    $('body').imagesLoaded().always(function(instance) {
		setTimeout(function() {

			if ( $('.blog-hero-slider').length ) {

				var interleaveOffset = 0.5;
				var interleaveOffsetCaption = 1;

				// Caption
				var BloghalfSliderCaption = new Swiper('.blog-hero-slider__caption', {
				slidesPerView: 1,
				loop: true,
				effect: 'fade',
				direction: 'vertical',
				parallax: false,
				speed: 1500,
				simulateTouch: false
				});

				// Image
				var BloghalfSliderImage = new Swiper('.blog-hero-slider__image', {
				slidesPerView: 1,
				loop: true,
				pagination: {
				el: '.swiper-pagination-num',
				type: 'fraction',
				clickable: true
				},
				autoplay: {
				disableOnInteraction: false,
				},
				speed: 1500,
				direction: 'vertical',
				simulateTouch: false,
				roundLengths: true,
				keyboard: true,
				mousewheel: true,
				parallax: true,
				navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
				},
				on: {
				progress: function() {
				var swiper = this;
				for (var i = 0; i < swiper.slides.length; i++) {
				var slideProgress = swiper.slides[i].progress;
				var innerOffset = swiper.height * interleaveOffset;
				var innerTranslate = slideProgress * innerOffset;
				swiper.slides[i].querySelector('.cover-slider').style.transform =
				'translateY(' + innerTranslate + 'px)';
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
				}
				}
				});

				BloghalfSliderCaption.controller.control = BloghalfSliderImage;
				BloghalfSliderImage.controller.control = BloghalfSliderCaption;
			}

		}, 2500);
    });
});
