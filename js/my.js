function listShows(result) {

	for (i = 0; i < result.upcomingShows; i += 1) {
		console.log(result.upcomingShows[i]);
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
