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
	},
	error: function (jqXHR, textStatus, errorThrown) {
		console.log('There was an error');
	}
});
