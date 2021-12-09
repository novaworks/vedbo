jQuery(function($) {

	"use strict";
	var $window = $(window);
	Novaworks.module.DefaultMasonry = function( el ){
	        var $isotope_container = $(el),
	            item_selector   = $isotope_container.data('item_selector'),
	            configs         = ( $isotope_container.data('config_isotope') || {} );

	        configs = $.extend({
	            percentPosition: true,
	            itemSelector : item_selector
	        },configs);

	        var setup_masonry = function(){

	            $isotope_container.isotope(configs);

	            Novaworks.global.LazyLoad($isotope_container.parent(), {
	                rootMargin: '100px',
	                load: function(){
	                    Novaworks.global.eventManager.publish('Novaworks:Module:LazyLoadImage', [ $isotope_container ]);
	                    $('.nova-isotope-loading', $isotope_container).hide();
	                    $isotope_container.addClass('loaded');
	                    Novaworks.global.InsightInitLazyEffects(item_selector, $isotope_container, false);
	                }
	            }).observe();
							try{
									Waypoint.refreshAll();
							}catch (e) {

							}
	        };

	        return {
	            init : function(){

	                $('.nova-isotope-loading', $isotope_container).show();

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
