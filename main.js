$(function main() {
	let $h1 = $('#playground h1');
	let $button = $('#playground button');
	let counts = 0;

	$button.on('click', function() {
		$h1.html(++counts);
	});
});
