require('../css/style.css');

// Load in jquery
let $ = require('jquery');

import { writeToScreen} from './text'
writeToScreen();
import { people } from './text.js'

$.each(people, function(key, value){
	$('body').append('<h1>'+people[key].name+'</h1>');	
});

//console.log(people[1].name);