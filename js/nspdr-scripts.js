// basic javaScript functions ...

/*
var prevScrollPos = window.pageYOffset;
window.onscroll = function() { scrollingFunction(); };
function scrollingFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById('scrollProgressBar').style.width = scrolled + '%';
}

//  When user scrolls - execute scrollingFunction
window.onscroll = function () { scrollingFunction(); };
function scrollingFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById('scrollProgressBar').style.width = scrolled + '%';
}


var prevScrollPos = window.pageYOffset;
function hideOnScroll() {
  var navbar = document.getElementById('navigate');
  var currentScrollPos = window.pageYOffset;
  if(prevScrollPos > currentScrollPos) {
    navbar.style.top = '.2rem';
  } else {
    navbar.style.top = '-42px';
  }
  prevScrollPos = currentScrollPos;
  if(currentScrollPos > 555) {
    navbar.classList.add('filled');
  } else {
    navbar.classList.remove('filled');
  }
}
window.addEventListener('scroll', hideOnScroll);
*/


// var rellax = new Rellax('.rellax');


function displayHamburger() {
  var hamburger = document.getElementById('burgers');
  // var hamburger = document.querySelectorAll(".hamburger--spin");
  if (hamburger != null) {
    hamburger.classList.toggle("is-active");
  }
}


jQuery('#drdlr-flag,#drdlr-bloc,#point-breaks').click(function() {
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


$('#toggle-debugger').click(function() {
  if ($('body,html').hasClass('debugger')) {
    $('body,html').removeClass('debugger');
  } else {
    $('body,html').addClass('debugger');
  }
  // $('body,html').toggleClass('debugger');
  $('#point-breaks').toggleClass('d-none');
});


// $(document).ready(function() {
// 	$('#flip').click(function() {
// 		$('#panel').slideToggle('slow');
// 	});
// });

$(document).ready(function() {
  $('.toggle-statements').hide();
    $('#solution-statement,#problem-statement').click(function() {
      // $('.stated').toggleClass('fa-rotate-180');
    var $panel = $(this);
      $panel.children('h3').find('.fa').toggleClass('fa-rotate-180');
      $panel.children('div.toggle-statements').slideToggle('slow');
      $panel.children('h3').toggleClass('rounded');
    // if ($panel.children('h3').text() == 'Problem Statement') {
    if ($panel.children('h3').hasClass('border-danger')) {
      // $panel.children('h3 > i').toggleClass('fa-angle-down');
      $panel.toggleClass('border-danger');
    } else {
      $panel.toggleClass('border-success');
    }
  });
});

// $(document).ready(function() {
// 	$('.toggle-blogpost').hide();
// 		$('a.blogpost').click(function(event) {
// 			event.preventDefault();
//       $(this).find('div.card').toggleClass('h-md-250');
//       $(this).find('div.card').css('height', 500);
// 			$('.toggle-blogpost').slideToggle('slow');
		// var $link = $(this);
		// if ($link.text() == 'Continue reading') {
		// 	$link.text('Close panel');
		// } else {
		// 	$link.text('Continue reading');
		// }
// 	});
// });


$('#backToTop,#scrollToTop').click(function() {
  $('body,html').animate({
    scrollTop: 0
  }, 900);
});

// $('#scroll-to-top').click(function() {
//   $('body,html').animate({
//     scrollTop: 0
//   }, 900);
// });

// $(window).scroll(function() {
//   // var scrollPos = $(document).height() - $(window).height() - 111;
//   // if ($(window).scrollTop() > 222 && $(window).scrollTop() < scrollPos) {
//   if ($(window).scrollTop() > 222) {
//     $('#scroll-to-top').addClass('visible');
//   } else {
//     $('#scroll-to-top').removeClass('visible');
//   }
// });
// Check to see if the window is top if not then display button
$(document).ready(function() {
	$('#scroll-to-top').hide();
  $(window).scroll(function() {
  	if ($(window).scrollTop() > 300) {
  		$('#scroll-to-top').fadeIn();
  	} else {
  		$('#scroll-to-top').fadeOut();
  	}
  });
});


$(document).ready(function() {
  // select all links with hashes
  $('a[href*="#"]')
  // remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .not('[href*="#nav"]')
  .click(function(event) {
    // on-page links
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      // figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // does a scroll target exist?
      if (target.length) {
        // only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // callback after animation
          // must change focus!
          var $target = $(target);
          $target.focus();
          // checking if the target was focused
          if ($target.is(':focus')) {
            return false;
          } else {
            // adding tabindex for elements not focusable
            $target.attr('tabindex','-1');
            // set focus again
            $target.focus();
          }
        });
      }
      // // add hash (#) to URL when done scrolling (default click behavior)
      // window.location.hash = hash;
    }
  });
});


