import 'normalize.css';
import '../scss/styles.scss';
import img from '../img/example_parallax_bg1.png';
import img2 from '../img/example_parallax_bg2.png';
// import img3 from '../img/example_parallax_bg3.png';
// import img4 from '../img/example_parallax_bg4.png';

// Load external libraries | Look at webpack config file (resolve alias)
import $ from 'jquery';
import 'debug.addIndicators';
import 'TweenMax';
import 'TimelineMax';
import ScrollMagic from 'ScrollMagic';
import 'animation.gsap';
import 'scrollTo';

var APP = {
};

// DOM ready
$(function(){
	APP.scrollmagic();
	APP.scrollToSections();
	APP.smoothScrolling();
});

APP.smoothScrolling = function() {
	var $window = $(window);		//Window object	
	var scrollTime = 1.2;			//Scroll time
	var scrollDistance = 170;		//Distance. Use smaller value for shorter scroll and greater value for longer scroll
		
	$window.on("mousewheel DOMMouseScroll", function(event){
		
		event.preventDefault();	
										
		var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
		var scrollTop = $window.scrollTop();
		var finalScroll = scrollTop - parseInt(delta*scrollDistance);
			
		TweenMax.to($window, scrollTime, {
			scrollTo : { y: finalScroll, autoKill:true },
				ease: Power1.easeOut,	//For more easing functions see https://api.greensock.com/js/com/greensock/easing/package-detail.html
				autoKill: true,
				overwrite: 5							
			});
					
	});
};

APP.scrollToSections = function() {
	// Get scrolltop position
	$(window).on("scroll", function() {
	    console.log( $(this).scrollTop() );
	});


	// // Go to position
	$("html, body").animate({
		scrollTop: 1400
	}, 500);

	$("a[href^='#']").on("click", function(event) {
	    var target = $( $(this).attr("href") );

	    if( target.length ) {
	        event.preventDefault();
	        $("html, body").animate({
	            scrollTop: target.offset().top
	        }, 1500);
	    }
	});

	$(".cta-element-8").click( function(){
		$("html, body").animate({scrollTop:3660}, 1500);
	});


	$(".cta-element-9").click( function(){
		$("html, body").animate({scrollTop:5770}, 1500);
	});

	$(".cta-element-10").click( function(){
		$("html, body").animate({scrollTop:7570}, 1500);
	});

	// Fix Chrome error: Unable to preventDefault inside passive event listener
	window.addEventListener('wheel', { passive: false })
};

