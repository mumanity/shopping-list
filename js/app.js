
$(document).ready(function() {

	$('#items').on('keydown', function(e) {
		var item = $('input[id=items]').val();
		if (e.keyCode == 13) {
			$('.list').find('ul').append('<li>' +item+ '</li>');
			$(this).val('');
		}
	});

	$('#add').on('click', function() {
		var item = $('input[id=items]').val();
		$('.list').find('ul').append('<li>' +item+ '</li>');
		$(this).val('');
	})

});


/*

check off 
uncheck
remove items


*/