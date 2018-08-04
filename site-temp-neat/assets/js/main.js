var APP = {
};

// // DOM ready
$(function(){
	APP.scrollmagic();
});

APP.scrollmagic = function() {
	// init controller
	var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

	// // build scene
	// var a = new ScrollMagic.Scene({
	// 		triggerElement: "#parallax4",
	// 		triggerHook: 0,
	// 		duration: "250%"					
	// 	})					
	// 	.setPin("#parallax4")
	// 	//.setTween(wipeAnimation)
	// 	.addIndicators() // add indicators (requires plugin)
	// 	.addTo(controller);


	// build scenes
	new ScrollMagic.Scene({triggerElement: "#parallax1"})
					.setTween("#parallax1 > .image", {y: "80%", ease: Linear.easeNone})
					.addIndicators()
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#parallax2"})
					.setTween("#parallax2 > .image", {y: "0%", ease: Linear.easeNone})
					.addIndicators()
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#parallax3"})
					.setTween("#parallax3 > .image", {y: "80%", ease: Linear.easeNone})
					.addIndicators()
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#parallax4"})
					.setTween("#parallax4 > .image", {y: "0%", ease: Linear.easeNone})
					.addIndicators()
					.addTo(controller);	

	new ScrollMagic.Scene({triggerElement: "#parallax5"})
					.setTween("#parallax5 > .image", {y: "80%", ease: Linear.easeNone})
					.addIndicators()
					.addTo(controller);	

	new ScrollMagic.Scene({triggerElement: "#parallax6"})
					.setTween("#parallax6 > .image", {y: "80%", ease: Linear.easeNone})
					.addIndicators()
					.addTo(controller);	



	new ScrollMagic.Scene({
			triggerElement: "#parallax2"
		})
		.setTween("#element-1", 0.5, {backgroundColor: "green", bottom: "100%"}) // trigger a TweenMax.to tween
		.addIndicators({name: "1 (duration: 5000)"}) // add indicators (requires plugin)
		.addTo(controller);		




	new ScrollMagic.Scene({
			triggerElement: "#parallax2", duration: 500
		})
		.setTween("#element-2", 1, { bottom: "50%", left: "15%"}) // trigger a TweenMax.to tween
		.addIndicators({name: "2 (duration: 0)"}) // add indicators (requires plugin)
		.addTo(controller);																				

	new ScrollMagic.Scene({
			triggerElement: "#parallax2", duration: 500
		})
		.setTween("#element-3", 0.5, { bottom: "50%", left: "50%"}) // trigger a TweenMax.to tween
		.addIndicators({name: "3 (duration: 0)"}) // add indicators (requires plugin)
		.addTo(controller);				

	new ScrollMagic.Scene({
			triggerElement: "#parallax2", duration: 500
		})
		.setTween("#element-4", 0.5, { bottom: "50%", left: "85%"}) // trigger a TweenMax.to tween
		.addIndicators({name: "4 (duration: 0)"}) // add indicators (requires plugin)
		.addTo(controller);		



	new ScrollMagic.Scene({
			triggerElement: "#parallax3"
		})
		.setTween("#element-5", 0.5, {backgroundColor: "green", bottom: "60%"}) // trigger a TweenMax.to tween
		.addIndicators({name: "5 (duration: 5000)"}) // add indicators (requires plugin)
		.addTo(controller);		

	new ScrollMagic.Scene({
			triggerElement: "#parallax3"
		})
		.setTween("#element-6", 0.5, {backgroundColor: "green"}) // trigger a TweenMax.to tween
		.addIndicators({name: "6 (duration: 5000)"}) // add indicators (requires plugin)
		.addTo(controller);		





	new ScrollMagic.Scene({
			triggerElement: "#parallax3",
			triggerHook: 0
		})
		.setTween("#element-7", 1, {backgroundColor: "orange", top: "30%"}) // trigger a TweenMax.to tween
		.addIndicators({name: "7 (duration: 1000)"}) // add indicators (requires plugin)
		.addTo(controller);				

}


