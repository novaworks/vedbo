jQuery(function($) {

	"use strict";
	
	function newsletterPopupInit (newsletter) {
		$('#popup_newsletter .subcriper_label input').on('click', function(){
		if($(this).parent().find('input:checked').length){
				popup_createCookie('newsletterSubscribe', 'true', 1);
		} else {
				popup_readCookie('newsletterSubscribe');
		}
		});
		$('#popup_newsletter .input-box button.button').on('click', function(){
				var button = $(this);
				setTimeout(function(){
						if(!button.parent().find('input#popup-newsletter').hasClass('validation-failed')){
								popup_createCookie('newsletterSubscribe', 'true', 1);
						}
				}, 500);
		});
		if (popup_readCookie('newsletterSubscribe') == null) {
				setTimeout(function(){
						newsletter.foundation('open');
				}, nova_js_var.popup_show_after);
		}
	}
	if($('#popup_newsletter').length > 0){
			var newsletter = $('#popup_newsletter');
			if(newsletter.hasClass("disable--mobile")) {
				$("html").addClass("mobile-reveal-open");
				newsletter.parent('div').addClass("disable--mobile");
			}
			newsletterPopupInit(newsletter);
	}
})
