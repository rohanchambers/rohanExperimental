import '../scss/styles.scss';

// Load in jquery
let $ = require('jquery');
import TweenMax from 'TweenMax';
import TimelineMax from 'TimelineMax';
import ScrollMagic from 'ScrollMagic';
import 'animation.gsap';

import { writeToScreen} from './text'
writeToScreen();

import { people } from './text.js'

$.each(people, function(key, value){
	$('body').append('<h1>'+people[key].name+'</h1>');	
});