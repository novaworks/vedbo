jQuery(function($) {

	"use strict";
	var $window = $(window);

  Novaworks.module.AdvancedMasonry = function( el ){
        var $isotope_container = $(el),
            item_selector   = $isotope_container.data('item_selector'),
            configs         = ( $isotope_container.data('config_isotope') || {} );

        configs = $.extend({
            percentPosition: true,
            itemSelector : item_selector,
            masonry : {
                gutter: 0
            }
        },configs);

        var get_isotope_column_number = function (w_w, item_w) {
            return Math.round(w_w / item_w);
        };
        Novaworks.global.eventManager.subscribe('Novaworks:AdvancedMasonry:calculatorItemWidth', function( e, $isotope_container, need_relayout ){
            if($isotope_container.hasClass('grid-items')){
                return;
            }
            var ww = $window.width(),
                _base_w = $isotope_container.data('item-width'),
                _base_h = $isotope_container.data('item-height'),
                _container_width_base = ( false !== !!$isotope_container.data('container-width') ? $isotope_container.data('container-width') : $isotope_container.width()),
                _container_width = $isotope_container.width();

            var item_per_page = get_isotope_column_number(_container_width_base, _base_w);

            if( ww > 1300){

                var __maxItem = $isotope_container.parent().attr('class').match(/masonry-max-item-per-row-(\d+)/);
                var __minItem = $isotope_container.parent().attr('class').match(/masonry-min-item-per-row-(\d+)/);

                if(__maxItem && __maxItem[1] && item_per_page > parseInt(__maxItem[1])){
                    item_per_page = parseInt(__maxItem[1]);
                }
                if(__minItem && __minItem[1] && item_per_page < parseInt(__minItem[1])){
                    item_per_page = parseInt(__minItem[1]);
                }
            }

            if( ww < 1024){
                item_per_page = $isotope_container.data('md-col');
                $isotope_container.removeClass('cover-img-bg');
            }
            else{
                $isotope_container.addClass('cover-img-bg');
            }
            if( ww < 800){
                item_per_page = $isotope_container.data('sm-col');
            }
            if( ww < 576){
                item_per_page = $isotope_container.data('xs-col');
            }
            if( ww < 480){
                item_per_page = $isotope_container.data('mb-col');
            }
            var itemwidth = Math.floor(_container_width / item_per_page),
                selector = $isotope_container.data('item_selector'),
                margin = parseInt($isotope_container.data('item_margin') || 0),
                dimension = parseFloat( _base_w / _base_h );


            $( selector, $isotope_container ).each(function (idx) {

                var thiswidth = parseFloat( $(this).data('width') || 1 ),
                    thisheight = parseFloat( $(this).data('height') || 1),
                    _css = {};

                if (isNaN(thiswidth)) thiswidth = 1;
                if (isNaN(thisheight)) thisheight = 1;

                if( ww < 1024){
                    thiswidth = thisheight = 1;
                }

                _css.width = Math.floor((itemwidth * thiswidth) - (margin / 2));
                _css.height = Math.floor((itemwidth / dimension) * thisheight);

                if( ww < 1024){
                    _css.height = 'auto';
                }

                $(this).css(_css);

            });
            if(need_relayout) {
                if($isotope_container.data('isotope')){
                    $isotope_container.isotope('layout');
                }
            }
        });

        var setup_masonry = function(){
            Novaworks.global.eventManager.publish('Novaworks:AdvancedMasonry:calculatorItemWidth', [$isotope_container, false]);

            $window.on('resize', function(e) {
                Novaworks.global.eventManager.publish('Novaworks:AdvancedMasonry:calculatorItemWidth', [$isotope_container, true]);
            });

            if(!$isotope_container.hasClass('masonry__column-type-default')){
                configs.masonry.columnWidth = 1;
            }

            $isotope_container.isotope(configs);

            if(!$isotope_container.hasClass('loaded')){
                $isotope_container.on('layoutComplete', function(e){
                    Novaworks.global.InsightInitLazyEffects(item_selector, $isotope_container, true);
                });
            }
            Novaworks.global.LazyLoad($isotope_container.parent(), {
                rootMargin: '100px',
                load: function(){

                    Novaworks.global.eventManager.publish('Novaworks:Module:LazyLoadImage', [ $isotope_container ]);
                    $isotope_container.addClass('loaded');
                    Novaworks.global.InsightInitLazyEffects(item_selector, $isotope_container, false);
                }
            }).observe();
						try{
								Waypoint.refreshAll();
						}catch (e) {

						}
						$isotope_container.addClass('completed');
        };

        return {
            init : function(){
                if($.isFunction( $.fn.isotope )){

                    setup_masonry();
                }
                else{
                    Novaworks.global.loadDependencies([ Novaworks.global.loadJsFile('isotope.pkgd')], setup_masonry );
                }
            }
        }
    }

});
