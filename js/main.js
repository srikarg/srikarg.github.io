$(function() {
	var json = [];
	var field = $('.search-field');
	var icon = $('.icon-search');
	var results = $('.search-results ul');

	$.getJSON('/search.json', function(data) {
		json = data;
	});

	field.on('input', function() {
		if (field.val() !== '')
			search(field.val().toLowerCase());
		else
			results.empty();
	});

	icon.on('click', function() {
		field.animate({width: 'toggle'});
		field.focus();
	});

	field.on('blur mouseleave', function() {
		if (field.val() === '')
			field.animate({width: 'toggle'});
	});

	$('.smoothScroll').on('click', function(e) {
		e.preventDefault();
		var target = this.hash, $target = $(target);
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 900, 'swing', function() {
			window.location.hash = target;
		});
	});

	function search(text) {
		var found = false;
		results.empty();
		$.each(json, function(i, v) {
			if (v.title.toLowerCase().search(text) !== -1) {
				results.append('<li><a href="' + v.url + '">' + v.title + '</a></li>');
				found = true;
			}
		});
		if (!found)
			results.append('<li><p>Sorry, but what you were looking for was not found!</p></li>');
	}
});