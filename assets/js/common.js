$(document).ready(function() {
  // logo slider
  $(".logo_slider").slick({
    infinite: true,
    speed: 300,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    slidesToShow: 9,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  });


  // service_provide_slider
  $(".service_provide_slider").slick({
    infinite: true,
    speed: 300,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // client_part_slider
  $(".client_part_slider").slick({
    infinite: true,
    speed: 300,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    centerMode: true,
    centerPadding: '0px',
    cssEase: 'linear',
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  // client_part_slider
  $(".car_parking_slider").slick({
    infinite: true,
    speed: 300,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "60px",
        },
      },
    ],
  });



  // counter part
  $(".counter-count").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text()
        },
        {
          //if you want to change counter speed then change duration
          duration: 4000,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          }
        }
      );
  });
  

  // external js: isotope.pkgd.js


  var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});




  // isotop

  var customContainer = jQuery(".iso-container");
  customContainer.isotope({
    filter: "*",
    transitionDuration: "2s",
    animationOptions: {
      duration: 7500,
      queue: false
    },

    layoutMode: "fitRows",
    fitRows: {
      gutter: 0
    }
  });

  jQuery("#custom-filter li:first-child > a").addClass("is-checked");

  jQuery("#custom-filter a").click(function() {
    jQuery("#custom-filter .is-checked").removeClass("is-checked");
    jQuery(this).addClass("is-checked");

    var customSelector = jQuery(this).attr("data-filter");
    customContainer.isotope({
      filter: customSelector,
      transitionDuration: "2s",
      animationOptions: {
        duration: 7500,
        queue: false
      },
      layoutMode: "fitRows",
      fitRows: {
        gutter: 0
      }
    });
    return false;
  });

  // isotop

  // change is-checked class on buttons



  var rect = $("#hero")[0].getBoundingClientRect();
  var mouse = {
    x: 0,
    y: 0,
    moved: false,
  };

  $("#hero").mousemove(function(e) {
    mouse.moved = true;
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  // Ticker event will be called on every frame
  TweenLite.ticker.addEventListener("tick", function() {
    if (mouse.moved) {
      parallaxIt(" #hero img", -150);
    }
    mouse.moved = false;
  });

  function parallaxIt(target, movement) {
    TweenMax.to(target, 0.5, {
      x: ((mouse.x - rect.width / 2) / rect.width) * movement,
      y: ((mouse.y - rect.height / 2) / rect.height) * movement,
    });
  }

  $(window).on("resize scroll", function() {
    rect = $("#hero")[0].getBoundingClientRect();
  });
});