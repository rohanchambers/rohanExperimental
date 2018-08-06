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
			duration: "1250%"
			})
			.setTween("#parallax4 > .image", {y: "0%", ease: Linear.easeNone})
			.setPin('#parallax4')
			.addTo(controller);	

			// Barley 360 Pinned
			new ScrollMagic.Scene({
					triggerElement: "#parallax4",
					triggerHook: 0.25,
					duration: "150%"
				})
				//.setPin('#element-7')
				.setTween("#element-7", 1, { top: "35%"}) // trigger a TweenMax.to tween
				.addTo(controller);		

			new ScrollMagic.Scene({
					triggerElement: "#parallax4",
					triggerHook: 0.25,
					duration: "700%",
					offset: 1500
				})
				//.setPin('#element-7')
				.setTween("#element-7", 1, { rotation: 360, ease: Linear.easeNone}) // trigger a TweenMax.to tween
				.addTo(controller);		



			// Barley 360 content
			new ScrollMagic.Scene({
					triggerElement: "#parallax4",
					triggerHook: "onCenter",
					duration: "450%"
				})
				.setTween("#element-8", 1, { bottom: "100%"}) // trigger a TweenMax.to tween
				.addTo(controller);	

			new ScrollMagic.Scene({
					triggerElement: "#parallax4",
					triggerHook: "onEnter",
					duration: "450%",
					offset: 3500
				})
				.setTween("#element-9", 1, { bottom: "100%"}) // trigger a TweenMax.to tween
				.addTo(controller);		

			new ScrollMagic.Scene({
					triggerElement: "#parallax4",
					triggerHook: "onEnter",
					duration: "450%",
					offset: 6500
				})
				.setTween("#element-10", 1, { bottom: "100%"}) // trigger a TweenMax.to tween
				.addTo(controller);		


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
				.setTween("#parallax6 > .image", {y: "0%", ease: Linear.easeNone})
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


