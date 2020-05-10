$('.item-menu').hover(function () {
  var x = $(this);
  $('.menu__line').stop().animate({
    'height': x.height(),
    'top': x.position().top
  }, 300);
});

//tabs menu
$('.buttonSwitch').on('click', function () {
	var local_id = $(this).attr('data-tab');
	if (!$(this).hasClass('active')) {
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
	};

	if (!$('#' + local_id).hasClass('active')) {
		$('#' + local_id).siblings().removeClass('active');
		$('#' + local_id).addClass('active');
	}
});

//Carousel
var time = 15; // time in seconds

var $progressBar,
  $bar,
  $elem,
  isPause,
  tick,
  percentTime;

// Init the carousel
$('#carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  items: 1,
  dots: true,
  dotsContainer: ".owl-dots",
  pagination : true,
  onInitialized: progressBar,
  onTranslated: moved,
  onDrag: pauseOnDragging
});

// Init progressBar where elem is $("#carousel")
function progressBar() {
  // build progress bar elements
  buildProgressBar();

  // start counting
  start();
}

// create div#progressBar and div#bar then prepend to $("#carousel")
function buildProgressBar() {
  $progressBar = $("<div>", {
    id: "progressBar"
  });

  $bar = $("<div>", {
    id: "bar"
  });

  $progressBar.append($bar).prependTo($("#carousel"));
}

function start() {
  // reset timer
  percentTime = 0;
  isPause = false;

  // run interval every 0.01 second
  tick = setInterval(interval, 10);
};

function interval() {
  if (isPause === false) {
    percentTime += 1 / time;

    $bar.css({
      width: percentTime + "%"
    });

    // if percentTime is equal or greater than 100
    if (percentTime >= 100) {
      // slide to next item 
      $("#carousel").trigger("next.owl.carousel");
      percentTime = 0; // give the carousel at least the animation time ;)
    }
  }
}

// pause while dragging 
function pauseOnDragging() {
  isPause = true;
}

// moved callback
function moved() {
  // clear interval
  clearTimeout(tick);

  // start again
  start();
}

var owl = $('.owl-carousel');
owl.owlCarousel();
// Go to the next item
$('.owl-next').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.owl-prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})