APP.scrollmagic = function() {
	// Init controller
	var controller = new ScrollMagic.Controller();


// ********** SLIDE 1 **********
	new ScrollMagic.Scene({
			triggerElement: "#parallax1",
			triggerHook: "onEnter",
			duration: "200%"})
				.setTween("#parallax1 > .image", {y: "80%", ease: Linear.easeNone})
				.addIndicators()
				.addTo(controller);

				new ScrollMagic.Scene({
					triggerElement: "#parallax2",
					triggerHook: "onEnter",
					duration: "200%"
				})
					.setTween("#element-1", 0.25, {backgroundColor: "green", bottom: "100%"}) // trigger a TweenMax.to tween
					.addIndicators()
					.addTo(controller);

// ********** SLIDE 2 **********
	new ScrollMagic.Scene({
			triggerElement: "#parallax2",
			triggerHook: "onEnter",
			duration: "200%"})
				.setTween("#parallax2 > .image", {y: "0%", ease: Linear.easeNone})
				.addIndicators()
				.addTo(controller);

				new ScrollMagic.Scene({
					triggerElement: "#parallax2",
					triggerHook: 0.75,
					duration: "80%"})
						.setTween("#element-2", 1, { bottom: "35%", left: "14%", transform: "rotate(-3deg)"})
						.addTo(controller);

				new ScrollMagic.Scene({
					triggerElement: "#parallax2",
					triggerHook: 0.75,
					duration: "80%"})
						.setTween("#element-3", 1, { bottom: "40%", left: "50%"})
						.addTo(controller);

				new ScrollMagic.Scene({
					triggerElement: "#parallax2",
					triggerHook: 0.75,
					duration: "80%"})
						.setTween("#element-4", 1, { bottom: "35%", right: "14%", transform: "rotate(3deg)"})
						.addTo(controller);

// ********** SLIDE 3 **********
	new ScrollMagic.Scene({
			triggerElement: "#parallax3",
			triggerHook: "onEnter",
			duration: "200%"})
				.setTween("#parallax3 > .image", {y: "80%", ease: Linear.easeNone})
				.addIndicators()
				.addTo(controller);

				new ScrollMagic.Scene({
						triggerElement: "#parallax3",
						duration: "200%"
					})
					.setTween("#element-5", 0.5, {backgroundColor: "green", bottom: "80%"})
					.addTo(controller);

				new ScrollMagic.Scene({
						triggerElement: "#parallax3",
						duration: "200%"
					})
					.setTween("#element-6", 0.5, {backgroundColor: "green"})
					.addTo(controller);


// ********** SLIDE 4 BARLEY 360 ANIMATION**********
	new ScrollMagic.Scene({
			triggerElement: "#parallax4",
			triggerHook: "onLeave",
			duration: "800%"
			})
			.setTween("#parallax4 > .image", {y: "0%", ease: Linear.easeNone})
			.setPin("#parallax4")
			.addTo(controller);

				// Barley 360 Pinned
				new ScrollMagic.Scene({
						triggerElement: "#parallax4",
						triggerHook: 0.25,
						duration: "130%"
					})
					//.setPin('#element-7')
					.setTween("#element-7", 1, { top: "35%"})
					.addTo(controller);

				new ScrollMagic.Scene({
						triggerElement: "#parallax4",
						triggerHook: 0.25,
						duration: "250%",
						offset: 1520
					})
					.setTween("#element-7", 1, { rotation: 360, ease: Linear.easeNone})
					.addTo(controller);

				new ScrollMagic.Scene({
						triggerElement: "#parallax4",
						triggerHook: "onCenter",
						duration: "250%",
						offset: 1000
					})
					.setTween("#element-8", 1, { bottom: "100%"})
					.addTo(controller);

				new ScrollMagic.Scene({
						triggerElement: "#parallax4",
						triggerHook: "onEnter",
						duration: "250%",
						offset: 3500
					})
					.setTween("#element-9", 1, { bottom: "100%"}) 
					.addTo(controller);

				new ScrollMagic.Scene({
						triggerElement: "#parallax4",
						triggerHook: "onEnter",
						duration: "250%",
						offset: 5300
					})
					.setTween("#element-10", 1, { bottom: "100%"}) 
					.addTo(controller);


// ********** SLIDE 5 **********
	new ScrollMagic.Scene({
			triggerElement: "#parallax5",
			triggerHook: 0,
			duration: "200%"
			})
			.setTween("#parallax5 > .image", {y: "0%", ease: Linear.easeNone})
			.setPin("#parallax5")
			.addTo(controller);

				new ScrollMagic.Scene({
						triggerElement: "#parallax5",
						triggerHook: "onEnter",
						duration: "250%",
						offset: 250
					})
					.setTween("#element-11", 1, { bottom: "110%"})
					.addTo(controller);

				new ScrollMagic.Scene({
						triggerElement: "#parallax5",
						triggerHook: "onEnter",
						duration: "200%",
						offset: -500
					})
					.setTween("#element-12", 10, { bottom: "35%"}) 
					.addTo(controller);

				new ScrollMagic.Scene({
						triggerElement: "#parallax5",
						triggerHook: "onEnter",
						duration: "150%",
						offset: 250
					})
					.setTween("#element-13", 1, { bottom: "120%"}) 
					.addTo(controller);

				new ScrollMagic.Scene({
						triggerElement: "#parallax5",
						triggerHook: "onEnter",
						duration: "250%",
						offset: 400
					})
					.setTween("#element-14", 1, { bottom: "100%"}) 
					.addTo(controller);

				new ScrollMagic.Scene({
						triggerElement: "#parallax5",
						triggerHook: "onEnter",
						duration: "300%",
						offset: 600
					})
					.setTween("#element-15", 1, { bottom: "100%"}) 
					.addTo(controller);

				new ScrollMagic.Scene({
						triggerElement: "#parallax5",
						triggerHook: "onEnter",
						duration: "500%",
						offset: 1000
					})
					.setTween("#element-16", 1, { bottom: "100%"}) 
					.addTo(controller);

				new ScrollMagic.Scene({
						triggerElement: "#parallax5",
						triggerHook: "onEnter",
						duration: "250%",
						offset: 1000
					})
					.setTween("#element-17", 1, { bottom: "100%"}) 
					.addTo(controller);


// ********** SLIDE 6 **********
	new ScrollMagic.Scene({
			triggerElement: "#parallax6",
			triggerHook: "onEnter",
			duration: "100%"})
				.setTween("#parallax6 > .image", {y: "20%", ease: Linear.easeNone})
				.addIndicators()
				.addTo(controller);

// ********** SLIDE 7 **********
  new ScrollMagic.Scene({
      triggerElement: "#parallax7",
      triggerHook: "onEnter",
      duration: "100%"})
        .setTween("#parallax7 > .image", {y: "0%", ease: Linear.easeNone})
        .addIndicators()
        .addTo(controller);

          new ScrollMagic.Scene({
              triggerElement: "#parallax7",
              triggerHook: "onEnter",
              duration: "250%",
              offset: 250
            })
            .setTween("#element-18", 1, { bottom: "110%"})
            .addTo(controller);        
};