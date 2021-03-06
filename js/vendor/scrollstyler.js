/**
 * ========================================================================
 * 
 * ScrollPos-Styler v0.7.0
 * https://github.com/acch/scrollpos-styler
 * 
 * Copyright (c) 2015 Achim Christ
 * Licensed under MIT (https://github.com/acch/scrollpos-styler/blob/master/LICENSE)
 * 
 * ======================================================================== */


var ScrollPosStyler = (function(document, window) {
  "use strict";
  /* --------------------
   * Private variables
   * -------------------- */
  var scrollPosY = 0,
      busy = false,
      // toggle class when scrolling below this position (in px)
      scrollOffsetY = 111,
      // class used to apply scrollPosStyler to
      spsClass = "scrolling",
      // choose elements to apply class to
      elements = document.getElementsByClassName(spsClass),
      // class to apply to elements when above scroll position
      classAbove = "scrolling--above",
      // class to apply to elements when below scroll position
      classBelow = "scrolling--below",
      // tag to set custom scroll offset per element
      offsetTag = "data-scrolling-offset";

  /* --------------------
   * Private function to check scroll position
   * -------------------- */
  function onScroll() {
    // ensure that events don't stack
    if (!busy) {
      // find elements to update
      var elementsToUpdate = getElementsToUpdate();

      if (elementsToUpdate.length > 0) {
        // suspend accepting scroll events
        busy = true;
        // asynchronuously update elements
        window.requestAnimationFrame(function() {
          updateElements(elementsToUpdate);
        });
      }
    }
  }

  /* --------------------
   * Private function to find elements to update
   * -------------------- */
  function getElementsToUpdate() {
    // get current scroll position from window
    scrollPosY = window.pageYOffset;

    var elementsToUpdate = [];
    // iterate over elements
    // for (var elem of elements) {
    for (var i = 0; elements[i]; ++i) { // chrome workaround
      var element = elements[i];
      // get offset from element, default to global option
      var elScrollOffsetY = element.getAttribute(offsetTag) || scrollOffsetY;
      // check current state of element
      var elOnTop = element.classList.contains(classAbove);
      // if we were above, and are now below scroll position...
      if (elOnTop && scrollPosY > elScrollOffsetY) {
        // remember element
        elementsToUpdate.push({
          element: element,
          addClass: classBelow,
          removeClass: classAbove
        });
      // if we were below, and are now above scroll position...
      } else if (!elOnTop && scrollPosY <= elScrollOffsetY) {
        // remember element
        elementsToUpdate.push({
          element: element,
          addClass: classAbove,
          removeClass: classBelow
        });
      }
    }
    return elementsToUpdate;
  }

  /* --------------------
   * Private function to update elements
   * -------------------- */
  function updateElements(elementsToUpdate) {
    // iterate over elements
    // for (var elem of elements) {
    for (var i = 0; elementsToUpdate[i]; ++i) { // chrome workaround
      var map = elementsToUpdate[i];
      // add style / class to element
      map.element.classList.add(map.addClass);
      map.element.classList.remove(map.removeClass);
    }
    // resume accepting scroll events
    busy = false;
  }

  /* --------------------
   * Public function to initially style elements based on scroll position.
   * Options:
   *    scrollOffsetY (number): Default scroll position in px to trigger the style. Default is 1.
   *    spsClass (String): Classname used to determine which elements to style. Default is 'scrolling'.
   *    classAbove (String): Classname added to the elements when the window is scrolled above the defined position. Default is 'scrolling--above'.
   *    classBelow (String): Classname added to the elements when the window is scrolled below the defined position. Default is 'scrolling--below'.
   *    offsetTag (String): HTML tag used on the element to specify a scrollOffsetY other than the default.
   * -------------------- */
  var pub = {
    init: function(options) {
      // suspend accepting scroll events
      busy = true;
      // merge options object with global options
      if (options) {
        if (options.spsClass) {
          spsClass = options.spsClass;
          elements = document.getElementsByClassName(spsClass);
        }
        scrollOffsetY = options.scrollOffsetY || scrollOffsetY;
        classAbove = options.classAbove || classAbove;
        classBelow = options.classBelow || classBelow;
        offsetTag = options.offsetTag || offsetTag;
      }
      // find elements to update
      var elementsToUpdate = getElementsToUpdate();

      if (elementsToUpdate.length > 0) {
        // asynchronuously update elements
        window.requestAnimationFrame(function() {
          updateElements(elementsToUpdate);
        });
      } else {
        // resume accepting scroll events
        busy = false;
      }
    }
  };

  /* --------------------
   * Main initialization.
   * -------------------- */
  // add initial style / class to elements when DOM is ready
  document.addEventListener("DOMContentLoaded", function() {
    // defer initialization to allow browser to restore scroll position
    window.setTimeout(pub.init, 1);
  });
  // register for window scroll events
  window.addEventListener("scroll", onScroll);

  return pub;
})(document, window);



// searchVisible = 0;
// transparent = true;
// hasTransparent = false;

// $(document).ready(function() {
//   if ($('nav[role="navigation"]').hasClass('navbar-transparent')) {
//     hasTransparent = true;
//   }
//   $('[data-toggle="search"]').click(function() {
//     if (searchVisible == 0) {
//       searchVisible = 1;
//       $(this).parent().addClass('active');
//       $(this).children('p').html('Close');
//       $('.navbar-search-form').fadeIn(function() {
//         $('.navbar-search-form input').focus();
//       });
//     } else {
//       searchVisible = 0;
//       $(this).parent().removeClass('active');
//       $(this).children('p').html('Search');
//       $(this).blur();
//       $('.navbar-search-form').fadeOut(function() {
//         $('.navbar-search-form input').blur();
//       });
//     } 
//   });
// });

// $(document).scroll(function() {
//   if (hasTransparent) {
//     if ($(this).scrollTop() > 260) {
//       if (transparent) {
//         transparent = false;
//         $('nav[role="navigation"]').removeClass('navbar-transparent');
//       }
//     } else {
//       if (!transparent) {
//         transparent = true;
//         $('nav[role="navigation"]').addClass('navbar-transparent');
//       }
//     }
//   }
// });
