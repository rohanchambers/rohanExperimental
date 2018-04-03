function getposts() {
	var token = '348944636.06437e2.471371f8232d413795b11b1bde13f353', // learn how to obtain it below
	// This token might run out of date in which case follow instructions to get new one at
	// https://jelled.com/instagram/access-token
	userid = 348944636; // User ID - get it in source HTML of your Instagram profile or look at the next example :)
	var nexturl = 'https://api.instagram.com/v1/users/' + userid + '/media/recent/?access_token=' + token;

	$.ajax({
		type: 'GET',
		url: nexturl,
		dataType: 'jsonp',
		jsonp: "callback",
		jsonpCallback: "jsonpcallback",
		cache: false,
		//data: {access_token: token},
			success: function(data) {
				//console.log(data);	

				// Output data
				$.each(data.data, function(index, item) {					
					// Todo can't seem to get json data name for the location of each post
					// var location = data.data[index].location.name;
					// console.log(location);

					// var a = JSON.parse(JSON.stringify(data.data[index].location.name));
					// console.log(a);

					var items = '<li class="grid-item"><a href="' + data.data[index].images.standard_resolution.url + '" data-lightbox="instagram" data-title="'+ data.data[index].caption.text +'"><img src="'+data.data[index].images.low_resolution.url+'"></a><div class="content"><div class="avatar" style="background-image: url(' + data.data[index].user.profile_picture + ')"></div><p>' +'</p><p class="username">' + data.data[index].user.username + '</p><p><span>Title:</span> ' + data.data[index].caption.text.substring(60,length) + ' ...</p></div></li>';
					
					$('.grid').append(items);
				});
			},
			error: function(data){
				// Send the error notifications to console
				console.log(data);
			}
	}).then(function(){

		var $grid = $('.grid').isotope({
		  	// Options
			itemSelector: '.grid-item',
			layoutMode: 'masonry',

			masonry: {
				gutter: 8
			}
		});

		$grid.imagesLoaded().progress( function() {
			$grid.isotope('layout');
		});

	});
}

$(function() {
	// Activate lightbox on the click of the images on the feed using the variable template items
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    });
    // Call function to get latest posts from instagram account of your choice.
    // Make sure you set up account with secret ID and other detail in your developer account
	getposts();

	// This was using the instafeed JS plugin. Currently now slightly outdated.
    // var feed = new Instafeed({
    //     get: 'user',
    //     tagName: 'home',
    //     userId: '348944636',
    //     clientId: '922990dc8014438bb3d2ccbb284ee474',
    //     accessToken: '348944636.922990d.14b754c204514b78bb405dbdaf8801e5'
    // });
    // feed.run();	
});