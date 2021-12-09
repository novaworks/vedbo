jQuery(function($) {

  "use strict";

  function product_quick_view_ajax(id) {

    $.ajax({

      url: nova_ajax_url,

      data: {
        "action": "nova_product_quick_view",
        'product_id': id
      },

      success: function(results) {
        $(".nova_wc_quickview__content").empty().html(results);
        $("body").removeClass("progress");
        $("body").addClass("quickview-loaded");
        if (typeof $.fn.select2 === 'function') {
          $('#nova_wc_quickview .variations_form select').select2({
            minimumResultsForSearch: -1,
            placeholder: nova_js_var.select_placeholder,
            allowClear: true,
          });
        }
        if ($('.qv-carousel').length > 0) {
          $('.qv-carousel').slick();
        }
        //Active custom scrollBars
        nova_custom_scrollbar( $('#nova_wc_quickview .nova_wc_quickview__content .site-content .product .box-summary-wrapper') );

				$('#nova_wc_quickview .woocommerce-product-details__short-description').showMore({
						minheight: 100,
						buttontxtmore: nova_js_var.read_more_btn,
						buttontxtless: nova_js_var.read_less_btn,
						animationspeed: 250
				});
        setTimeout(function() {
          $('#nova_wc_quickview .variations_form').each(function() {
            $(this).wc_variation_form();
          });
        }, 1100);

        setTimeout(function() {
          $('#nova_wc_quickview .woocommerce-product-gallery').wc_product_gallery();
        }, 1000);

        setTimeout(function() {
          $(document.body).trigger('opened_product_quickview');
          $('#nova_wc_quickview').addClass('open');
        }, 500);

        setTimeout(function() {
          $('#nova_wc_quickview .nova_wc_quickview__content').addClass('maybe_scroll');
        }, 1200);
      },

    });
  }

  function close_quickview_modal() {
    $("body").removeClass("quickview-loaded");
    $('#nova_wc_quickview').removeClass('open');
    $('#nova_wc_quickview .nova_wc_quickview__content').removeClass('maybe_scroll');
    $('#nova_wc_quickview .nova_wc_quickview__content').empty();
    $(document.body).trigger('closed_product_quickview');
  }

  $('#site-content').on('click', '.nova_product_quick_view_btn', function(e) {
    e.preventDefault();
    close_quickview_modal();
    var product_id = $(this).data('product-id');
    product_quick_view_ajax(product_id);
  });

  $('#nova_wc_quickview').on('click', function(e) {
    var containers = [
      ".nova_wc_quickview__content"
    ];

    var container = $(containers.join(", "));

    if (!container.is(e.target) && container.has(e.target).length === 0) {
      close_quickview_modal();
    }
  });

  $('#nova_wc_quickview').on('click', 'button.close-button', function(e) {
    close_quickview_modal();
  });
});
