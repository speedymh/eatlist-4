$(function () {
	$('.register').on('click', function () {
		$('.input').toggleClass('show');
		$('.i-register').addClass('show');
		$('.i-login').removeClass('show');
	});
	$('.login').on('click', function () {
		$('.input').toggleClass('show');
		$('.i-login').addClass('show');
		$('.i-register').removeClass('show');
	});
});