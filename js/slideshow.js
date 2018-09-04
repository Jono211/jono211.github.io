(function(c,q){var m="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";c.fn.imagesLoaded=function(f){function n(){var b=c(j),a=c(h);d&&(h.length?d.reject(e,b,a):d.resolve(e));c.isFunction(f)&&f.call(g,e,b,a)}function p(b){k(b.target,"error"===b.type)}function k(b,a){b.src===m||-1!==c.inArray(b,l)||(l.push(b),a?h.push(b):j.push(b),c.data(b,"imagesLoaded",{isBroken:a,src:b.src}),r&&d.notifyWith(c(b),[a,e,c(j),c(h)]),e.length===l.length&&(setTimeout(n),e.unbind(".imagesLoaded",
p)))}var g=this,d=c.isFunction(c.Deferred)?c.Deferred():0,r=c.isFunction(d.notify),e=g.find("img").add(g.filter("img")),l=[],j=[],h=[];c.isPlainObject(f)&&c.each(f,function(b,a){if("callback"===b)f=a;else if(d)d[b](a)});e.length?e.bind("load.imagesLoaded error.imagesLoaded",p).each(function(b,a){var d=a.src,e=c.data(a,"imagesLoaded");if(e&&e.src===d)k(a,e.isBroken);else if(a.complete&&a.naturalWidth!==q)k(a,0===a.naturalWidth||0===a.naturalHeight);else if(a.readyState||a.complete)a.src=m,a.src=d}):
n();return d?d.promise(g):g}})(jQuery);

var bgSlideshow = (function() {
	var $slideshow = $('#bi-slideshow'),
		$items = $slideshow.children('li'),
		itemsCount = $items.length,
		current = 0,
		slideshowtime,
		isSlideshowActive = true,
		interval = 9000;
	function init() {
		$slideshow.imagesLoaded(function() {
			$items.each(function() {
				var $item = $(this);
				$item.css('background-image','url(' + $item.find('img').attr('src') + ')');
			});
			$items.eq(current).css('opacity', 1);
			startSlideshow();
		});
	}
	function navigate() {
		var $oldItem = $items.eq(current);
				current = current < itemsCount - 1 ? ++current : 0;
		var $newItem = $items.eq(current);
		$oldItem.css('opacity', 0);
		$newItem.css('opacity', 1);
	}
	function startSlideshow() {
		isSlideshowActive = true;
		clearTimeout(slideshowtime);
		slideshowtime = setTimeout(function() {
			navigate();
			startSlideshow();
		}, interval);
	}
	function stopSlideshow() {
		isSlideshowActive = false;
		clearTimeout(slideshowtime);
	}
	return { init : init };
})();
