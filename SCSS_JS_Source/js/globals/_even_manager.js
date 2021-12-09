// Initialize Event Manager
(function($) {
    'use strict';

    Novaworks.global.eventManager = {};

    Novaworks.global.eventManager.subscribe = function(evt, func) {
        $(this).on(evt, func);
    };

    Novaworks.global.eventManager.unsubscribe = function(evt, func) {
        $(this).off(evt, func);
    };
    Novaworks.global.eventManager.publish = function(evt, params) {
        $(this).trigger(evt, params);
    };

}(jQuery));
