import '../scss/styles.scss';

// extracts our CSS out of the JavaScript bundle into a separate file
//const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// Load in jquery
let $ = require('jquery');

import { writeToScreen} from './text'
writeToScreen();

import { people } from './text.js'

$.each(people, function(key, value){
	$('body').append('<h1>'+people[key].name+'</h1>');	
});

//console.log(people[1].name);