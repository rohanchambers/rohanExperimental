var APP = {
};

// // DOM ready
$(function(){
	APP.scrollmagic();
});

APP.scrollmagic = function() {
	// init controller
	var controller = new ScrollMagic.Controller();

	// create a scene
	var pin = new ScrollMagic.Scene({
	        duration: 2000,    // the scene should last for a scroll distance of 100px
	        offset: 2000        // start this scene after scrolling for 50px
	    })
	    .setPin("#section-2") // pins the element for the the scene's 
	    //.addIndicators()
	    .addTo(controller); // assign the scene to the controller


	var element = new ScrollMagic.Scene({
			triggerElement: "#element-1", duration: 2000
	    })
		.setTween("#element-1", 0.5, {marginTop: "100px"}) // trigger a TweenMax.to tween
	    .addTo(controller); // assign the scene to the controller


	var dropdown = new ScrollMagic.Scene({
			triggerElement: "#element-3", duration: 2000
	    })
		.setTween("#element-3", 1, {marginTop: "500px", opacity: 1}) // trigger a TweenMax.to tween
	    .addTo(controller) // assign the scene to the controller
	    .addIndicators()

		var controller = new ScrollMagic.Controller({
			globalSceneOptions: {
				triggerHook: 'onLeave'
			}			
		});
		// get all slides
		var slides = document.querySelectorAll("section.section");
		// var slidesID = document.getElementById("section#section-2");
		// //console.log(slidesID)

		// create scene for every slide
		for (var i=0; i<slides.length; i++) {
			var wipes = new ScrollMagic.Scene({

					triggerElement: slides[i],
				})
				.setPin(slides[i])
				.addIndicators() // add indicators (requires plugin)
				.addTo(controller);
		}
};