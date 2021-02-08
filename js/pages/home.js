/******* Start Header Carousals ********/
$(".header_fill_carousal").owlCarousel({
  items: 1,
  dots: false,
  autoplay: true,
  nav: true,
  // animateOut: "fadeOut",
  autoplayHoverPause: true,
  loop: true,
  autoplayTimeout: 5000,
});
$(".header_slices_carousal").owlCarousel({
  items: 4,
  dots: false,
  autoplay: true,
  loop: true,
  autoplayTimeout: 5000,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 2,
      nav: true,
    },
    768: {
      items: 3,
      nav: false,
    },
    1000: {
      items: 4,
      nav: true,
    },
  },
});
$(".header_fill_carousal").hover(function () {
  console.log("hoverd");
});
/******* End Header Carousals ********/

// Carousal hover
$(".header_slices_carousal .owl-item > div").hover(function () {
  $(".header_fill_carousal .owl-nav .owl-prev").click();
});

// Adjust main Header_height
const main_header = document.querySelector("header.header");
const nav = document.querySelector("nav.nav");
const nav_height_value = nav.clientHeight;
const window_height = window.innerHeight;
main_header.style.height = window_height - nav_height_value + "px";

// Video Popup
$("#videoPopup").magnificPopup({
  type: "iframe",
});

document.getElementById("more").onclick = function () {
  document.getElementById("videoPopup").click();
};

$(window).scroll(function () {
  var scrollTop = $(window).scrollTop(),
    sectionOffset = $("#numbers").offset().top - 600;
  if (scrollTop >= sectionOffset) {
    $(".counter_up").countTo({
      speed: 7000,
      refreshInterval: 50,
      formatter: function (value, options) {
        return value
          .toFixed(options.decimals)
          .toString()
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
      },
    });
    $(".clients_number .grid_item .counter_up").removeClass("counter_up");
  }
});
