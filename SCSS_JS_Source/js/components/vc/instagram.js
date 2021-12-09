jQuery(function($) {

	"use strict";

  /**
	 * Instagram Feed
	 */
	$( '.nova-instagram-feeds' ).each( function() {
		var $shortcode = $( this );

		var $this = $shortcode,
			_configs = $this.data( 'feed_config' ),
			_instagram_token = $this.data( 'instagram_token' ),
			$target, feed_configs, feed;

		if( '' == _instagram_token ) {
			$this.addClass( 'loaded loaded-error' );
		}

		$target = $( '.instagram-feeds', $this );

		feed_configs = $.extend( {
			target: $target.get(0).id,
			accessToken: _instagram_token
		}, _configs );

		feed = new Instafeed( feed_configs );
		feed.run();
	} );

});