$(document).ready(function() {
	var speed = 5;
	var items, scroller = $('.scroller');
	var width = 0;
	  scroller.children().each(function() {
		width += $(this).outerWidth(true);
	});
	scroller.css('width', width);
	scroll();
	function scroll() {
		items = scroller.children();
		var scrollWidth = items.eq(0).outerWidth();
		scroller.animate({'left' : 0 - scrollWidth}, scrollWidth * 100 / speed, 'linear', changeFirst);
	}
	function changeFirst() {
		scroller.append(items.eq(0).remove()).css('left', 0);
		scroll();
	}
});


// function toggleStatements() {
//   document.getElementById('toggle-one').classList.toggle('d-none');
//   document.getElementById('toggle-two').classList.toggle('d-none');
//   document.getElementById('toggle-btn').classList.toggle('btn-outline-danger');
//   var txt = document.getElementById('toggle-txt');
//   if (txt.innerHTML === 'Problem') {
//     txt.innerHTML = 'Solution';
//   } else {
//     txt.innerHTML = 'Problem';
//   }
//   document.getElementById('toggle-nxt').classList.toggle('d-none');
//   document.getElementById('toggle-bck').classList.toggle('d-none');
// }


function displayCount() {
var target = document.getElementById('display-count');
  if (target != null) {
    var calcDate = new Date('Nov 5, 2018 08:00:00').getTime();
    var now = new Date().getTime();
    var dist = calcDate - now;
    var days = Math.floor(dist / (1000 * 60 * 60 * 24));
      // document.getElementById('display-count').innerHTML = days + ' days left!';
      target.innerHTML = days + ' days left!';
    if (dist < 0) { target.innerHTML = 'IT’S HERE!'; }
  } else { return; }
}
// window.onload = displayCount;


$(document).ready(function() {
  // var doCalc = false;
	var counter = $('#displaycount');
  if (counter != null) {
    // doCalc = true;
    var goLive = new Date('Nov 5, 2018 08:00:00').getTime();
    // var countdowndisplay = setInterval(function() {
    // setInterval(function() {
      // if (doCalc) {
        // displayTime();
        var today = new Date().getTime();
        var diff = goLive - today;
        var days = Math.floor(diff / (1000 * 60 * 60 * 24));
        // var hrs = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        // var hrs = Math.floor((diff % (1000 * 60 * 60 * 24)) / (60 * 24 * 365));
        // var hrs = Math.floor(diff / (1000 * 60 * 60 * 24)) * 24;
        //     hrs = hrs + Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            // hrs = (hrs < 10 ? "0" : "") + hrs;
        // var min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        //     min = (min < 10 ? "0" : "") + min;
        counter.html(days + ' days left!');
        // counter.html(days + ' days to go!');
        // counter.html(hrs + ':00 to go!');
        // counter.html(hrs + ':' + min + ' to go!');
        if (diff < 0) { counter.html('IT’S HERE!'); }
      // }
    // }, 60000);
    // displayTime();
    // });
  } else { return; }
});


(function($) {
	const diffBetweenDates =
		(dateToday, dateFinal) =>
		(dateFinal - dateToday) /
		(1000 * 3600 * 24);
  $(document).ready(function() {
		var counter = $('#display-count');
		if (counter != null) {
			var calcDays = Math.round(diffBetweenDates(new Date(), new Date('2018-11-05')));
			counter.html(calcDays + ' days left!');
		} else { return; }
	});
})(jQuery);


// $(document).ready(function() {
	// $(window).stellar();
// });

// $(document).ready(function() {
//   var timer = 0;
//   $(window).scroll(function() {
//     if (!timer) {
//       timer = setTimeout(function() {
//         checkScrollPosition();
//         timer = 0;
//       }, 250);
//     }
//   }).trigger('scroll');
// });

// (function($) {
//   function checkScrollPosition() {
//     var distance = $(window).scrollTop() + $(window).height();
//     if ($('#container').height() <= distance) {
//       $(document).trigger('nextPage');
//     }
//   }
//   $(document).ready(function() {
//     $(window).scroll(checkScrollPosition).trigger('scroll');
//   });
// })(jQuery);

