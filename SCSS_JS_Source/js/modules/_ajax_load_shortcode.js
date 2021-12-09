jQuery(function($) {

	"use strict";
	
window.ajax_load_shortcode = function( el ){
	var $this = $(el),
			query = $this.data('query-settings'),
			product_type = $this.data('product-type'),
			nonce = $this.data('public-nonce'),
			requestData = {
					action : 'nova_get_shortcode_loader_by_ajax',
					data 	: query,
					type	:	product_type,
					_vcnonce : nonce
		};
		var init = function(){
				nova_lazyload($this, {
					rootMargin: '200px',
					load : setup_ajax
				}).observe();
		};

		var setup_ajax = function() {
			if($this.hasClass('is-loading') || $this.hasClass('has-loaded')){
					return;
			}
			$this.addClass('is-loading');
			var _ajax_option = {
					url : nova_ajax_url,
					method: "POST",
					dataType: "html",
					data : requestData
			};
			$.ajax(_ajax_option).done(function(response_data){
				var $data = $(response_data);
				$(document).trigger('NOVA:AjaxLoadShortCode:before_render',[$this,$data]);
				$this.removeClass('is-loading');
				$this.addClass('has-loaded');
				$data.appendTo($this);
				$this.find('.product-item__thumbnail-placeholder.second_image_enabled').addClass('second_image_loaded');
				$(document).trigger('NOVA:AjaxLoadShortCode:after_render',[$this,$data]);
			});
		};

		return init();
}
$( ".elm-ajax-loader" ).each(function() {
	ajax_load_shortcode(this);
});

});
