var FadeTransition = Barba.BaseTransition.extend({
  start: function() {
    /**
     * This function is automatically called as soon the Transition starts
     * this.newContainerLoading is a Promise for the loading of the new container
     * (Barba.js also comes with an handy Promise polyfill!)
     */

    // As soon the loading is finished and the old page is faded out, let's fade the new page
    Promise
      .all([this.newContainerLoading, this.startTransition()])
      .then(this.fadeIn.bind(this));
  },

  startTransition: function() {
    /**
     * this.oldContainer is the HTMLElement of the old Container
     */
    var transitionPromise = new Promise( function(resolve){

      //return $(this.oldContainer).animate({ opacity: 0 }).promise();
      var outTransition = new TimelineMax();

      outTransition
      .to(".content", 1, {y: -50, autoAlpha: 0, ease: Power2.easeOut})
      .set(".color-wipe", {display: "block", y: "100%"}, "-=0.7")
      .staggerFromTo(".color-wipe", 1, {y: "100%"}, {y: "-100%", ease: Expo.easeOut}, 0.2, "-=0.7")

      .to(".loader", 1, {autoAlpha: 1, onComplete: function() {
        resolve();
      }},)

      .staggerFromTo(".color-wipe", 1, {y: "-100%"}, {y: "-200%", ease: Expo.easeOut}, 0.2, "-=0.5")
      .set(".color-wipe", {display:"none"})
    });

     return transitionPromise;
  },

  fadeIn: function() {
    /**
     * this.newContainer is the HTMLElement of the new Container
     * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
     * Please note, newContainer is available just after newContainerLoading is resolved!
     */
    $(window).scrollTop(0);
    var _this = this;
    var $el = $(this.newContainer);

    TweenMax.set($(this.oldContainer), {display: "none"});
    TweenMax.set($el, { visibility: "visible", opacity: 0, });    

    TweenMax.to(".loader", 1, {y:-50, autoAlpha: 0, ease: Expo.easeOut})
    TweenMax.fromTo(".content", 1.5, {y: 30, autoAlpha: 0}, {delay: 0.8, y: 0, autoAlpha: 1, ease: Expo.easeOut})
    
    TweenMax.to($el, 0.1, {
      opacity: 1, 
      onComplete: function(){
        _this.done();
      }
    });
  }
});

/**
 * Next step, you have to tell Barba to use the new Transition
 */

Barba.Pjax.getTransition = function() {
  /**
   * Here you can use your own logic!
   * For example you can use different Transition based on the current page or link...
   */
   var tl = new TimelineMax();
   tl
   .to(".screen-wipe-top", 0.5, {y: "50%", repeat: 1, yoyo: true})
   .to(".screen-wipe-bottom", 0.5, {y: "-50%", repeat: 1, yoyo: true}, "-=1")

  return FadeTransition;
};

//Please note, the DOM should be ready
Barba.Pjax.start();