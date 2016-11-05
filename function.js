$(function () {
	$('.register').on('click', function () {
		$('.input').toggleClass('show');
		$('.i-register').toggleClass('show');
		$('.i-login').toggleClass('show');
	});
	$('.login').on('click', function () {
		$('.input').toggleClass('show');
		$('.i-login').toggleClass('show');
	});
});