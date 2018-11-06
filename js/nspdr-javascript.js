// basic javaScript functions ...

function displayHamburger() {
  var hamburger = document.getElementById('burgers');
  if (hamburger != null) {
    hamburger.classList.toggle('is-active');
	} else { return; }
}


(function($) {
  $(document).ready(function() {

		/* ----------------------------------------------------------- */
		/*  01. Display Countdown
		/* ----------------------------------------------------------- */
		var counter = $('#display-count');
		if (counter != null) {
      var calcDays = Math.round((new Date('2019-03-01') - new Date()) / (1000 * 3600 * 24));
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
		// $('.toggle-statements').hide();
		// $('.toggle-statements').show();
		$('#solution-statement,#problem-statement').click(function() {
			var $panel = $(this);
				$panel.children('h3').find('.fa').toggleClass('fa-rotate-180');
				$panel.children('div.toggle-statements').slideToggle('slow');
				$panel.children('h3').toggleClass('rounded');
			// if ($panel.children('h3').hasClass('border-danger')) {
			if ($panel.hasClass('stated')) {
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
		/*  09. Fake Preloader
		/* ----------------------------------------------------------- */
		var $preloader = $('#preloader');
		if ($preloader != null) {
			var $loader = $preloader.find('.loader');
			$loader.delay(1500).fadeOut();
			$preloader.delay(1500).fadeOut('slow');
		} else { return; }

		/* ----------------------------------------------------------- */
		/*  09. JavaScript
		/* ----------------------------------------------------------- */
		// var animateWayPoint = function() {
		// 	var i = 0;
		// 	$('.animate-box').waypoint(function(direction) {
		// 		if (direction === 'down' && !$(this.element).hasClass('animated')) {
		// 			i++;
		// 			$(this.element).addClass('item-animate');
		// 			setTimeout(function() {
		// 				$('body .animate-box.item-animate').each(function(k) {
		// 					var el = $(this);
		// 					setTimeout(function() {
		// 						var effect = el.data('animate-effect');
		// 						// if (effect === 'fadeIn') {
		// 						// 	el.addClass('fadeIn animated');
		// 						// } else if (effect === 'fadeInLeft') {
		// 						// 	el.addClass('fadeInLeft animated');
		// 						// } else if (effect === 'fadeInRight') {
		// 						// 	el.addClass('fadeInRight animated');
		// 						// } else {
		// 						// 	el.addClass('fadeInUp animated');
		// 						// }
		// 						el.addClass(effect + ' animated');
		// 						el.removeClass('item-animate');
		// 					}, k * 200, 'easeInOutExpo');
		// 				});
		// 			}, 100);
		// 		}
		// 	}, { offset: '85%' });
		// };
		// animateWayPoint();

	});
}(jQuery));


// var rellax = new Rellax('.rellax');
try {	var rellax = new Rellax('.rellax'); } catch(e){}

try {
	// new WOW().init();
	var wow = new WOW({
		offset: 20, 	 // distance to element when triggering  (default is 0)
		mobile: false, // trigger animations on mobile devices (default is true)
	});
	wow.init();	}
catch(e){}


try {
	(function() {
		var lineMaker = new LineMaker({
				parent: { element: '.nspdr-background', position: 'append' },
				// position: 'fixed',
				lines: [
					{ top: 0, left: '6.7%', width: 2, height: '100%', color: '#F44336', hidden: true, },
					{ top: 0, left: '14%', width: 3, height: '100%', color: '#8BC34A', hidden: true, },
					{ top: 0, left: '50%', width: 2, height: '100%', color: '#2196F3', hidden: true, },
					{ top: 0, left: '86%', width: 3, height: '100%', color: '#8BC34A', hidden: true, },
					{ top: 0, left: '93.3%', width: 2, height: '100%', color: '#F44336', hidden: true, },

					// {top: 0, left: '8.333333%', width: 1, height: '100%', color: '#7599E4', hidden: true, },
					// {top: 0, left: '16.666667%', width: 1, height: '100%', color: '#7599E4', hidden: true, },
					// {top: 0, left: '25%', width: 1, height: '100%', color: '#7599E4', hidden: true, },
					// {top: 0, left: '33.333333%', width: 1, height: '100%', color: '#7599E4', hidden: true, },
					// {top: 0, left: '41.666667%', width: 1, height: '100%', color: '#7599E4', hidden: true, },
					// {top: 0, left: '50%', width: 1, height: '100%', color: '#7599E4', hidden: true, },
					// {top: 0, left: '58.333333%', width: 1, height: '100%', color: '#7599E4', hidden: true, },
					// {top: 0, left: '66.666667%', width: 1, height: '100%', color: '#7599E4', hidden: true, },
					// {top: 0, left: '75%', width: 1, height: '100%', color: '#7599E4', hidden: true, },
					// {top: 0, left: '83.333333%', width: 1, height: '100%', color: '#7599E4', hidden: true, },
					// {top: 0, left: '91.666667%', width: 1, height: '100%', color: '#7599E4', hidden: true, },
				]
		});

		setTimeout(function() {
			lineMaker.animateLinesIn();
		}, 500);
		// setTimeout(function() {
		// 	disableButtons();
		// 	lineMaker.animateLinesIn(enableButtons);
		// }, 500);

		// // Shows all lines.
		// - lineMaker.showLines();
		// // hides all lines.
		// - lineMaker.hideLines();

		// var ctrls = [].slice.call(document.querySelectorAll('.actions > button'));
		// ctrls.forEach(function(ctrl) {
		// 	ctrl.setAttribute('disabled', true);
		// });
		// function enableButtons() {
		// 	ctrls.forEach(function(ctrl) {
		// 		ctrl.removeAttribute('disabled');
		// 	});
		// }
		// function disableButtons() {
		// 	ctrls.forEach(function(ctrl) {
		// 		ctrl.setAttribute('disabled', true);
		// 	});
		// }
		// document.querySelector('#hideAll').addEventListener('click', function() {
		// 	lineMaker.hideLines();
		// });
		// document.querySelector('#showAll').addEventListener('click', function() {
		// 	lineMaker.showLines();
		// });

	})(); }
catch(e){}
