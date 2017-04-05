function getposts() {
	var token = '348944636.922990d.14b754c204514b78bb405dbdaf8801e5', // learn how to obtain it below
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
				console.log(data);

				// Output data
				$.each(data.data, function(index, item) {
					var location = data.data[index].location;
					//console.log(location);

					var items = '<li class="grid-item"><a href="' + data.data[index].link + '"><img src="'+data.data[index].images.low_resolution.url+'"></a><div class="content"><div class="avatar" style="background-image: url(' + data.data[index].user.profile_picture + ')"></div><p>' +'</p><p class="username">' + data.data[index].user.username + '</p><p><span>Location:</span> ' + data.data[index].images.low_resolution.height +'</p><p><span>Title:</span> ' + data.data[index].caption.text.substring(60,length) + ' ...</p></div></li>';
					$('.grid').append(items);					
				});
			},
			error: function(data){
				// Send the error notifications to console
				console.log(data);
			}
	}).then(function(){

		$('.grid').isotope({
		  	// Options
			itemSelector: '.grid-item',
			//percentPosition: true,
			layoutMode: 'masonry',

			masonry: {
				gutter: 8
			}
		});

	});
}

$(function() {
	getposts();
});
