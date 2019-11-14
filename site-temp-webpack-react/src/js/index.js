import 'normalize.css';
import '../scss/styles.scss';

// Font awesome 5
import '@fortawesome/fontawesome-free/js/all'
// Jquery 
import $ from 'jquery';

var APP = {
};

// DOM ready
$(function(){
	APP.addNameHere();
});

APP.addNameHere = function() {
	console.log('Webpack and React testing!');
}