
$(document).ready(function() {

	$('#items').on('keydown', function(e) {
		var item = $('input[id=items]').val();
		if (e.keyCode == 13) {
			$('.list').append('<div class="new">' +item+ '</div>');
			$(this).val('');
		}
	});

	$('#add').on('click', function() {
		var item = $('input[id=items]').val();
		$('.list').append('<div>' +item+ '</div>');
		$('#items').val('');
		$('#items').focus();
	});

	$('.list').on('click', '.new', function() {
		$(this).toggleClass('bought');
	});

	$('.list').on('dblclick', '.new', '.bought', function() {
			$(this).remove();
	});

});


/*

check off 
uncheck
remove items


*/
