function listShows(result) {
	console.log(result.upcomingshows);
	var row, venue, date, eventId, city, state, time;
	var showsContainer = $('#dynamic-shows');

	for (i = result.upcomingshows.length-1; i >=0; i -= 1) {
		console.log(result.upcomingshows[i]);
		venue = result.upcomingshows[i].place.name;
		date = moment(result.upcomingshows[i].start_time).format('MM/DD');
		eventId = result.upcomingshows[i].id
		city = result.upcomingshows[i].place.location.city;
		state = result.upcomingshows[i].place.location.state;
		time = moment(result.upcomingshows[i].start_time).format('h:mma');
		row = '<div class="event row">' +
			'<div class="date col-md-2"><h3>' + date + '</h3></div>' +
			'<div class="venue col"><h3><span style="color:#FF620A">' + venue + '</span>, ' + time + '<br><a href="https://www.facebook.com/events/'+ eventId + '" target="_blank">event page</a></h3></div>' +
			'<div class="city col-md-3"><p>' + city + ', ' + state + '</p></div>' +
		'</div>';
		showsContainer.append(row);
	}

};

$(document).ready(function(){

	$.ajax({
		type: 'GET',
		url: 'https://eg-shows.herokuapp.com/',
		async: 'true',
		dataType: 'json',
		beforeSend: function () {
			// We should show an AJAX spinner here
		},
		complete: function () {
			// And then hide the AJAX spinner here
		},
		success: function (result) {
			console.log(result);
			if (result.success) {
				console.log(result.success);
				listShows(result);
			} else {
				console.log('Call success, backend error')
			}
		},
		error: function (jqXHR, textStatus, errorThrown) {
			console.log('Call failed', jqXHR, textStatus, errorThrown);
		}
	});

});
