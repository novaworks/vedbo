(function($){

	"use strict";

	var $style_tag = $('#nova_insert_custom_css');

	if (!$.exists($style_tag)) {
			$style_tag = $('<style></style>', {
					'id': 'nova_insert_custom_css'
			}).appendTo('head');
	}
	$('.custom-styles-css').each(function(){
		var custom_css = $(this).html();
		$style_tag.append(custom_css);
	});

})(jQuery);
