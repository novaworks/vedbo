jQuery(function($) {

    "use strict";

    function getSuggestions() {


        var keyword=  $('.header_search_form input.header_search_input').val();
        var category= $('.header_search_form select.header_search_select').val();



        if (keyword.length >= 3 && keyword != keydown) {
            $.xhrPool.abortAll();
            $('.header_search_ajax_results').addClass('loading');
            $('.header_search_ajax_loading').addClass('visible');
            $('.header_search_button_wrapper').addClass('btn-loading');

            if ( search_cache[keyword+category] !== undefined) {
                $('.header_search_ajax_results').html('<div class="ajax_results_wrapper">' + search_cache[keyword+category] + '</div>');
                $('.header_search_ajax_results').removeClass('loading');
                $('.header_search_ajax_loading').removeClass('visible');
                $('.header_search_button_wrapper').removeClass('btn-loading');
            } else {
                $.ajax({
                    type: 'GET',
                    url: nova_ajax_url,
                    cache: true,
                    data: {
                        "action" : "nova_ajax_url",
                        "search_keyword"    : keyword,
                        "search_category"   : category
                    },
                    dataType: "json",
                    contentType: "application/json",
                    success: function( results ) {
                        search_cache[keyword+category]= results.suggestions;
                        $('.header_search_ajax_results').html('<div class="ajax_results_wrapper">' + results.suggestions + '</div>');
                        $('.header_search_ajax_results').removeClass('loading');
                        $('.header_search_ajax_loading').removeClass('visible');
                        $('.header_search_button_wrapper').removeClass('btn-loading');
                    },

                    always: function( results ) {
                       $('.header_search_ajax_results').removeClass('loading');
                       $('.header_search_ajax_loading').removeClass('visible');
                       $('.header_search_button_wrapper').removeClass('btn-loading');
                    }
                });
            }
        }
    };

    $.xhrPool = [];
    $.xhrPool.abortAll = function() {
        $(this).each(function(i, jqXHR) {   //  cycle through list of recorded connection
            jqXHR.abort();  //  aborts connection
            $.xhrPool.splice(i, 1); //  removes from list by index
        });
    }
    $.ajaxSetup({
        beforeSend: function(jqXHR) { $.xhrPool.push(jqXHR); }, //  annd connection to list
        complete: function(jqXHR) {
            var i = $.xhrPool.indexOf(jqXHR);   //  get index for current connection completed
            if (i > -1) $.xhrPool.splice(i, 1); //  removes from list by index
        }
    });

    var search_cache=  new Array;

    var keydown  = $('.header_search_form input.header_search_input').val();

    $('input.header_search_input').on('keydown', function(e) {
        keydown = $(this).val();
    })

    $('input.header_search_input').on('keyup focus', function(e) {
        getSuggestions();
    });

    $('select.header_search_select').change(function() {
        var keyword=  $('.header_search_form input.header_search_input').val();

        if ( keyword.length >= 3 ) {
            getSuggestions();
            $('input.header_search_input').click();
        }
    });

    $('form.header_search_form').on('click', 'span.view-all a', function(){
        $(this).parents('form.header_search_form').submit();
    })
})
