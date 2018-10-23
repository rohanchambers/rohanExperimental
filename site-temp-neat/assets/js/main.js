var APP = {
};



// // DOM ready
$(function(){
  //APP.smoothState();
  APP.barbarJS();
  Barba.Pjax.start();
});


APP.barbarJS = function() {
  // This till doesn't stop the double click issue of refreshing page
  var links = document.querySelectorAll('a[href]');
  var cbk = function(e) {
   if(e.currentTarget.href === window.location.href) {
     e.preventDefault();
     e.stopPropagation();
   }
  };

  for(var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', cbk);
  }
  
  var transEffect = Barba.BaseTransition.extend({
      start: function(){
        this.newContainerLoading.then(val => this.fadeInNewcontent($(this.newContainer)));
      },
      fadeInNewcontent: function(nc) {
        nc.hide();
        var _this = this;
        $(this.oldContainer).fadeOut(1000).promise().done(() => {
          nc.css('visibility','visible');
          nc.fadeIn(1000, function(){
            _this.done();
          })
        });
      }
  });

  Barba.Pjax.getTransition = function() {
    return transEffect;
  }  
}

APP.smoothState = function() {
  'use strict';
  var $page = $('.page'),

      options = {
        debug: true,
        prefetch: true,
        cacheLength: 2,
        onStart: {
          duration: 700, // Duration of our animation
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
          duration: 1000,
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