var APP = {
};

// // DOM ready
$(function(){
	APP.scrollmagic();
});

APP.scrollmagic = function() {
	// Init controller
	var controller = new ScrollMagic.Controller();

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
				duration: "200%"})
					.setTween("#parallax2 > .image", {y: "0%", ease: Linear.easeNone})
					.addIndicators()
					.addTo(controller);

	new ScrollMagic.Scene({
				triggerElement: "#parallax3", 
				triggerHook: "onEnter",
				duration: "200%"})
					.setTween("#parallax3 > .image", {y: "80%", ease: Linear.easeNone})
					.addIndicators()
					.addTo(controller);

	new ScrollMagic.Scene({
			triggerElement: "#parallax4", 
			triggerHook: 0,
			duration: "500%"
			})
			.setTween("#parallax4 > .image", {y: "0%", ease: Linear.easeNone})
			.setPin('#parallax4')
			.addTo(controller);	

			new ScrollMagic.Scene({
					triggerElement: "#parallax4",
					triggerHook: 0.25,
					duration: "200%"
				})
				.setPin('#element-7')
				.setTween("#element-7", 1, { top: "35%"}) // trigger a TweenMax.to tween
				.addTo(controller);						

			// new ScrollMagic.Scene({
			// 		triggerElement: "#parallax4",
			// 		offset: "200"
			// 	})			
			// 	//.setPin('#element-7')
			// 	.addTo(controller);						







	new ScrollMagic.Scene({
				triggerElement: "#parallax5", 
				triggerHook: "onEnter",
				duration: "200%"})
					.setTween("#parallax5 > .image", {y: "80%", ease: Linear.easeNone})
					.addIndicators()
					.addTo(controller);	

	new ScrollMagic.Scene({
				triggerElement: "#parallax6", 
				triggerHook: "onEnter",
				duration: "200%"})
					.setTween("#parallax6 > .image", {y: "80%", ease: Linear.easeNone})
					.addIndicators()
					.addTo(controller);	


// Elements
	new ScrollMagic.Scene({
			triggerElement: "#parallax2",
			triggerHook: "onEnter",
			duration: "200%"
		})
			.setTween("#element-1", 0.25, {backgroundColor: "green", bottom: "100%"}) // trigger a TweenMax.to tween
			.addIndicators()
			.addTo(controller);		




	new ScrollMagic.Scene({
		triggerElement: "#parallax2", 
		triggerHook: 1,
		duration: "200%"})
			.setTween("#element-2", 0.5, { bottom: "35%", left: "15%", transform: "rotate(-10deg)"}) // trigger a TweenMax.to tween
			.addTo(controller);																				

	new ScrollMagic.Scene({
		triggerElement: "#parallax2", 
		triggerHook: 1,
		duration: "200%"})
			.setTween("#element-3", 0.5, { bottom: "40%", left: "50%"}) // trigger a TweenMax.to tween
			.addTo(controller);				

	new ScrollMagic.Scene({
		triggerElement: "#parallax2", 
		triggerHook: 1,
		duration: "200%"})	
			.setTween("#element-4", 0.5, { bottom: "35%", left: "60%", transform: "rotate(5deg)"}) // trigger a TweenMax.to tween
			.addTo(controller);		



	new ScrollMagic.Scene({
			triggerElement: "#parallax3",
			duration: "200%"
		})
		.setTween("#element-5", 0.5, {backgroundColor: "green", bottom: "60%"}) // trigger a TweenMax.to tween
		.addTo(controller);		

	new ScrollMagic.Scene({
			triggerElement: "#parallax3",
			duration: "200%"
		})
		.setTween("#element-6", 0.5, {backgroundColor: "green"}) // trigger a TweenMax.to tween
		.addTo(controller);		

		

}


