var APP = {
};

// // DOM ready
$(function(){
	APP.hamburger();
	APP.smoothState();
});

APP.smoothState = function() {
  'use strict';
  var $page = $('.page'),

      options = {
        debug: true,
        prefetch: true,
        cacheLength: 2,
        onStart: {
          duration: 1000, // Duration of our animation
          render: function ($container) {
            // Add your CSS animation reversing class
            $container.addClass('is-exiting');
            // Restart your animation
            smoothState.restartCSSAnimations();
          }
        },
        onProgress: {
          // How long this animation takes
          duration: 500,
          // A function that dictates the animations that take place
          render: function ($container) {
            console.log('Testing this on progress!')
          }
        },        
        onReady: {
          duration: 0,
          render: function ($container, $newContent) {
            // Remove your CSS animation reversing class
            $container.removeClass('is-exiting');
            // Inject the new content
            $container.html($newContent);
          }
        }
      },
      smoothState = $page.smoothState(options).data('smoothState');
}

APP.hamburger = function() {
  $('.hamburger').click( function(){
    $(this).toggleClass('is-active');
    $('#myNav').toggleClass('isActive');
  });
};