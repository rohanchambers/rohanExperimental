$(document).ready( function(){
    
	// Preload and parse Mustache templates for faster rendering
	template = $("#template").html();
    Mustache.parse(template);

	var rendered = Mustache.render(template);
	$('.row-2 .box').html(rendered);    

    // CSS3 Rotation add/remove flip class
    $('.hover').hover(function(){
        $(this).addClass('flip');
    },function(){
        $(this).removeClass('flip');
    });	
	
});