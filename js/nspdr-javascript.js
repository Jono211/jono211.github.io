// basic javaScript functions ...

function displayHamburger() {
  var hamburger = document.getElementById('burgers');
  if (hamburger != null) {
    hamburger.classList.toggle("is-active");
	} else { return; }
}


(function($) {
  $(document).ready(function() {

		/* ----------------------------------------------------------- */
		/*  01. Display Countdown
		/* ----------------------------------------------------------- */
		var counter = $('#display-count');
		if (counter != null) {
      var calcDays = Math.round((new Date('2018-11-05') - new Date()) / (1000 * 3600 * 24));
			counter.html(calcDays + ' days to go!');
		} else { return; }

		/* ----------------------------------------------------------- */
		/*  02. Bootstrap Accordion
		/* ----------------------------------------------------------- */
		$('#accordion .collapse').on('shown.bs.collapse', function() {
			$(this).prev().find('.fa').toggleClass('fa-rotate-180');
			$(this).find('.fa-sm').toggleClass('fa-rotate-180');
		});
		$('#accordion .collapse').on('hidden.bs.collapse', function() {
			$(this).prev().find('.fa').toggleClass('fa-rotate-180');
			$(this).find('.fa-sm').toggleClass('fa-rotate-180');
		});

		/* ----------------------------------------------------------- */
		/*  03. Scroll Top Button
		/* ----------------------------------------------------------- */
		$('#scroll-to-top').hide();
		$(window).scroll(function() {
			if ($(window).scrollTop() > 300) {
				$('#scroll-to-top').fadeIn();
			} else {
				$('#scroll-to-top').fadeOut();
			}
		});
		$('#scroll-to-top').click(function() {
			$('body,html').animate({
				scrollTop: 0
			}, 900);
		});

		/* ----------------------------------------------------------- */
		/*  04. Toggle Statements
		/* ----------------------------------------------------------- */
		$('.toggle-statements').hide();
			$('#solution-statement,#problem-statement').click(function() {
			var $panel = $(this);
				$panel.children('h3').find('.fa').toggleClass('fa-rotate-180');
				$panel.children('div.toggle-statements').slideToggle('slow');
				$panel.children('h3').toggleClass('rounded');
			if ($panel.children('h3').hasClass('border-danger')) {
				$panel.toggleClass('border-danger');
			} else {
				$panel.toggleClass('border-success');
			}
		});

		/* ----------------------------------------------------------- */
		/*  05. Toggle Debugger
		/* ----------------------------------------------------------- */
		$('#debug-grid').click(function() {
			if ($('body,html').hasClass('debugger')) {
				$('body,html').removeClass('debugger');
			} else {
				$('body,html').addClass('debugger');
			}
			$('#point-breaks').toggleClass('d-none');
		});

		/* ----------------------------------------------------------- */
		/*  06. Scroll To (on-page links)
		/* ----------------------------------------------------------- */
		$('a[href*="#"]')
		.not('[href="#"]')
		.not('[href="#0"]')
		.not('[href*="#nav"]')
		.click(function(event) {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					event.preventDefault();
					$('html,body').animate({
						scrollTop: target.offset().top
					}, 1000, function() {
						var $target = $(target);
						$target.focus();
						if ($target.is(':focus')) {
							return false;
						} else {
							$target.attr('tabindex','-1');
							$target.focus();
						}
					});
				}
			}
		});

		/* ----------------------------------------------------------- */
		/*  07. Scroll Contextually
		/* ----------------------------------------------------------- */
		$('#scrollContext').click(function() {
			var scrolled = Math.floor($(window).scrollTop() /
															 ($(document).height() - $(window).height()) * 100);
				if (scrolled > 67) {
					$('html,body').animate({scrollTop: 0}, 1000);
				} else {
					$('html,body').animate({scrollTop: $('body').height()}, 1000);
				}
			return false;
		});

		/* ----------------------------------------------------------- */
		/*  08. Breakpoints Alert
		/* ----------------------------------------------------------- */
		$('#point-breaks').click(function() {
			var win = $(window);
			var doc = $(document);
			alert(
				'WINDOW: ' + '\n' +
				' width: ' + '\u00A0' + win.width() + '\n' +
				' height: ' + '\u00A0' + win.height() + '\n' + '\n' +
				' innerWidth: ' + '\u00A0' + win.innerWidth() + '\n' +
				' innerHeight: ' + '\u00A0' + win.innerHeight() + '\n' + '\n' +
				' outerWidth: ' + '\u00A0' + win.outerWidth() + '\n' +
				' outerHeight: ' + '\u00A0' + win.outerHeight() + '\n' + '\n' + '\n' +
				'PAGE: ' + '\u000A' +
				' width: ' + '\u00A0' + doc.width() + '\n' +
				' height: ' + '\u00A0' + doc.height() + '\n' + '\n' +
				' innerWidth: ' + '\u00A0' + doc.innerWidth() + '\n' +
				' innerHeight: ' + '\u00A0' + doc.innerHeight() + '\n' + '\n' +
				' outerWidth: ' + '\u00A0' + doc.outerWidth() + '\n' +
				' outerHeight: ' + '\u00A0' + doc.outerHeight()
			);
		});

		/* ----------------------------------------------------------- */
		/*  09. JavaScript
		/* ----------------------------------------------------------- */

	});
}(jQuery));


// var rellax = new Rellax('.rellax');
try {	var rellax = new Rellax('.rellax'); }
catch (e) {}
