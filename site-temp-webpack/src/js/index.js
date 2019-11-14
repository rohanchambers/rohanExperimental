import 'normalize.css';
import '../scss/styles.scss';

// import img from '../img/example_parallax_bg1.png';

// Load external libraries | Look at webpack config file (resolve alias)
// Font awesome 5
import '@fortawesome/fontawesome-free/js/all'

import $ from 'jquery';


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