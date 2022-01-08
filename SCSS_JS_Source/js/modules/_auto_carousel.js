jQuery(function($) {

	"use strict";

  Novaworks.module.AutoCarousel = function(el){

        var $slider = $(el),
            options =  $slider.data('slider_config') || {};

        var setup_slick = function(){

            var laptopSlides, tabletPortraitSlides, tabletSlides, mobileSlides, mobilePortraitSlides, defaultOptions, slickOptions, slidesToShow;
            slidesToShow = parseInt(options.slidesToShow.desktop) || 1;
            laptopSlides = parseInt(options.slidesToShow.laptop) || slidesToShow;
            tabletSlides = parseInt(options.slidesToShow.tablet) || laptopSlides;
            tabletPortraitSlides = parseInt(options.slidesToShow.tablet) || tabletSlides;
            mobileSlides = parseInt(options.slidesToShow.mobile_extra) || tabletSlides;
            mobilePortraitSlides = parseInt(options.slidesToShow.mobile) || mobileSlides;

            options.slidesToShow = slidesToShow;

            var rows = 1;

            if( typeof options.extras !== "undefined" && typeof options.extras.rows !== "undefined" ) {
                rows = parseInt(options.extras.rows);
            }

            if(rows < 1 || isNaN(rows)){
                rows = 1;
            }

            var res_s1 = {
                    slidesToShow: laptopSlides,
                    slidesToScroll: laptopSlides,
                },
                res_s2 = {
                    slidesToShow: tabletSlides,
                    slidesToScroll: tabletSlides
                },
                res_s3 = {
                    slidesToShow: tabletPortraitSlides,
                    slidesToScroll: tabletPortraitSlides
                },
                res_s4 = {
                    slidesToShow: mobileSlides,
                    slidesToScroll: mobileSlides
                },
                res_s5 = {
                    slidesToShow: mobilePortraitSlides,
                    slidesToScroll: mobilePortraitSlides
                };

            if(rows > 1){
                res_s1.rows = rows;
                res_s2.rows = rows;
                res_s3.rows = 1;
                res_s4.rows = 1;
                res_s5.rows = 1;
            }

            defaultOptions = {
                customPaging: function(slider, i) {
                    return $( '<span />' ).text( i + 1 );
                },
                dotsClass: 'novaworks-slick-dots',
                responsive: [
                    {
                        breakpoint: 1600,
                        settings: res_s1
                    },
                    {
                        breakpoint: 1300,
                        settings: res_s2
                    },
                    {
                        breakpoint: 800,
                        settings: res_s3
                    },
                    {
                        breakpoint: 768,
                        settings: res_s4
                    },
                    {
                        breakpoint: 576,
                        settings: res_s5
                    }
                ]
            };

            if(rows > 1){
                defaultOptions.rows = rows;
            }

            var svg_arrow = {
                left: '<svg viewBox="0 0 33 85" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="33" height="85"><path fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="square" stroke-width="2" d="M31 2L2 42.5 31 83"/></svg>',
                right: '<svg viewBox="0 0 33 85" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="33" height="85"><path fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="square" stroke-width="2" d="M2 2l29 40.5L2 83"/></svg>',
            };

            slickOptions = $.extend( {}, defaultOptions, options );

            if(typeof slickOptions.prevArrow !== "undefined"){
                slickOptions.prevArrow = slickOptions.prevArrow.replace('<button class="novaworks-arrow prev-arrow slick-prev"><i class="novaworksicon-svgleft"></i></button>', '<button class="novaworks-arrow prev-arrow slick-prev">'+svg_arrow.left+'</button>');
            }
            if(typeof slickOptions.nextArrow !== "undefined"){
                slickOptions.nextArrow = slickOptions.nextArrow.replace('<button class="novaworks-arrow next-arrow slick-next"><i class="novaworksicon-svgright"></i></button>', '<button class="novaworks-arrow next-arrow slick-next">'+svg_arrow.right+'</button>');
            }

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

            $slider.on('afterChange', function (e) {
                $slider.addClass('novaslickinit');
            });

            $slider.slick( slickOptions );

            Novaworks.global.LazyLoad($slider.parent(), {
                rootMargin: '100px',
                load: function(){
                    Novaworks.global.eventManager.publish('Novaworks:Module:LazyLoadImage', [ $slider ]);
                },
            }).observe();

        };

        return {
            init : function () {
                if($.isFunction( $.fn.slick )){
                    setup_slick();
                }
                else{
                    Novaworks.core.loadDependencies([ Novaworks.global.loadJsFile('slick') ], setup_slick );
                }
            }
        }
    }

});
