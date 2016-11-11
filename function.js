$(function () {
	$('.register').on('click', function () {
		if($('.input-login').hasClass('show')) {
			//Send it
			$('.i-login').removeClass('show');
			$('.i-register').addClass('show');
		} else {
			$('.input-login').addClass('show');
			$('.i-register').addClass('show');
			$('.i-login').removeClass('show');
		}
	});
	$('.login').on('click', function () {
		if($('.input-login').hasClass('show')) {
			//Send it
			$('.input-login').removeClass('show');
			$('.i-login').addClass('show');
			$('.i-register').removeClass('show');
		} else {
			$('.input').toggleClass('show');
			$('.i-register').removeClass('show');
			$('.i-login').addClass('show');
		}
	});
});