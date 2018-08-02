var APP = {
};

// // DOM ready
$(function(){
	APP.scrollmagic();
});

APP.scrollmagic = function() {
	// init controller
	var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});


	// // define movement of panels
	// var wipeAnimation = new TimelineMax()
	// 	// animate to third panel
	// 	.to("#parallax4", 0, 	{y: "-100%"})
	// 	.to("#parallax4", 0.5,	{y: "-100%", delay: 1})
	// 	.to("#parallax4", 1, 	{y: "-100%"})

	// // build scene
	// new ScrollMagic.Scene({triggerElement: "#parallax4", 
	// 						triggerHook: "onLeave"})
	// 				.setPin("#parallax4")
	// 				.setTween(wipeAnimation)
	// 				//.setTween("#parallax4", 1, {y: "-300%", delay: 100})
	// 				.addIndicators() // add indicators (requires plugin)
	// 				.addTo(controller);

	// build scenes
	new ScrollMagic.Scene({triggerElement: "#parallax1"})
					.setTween("#parallax1 > div", {y: "80%", ease: Linear.easeNone})
					.addIndicators()
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#parallax2"})
					.setTween("#parallax2 > div", {y: "0%", ease: Linear.easeNone})
					.addIndicators()
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#parallax3"})
					.setTween("#parallax3 > div", {y: "80%", ease: Linear.easeNone})
					.addIndicators()
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#parallax4"})
					.setTween("#parallax4 > div", {y: "0%", ease: Linear.easeNone})
					.addIndicators()
					.addTo(controller);	

	new ScrollMagic.Scene({triggerElement: "#parallax5"})
					.setTween("#parallax5 > div", {y: "80%", ease: Linear.easeNone})
					.addIndicators()
					.addTo(controller);	

	new ScrollMagic.Scene({triggerElement: "#parallax6"})
					.setTween("#parallax6 > div", {y: "80%", ease: Linear.easeNone})
					.addIndicators()
					.addTo(controller);														
}
















	// init controller
// 	var controller = new ScrollMagic.Controller();

// 	// create a scene
// 	var pin = new ScrollMagic.Scene({
// 	        duration: 2000,    // the scene should last for a scroll distance of 100px
// 	        offset: 2000        // start this scene after scrolling for 50px
// 	    })
// 	    .setPin("#section-2") // pins the element for the the scene's 
// 	    //.addIndicators()
// 	    .addTo(controller); // assign the scene to the controller


// 	var element = new ScrollMagic.Scene({
// 			triggerElement: "#element-1", duration: 2000
// 	    })
// 		.setTween("#element-1", 0.5, {marginTop: "100px"}) // trigger a TweenMax.to tween
// 	    .addTo(controller); // assign the scene to the controller
// };

	// var dropdown = new ScrollMagic.Scene({
	// 		triggerElement: "#element-3", duration: 2000
	//     })
	// 	.setTween("#element-3", 1, {marginTop: "500px", opacity: 1}) // trigger a TweenMax.to tween
	//     .addTo(controller) // assign the scene to the controller
	//     .addIndicators()

	// 	var controller = new ScrollMagic.Controller({
	// 		globalSceneOptions: {
	// 			triggerHook: 'onLeave'
	// 		}			
	// 	});
	// 	// get all slides
	// 	var slides = document.querySelectorAll("section.section");
	// 	// var slidesID = document.getElementById("section#section-2");
	// 	// //console.log(slidesID)

	// 	// create scene for every slide
	// 	for (var i=0; i<slides.length; i++) {
	// 		var wipes = new ScrollMagic.Scene({

	// 				triggerElement: slides[i],
	// 			})
	// 			.setPin(slides[i])
	// 			.addIndicators() // add indicators (requires plugin)
	// 			.addTo(controller);
	// 	}
