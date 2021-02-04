$(".header_fill_carousal").owlCarousel({
  items: 1,
  dots: false,
  autoplay: true,
  slideTransition: "ease",
  loop: true,
  smartSpeed: 500,
  autoplayTimeout: 4000,
});
$(".header_slices_carousal").owlCarousel({
  items: 4,
  dots: false,
  autoplay: true,
  loop: true,
  autoplayTimeout: 4000,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 3,
      nav: false,
    },
    1000: {
      items: 4,
      nav: true,
      loop: false,
    },
  },
});

// Adjust main Header_height
const main_header = document.querySelector("header.header");
const nav = document.querySelector("nav.nav");
const nav_height_value = nav.clientHeight;
const window_height = window.innerHeight;
main_header.style.height = window_height - nav_height_value + "px";

$("nav .main_nav form span").click(function () {
  $(this).next().slideToggle();
  $(this).next().focus();
});

lang_switch("nav.nav .upper_nav .switch_lang .glope");