// $(document).ready(function() {
//   var scrolled = false;
//   $(window).scroll(function() {
//     scrolled = true;
//   });
//   setInterval(function() {
//     if (scrolled) {
//       checkScrollPosition();
//       scrolled = false;
//     }
//   }, 250);
//   checkScrollPosition();
// });


// jQuery(function($) {
(function($) {
	/* ----------------------------------------------------------- */
	/*  01. Hover Dropdown Menu
	/* ----------------------------------------------------------- */
	// for hover dropdown menu
  // if ($(!'#navigator').hasClass('show')) {
      // return;
  // winWidth = $(window).width();
  // Activate parallax
  // $(window).resize(function() {
  // $(window).on('resize orientationchange', event);
  //   if ($(window).width() >= 768) {
		// } else {
      // $('ul.navbar-nav li.dropdown').hover(function() {
      //   $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(200);
      //   // $(this).find('.dropdown-menu').addClass('show');
      // }, function() {
      //   $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(200);
      //   // $(this).find('.dropdown-menu').removeClass('show');
      // });
//       return;
// 	};
// };

	/* ----------------------------------------------------------- */
	/*  02. Bootstrap Accordion
	/* ----------------------------------------------------------- */
	// $('#accordion .collapse').on('bs.collapse', function() {
	$('#accordion .collapse').on('shown.bs.collapse', function() {
    // $(this).prev().find('.fa').removeClass('fa-plus').addClass('fa-minus');
    $(this).prev().find('.fa').toggleClass('fa-rotate-180');
    // $(this).prev().find('i').css({
    //   '-webkit-transform': 'rotate(180deg)',
    //   '-moz-transform': 'rotate(180deg)',
    //   '-ms-transform': 'rotate(180deg)',
    //   '-o-transform': 'rotate(180deg)',
    //   'transform': 'rotate(180deg)'
    // });
	});
	// The reverse of the above on hidden event:
	$('#accordion .collapse').on('hidden.bs.collapse', function() {
		// $(this).prev().find('.fa').removeClass('fa-minus').addClass('fa-plus');
    $(this).prev().find('.fa').toggleClass('fa-rotate-180');
  //   $(this).prev().find('i').css({
  //     '-webkit-transform': 'rotate(-90deg)',
  //     '-moz-transform': 'rotate(-90deg)',
  //     '-ms-transform': 'rotate(-90deg)',
  //     '-o-transform': 'rotate(-90deg)',
  //     'transform': 'rotate(-90deg)'
  //   });
	});


	/* ----------------------------------------------------------- */
	/*  03. Scroll Top Button
	/* ----------------------------------------------------------- */
	// Check to see if the window is top if not then display button
	// $(window).scroll(function() {
	// 	if ($(this).scrollTop() > 300) {
	// 		$('.scrollToTop').fadeIn();
	// 	} else {
	// 		$('.scrollToTop').fadeOut();
	// 	}
	// });
	// // Click event to scroll to top
	// $('.scrollToTop').click(function() {
	// 	$('html, body').animate({scrollTop : 0},800);
	// 	return false;
	// });

	/* ----------------------------------------------------------- */
	/*  04. Preloader
	/* ----------------------------------------------------------- */
	// makes sure the whole site is loaded
	// jQuery(window).load(function() {
	// 	// will first fade out the loading animation
	// 	$('#status').fadeOut();
	// 	// will fade out the white DIV that covers the website
	// 	$('#preloader').delay(100).fadeOut('slow');
	// 	$('body').delay(100).css({'overflow':'visible'});
	// })
// });


// (function($) {
//   // $(window).on('resize','orientationchange', function() {
// 	$(window).resize(function() {
// 		// winWidth = $(window).width();
// 		// if (winWidth >= 768) {
// 		if ($(window).width() >= 768) {
// 			$('ul.navbar-nav li.dropdown').hover(function() {
// 				$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(200);
// 			}, function() {
// 				$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(200);
// 			});
// 		};
// 	});
}(jQuery));


// $(document).ready(function() {
// // $(window).load(function() {
//   // var target = document.querySelectorAll('.rellax');
//   var target = document.getElementsByClassName('.rellax');
//   if (target != null) {
//   // if ($('body').hasClass('rellax')) {
//     var rellax = new Rellax('.rellax');
//   // } else {
//   //   return;
//   // }
//   } else { return; }
// });

var rellax = new Rellax('.rellax');
