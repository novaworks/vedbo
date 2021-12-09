jQuery(function($) {

	"use strict";

	function NovaVericalSlider() {
		if( $('.shortcode_nova_vertical_slider').length > 0 ){
			var titles = [];
			var subtitle = [];
			var presets = [];
			$('.shortcode_nova_vertical_slider .swiper-slide').each(function(i) {
					titles.push($(this).data('title'));
					subtitle.push($(this).data('subtitle'));
					presets.push($(this).data('preset'));
			});
		var interleaveOffset = 0.4;
		var swiperOptions = {
			direction: "vertical",
			loop: false,
			grabCursor: true,
			resistance : true,
			resistanceRatio:0.5,
			slidesPerView: 1,
			watchSlidesProgress: true,
			allowTouchMove:true,
			speed:900,
			autoplay: false,
			effect: "slide",
			mousewheel: true,
			pagination: {
				el: '.showcase-captions',
				clickable: true,
				renderBullet: function (index, className) {
					return '<div class="outer ' + className + ' ' + presets[index] + '">' + '<div class="inner">' + '<div class="nova-vs-subtitle">' + subtitle[index] + '</div>' +  '<div class="scale-wrapper">' + '<div class="nova-vs-title">' + '<div>' + titles[index] + '</div>' + '</div>' + '</div>' + '</div>' + '</div>';

				},
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			on: {
				progress: function() {
						var swiper = this;
						for (var i = 0; i < swiper.slides.length; i++) {
							var slide = swiper.slides[i];
							var slideProgress = slide.progress;
							console.log(slideProgress);
							var innerOffset = swiper.height * interleaveOffset;
							var innerTranslate = slideProgress * innerOffset;
							slide.querySelector(".slide-img-holder").style.transform = "translate3d(0, " + innerTranslate + "px,0)";
						}

					},
					touchStart: function() {
						var swiper = this;
						for (var i = 0; i < swiper.slides.length; i++) {
							swiper.slides[i].style.transition = "";
						}
					},
					setTransition: function(speed) {
						var swiper = this;
						for (var i = 0; i < swiper.slides.length; i++) {
							swiper.slides[i].style.transition = speed + "ms";
							swiper.slides[i].querySelector(".slide-img-holder").style.transition = speed + "ms";
						}
				 	},
					init: function () {
						$('.swiper-slide-active').find('video').each(function() {
							$(this).get(0).play();
						});
					},
					slideChangeTransitionStart: function () {

						var prevslidetitle = new TimelineLite();
						prevslidetitle.staggerTo($('.swiper-pagination-bullet-active').prev().find('.nova-vs-title span').sort(() => Math.round(Math.random())-0.5), 0.5, {scaleY:2, y:-200, opacity:0, ease:Power2.easeInOut},  0.02)

						var prevslidecaption = new TimelineLite();
						prevslidecaption.staggerTo($('.swiper-pagination-bullet-active').prev().find('.nova-vs-subtitle'), 0.3, {y:-40, opacity:0, delay:0, ease:Power2.easeIn},  -0.02)

						var activeslidetitle = new TimelineLite();
						activeslidetitle.staggerTo($('.swiper-pagination-bullet-active').find('.nova-vs-title span').sort(() => Math.round(Math.random())-0.5), 0.5, {scaleY:1, y:0, opacity:1, scale:1, delay:0.3, ease:Power2.easeOut}, 0.02)

						var activeslidecaption = new TimelineLite();
						activeslidecaption.staggerTo($('.swiper-pagination-bullet-active').find('.nova-vs-subtitle'), 0.5, {y:0, opacity:1, scale:1, delay:0.5, ease:Power2.easeOut}, -0.02)

						var nextslidetitle = new TimelineLite();
						nextslidetitle.staggerTo($('.swiper-pagination-bullet-active').next().find('.nova-vs-title span').sort(() => Math.round(Math.random())-0.5), 0.5, {scaleY:2, y:200, opacity:0, ease:Power2.easeInOut},  0.02)

						var nextslidecaption = new TimelineLite();
						nextslidecaption.staggerTo($('.swiper-pagination-bullet-active').next().find('.nova-vs-subtitle'), 0.3, {y:40, opacity:0, delay:0, ease:Power2.easeIn},  -0.02)

						$('.swiper-slide-active').find('video').each(function() {
							$(this).get(0).play();
						});

					},
					slideChangeTransitionEnd: function () {

						$('.swiper-slide-prev').find('video').each(function() {
							$(this).get(0).pause();
						});

						$('.swiper-slide-next').find('video').each(function() {
							$(this).get(0).pause();
						});

					}
			},

		};
		$('.slide-img-thumbnail').each(function() {
			var image = $(this).data('src');
			$(this).css({'background-image': 'url(' + image + ')'});
		});
		var swiper = new Swiper(".shortcode_nova_vertical_slider", swiperOptions);

		//Slide Captions
		$('.showcase-captions-wrap .nova-vs-title').each(function(){
			var words = $(this).text().slice(" ");
			var total = words.length;
			$(this).empty();
			for (var index = 0; index < total; index ++){
				$(this).append($("<span /> ").text(words[index]));
			}
		});
		$("#showcase-slider .swiper-slide").find(".nova-vs-title").each(function(i) {
			$(this).wrap( "<div class='outer'><div class='inner'></div></div>" );
		});
		//Sart show slider
		TweenMax.set($("#showcase-holder"), {opacity:0, scale:1.05});
		TweenMax.to($("#showcase-holder"), 0.4, {force3D:true, opacity:1, scale:1, delay:0.8, ease:Power2.easeOut});
		// Add new footer
		$("footer").addClass("showcase-footer")
	}
}
NovaVericalSlider();
});
