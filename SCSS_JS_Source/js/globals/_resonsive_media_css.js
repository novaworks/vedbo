(function($){

	"use strict";

	window.nova_responsive_media_css = function( el ){
			var $elm = $(el),
					n 		= $elm.attr('data-el_media_sizes'),
					target 	= $elm.attr('data-el_target'),
					tmp_xlg = '',
					tmp_lg  = '',
					tmp_md  = '',
					tmp_sm  = '',
					tmp_xs  = '',
					tmp_mb  = '';
			var init = function(){
					if (typeof n !== 'undefined' || n != null) {
							$.each($.parseJSON(n), function (i, v) {
									var css_prop = i;
									if (typeof v !== 'undefined' && v != null && v != '') {
											$.each(v.split(";"), function(i, vl) {
													if (typeof vl !== 'undefined' && vl != null && vl != '') {
															var splitval = vl.split(":"),
																	_elm_attr = css_prop + ":" + splitval[1] + ";";
															switch( splitval[0]) {
																	case 'xlg':
																			tmp_xlg     += _elm_attr;
																			break;
																	case 'lg':
																			tmp_lg      += _elm_attr;
																			break;
																	case 'md':
																			tmp_md      += _elm_attr;
																			break;
																	case 'sm':
																			tmp_sm      += _elm_attr;
																			break;
																	case 'xs':
																			tmp_xs      += _elm_attr;
																			break;
																	case 'mb':
																			tmp_mb      += _elm_attr;
																			break;
															}
													}
											});
									}
							});
					}

					if(tmp_xlg!='') {
							appendCSS(target+ '{' + tmp_xlg + '}', 'xlg');
					}
					if(tmp_lg!='') {
							appendCSS(target+ '{' + tmp_lg + '}', 'lg');
					}
					if(tmp_md!='') {
							appendCSS(target+ '{' + tmp_md + '}', 'md');
					}
					if(tmp_sm!='') {
							appendCSS(target+ '{' + tmp_sm + '}', 'sm');
					}
					if(tmp_xs!='') {
							appendCSS(target+ '{' + tmp_xs + '}', 'xs');
					}
					if(tmp_mb!='') {
							appendCSS(target+ '{' + tmp_mb + '}', 'mb');
					}
			};

			var appendCSS = function(css, screen){
					var screen_obj = {
							'lg' : 'all',
							'xlg' : 'screen and (min-width:1824px)',
							'md' : 'screen and (max-width:1199px)',
							'sm' : 'screen and (max-width:991px)',
							'xs' : 'screen and (max-width:767px)',
							'mb' : 'screen and (max-width:479px)'
					};

					$.each(screen_obj,function(item){
							if(!$.exists($('#nova_custom_css_' + item))){
									$(
											'<style></style>',
											{
													'id' : 'nova_custom_css_' + item,
													'media' : screen_obj[item]
											}
									).appendTo('head');
							}
					});

					var $style_tag = $('#nova_custom_css_' + screen);

					$style_tag.append(css);
			};

			return init();
	};

	$( ".js_responsive_css" ).each(function() {
		var el = $( this );
  	nova_responsive_media_css(this);
	});

})(jQuery);
