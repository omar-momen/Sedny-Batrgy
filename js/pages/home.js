/******* Start Header Carousals ********/
$(".header_fill_carousal").slick({
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 1000,
  arrows: true,
  fade: true,
});

$(".header_slices_carousal").slick({
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 500,
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: ".header_fill_carousal",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
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
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

$(".header_slices_carousal .slick-slide").hover(function () {
  $(".header_fill_carousal .slick-next").click();
  $(this).addClass("slick-current").siblings().removeClass("slick-current");
});
/******* End Header Carousals ********/

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

let tabsElemens = document.querySelectorAll(".grid_items_container .grid_item");

tabsElemens.forEach((element) => {
  element.addEventListener("click", function () {
    tabsElemens.forEach((tabsElement) =>
      tabsElement.classList.remove("active")
    );
    this.classList.add("active");
  });
});

// Clients Slider
$(".clients_slider").slick({
  centerMode: false,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 4,
  adaptiveHeight: true,
  centerPadding: "60px",
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  pauseOnDotsHover: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: "40px",
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: "40px",
        slidesToShow: 2,
      },
    },
  ],
});

// Our Articles Slider
$(".articles_slider").slick({
  centerMode: false,
  dots: true,
  infinite: true,
  speed: 500,
  autoplaySpeed: 3000,
  slidesToShow: 3,
  slidesToScroll: 2,
  // adaptiveHeight: true,
  centerPadding: "60px",
  arrows: false,
  autoplay: true,
  pauseOnHover: true,
  pauseOnDotsHover: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: "40px",
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: "40px",
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: "40px",
        slidesToShow: 2,
      },
    },
  ],
});

let slideItems = document.querySelectorAll(".articles_slider .item");

slideItems.forEach((element) => {
  element.addEventListener("click", function () {
    slideItems.forEach((slideItem) =>
      slideItem.classList.remove("slick-current")
    );
    this.classList.add("slick-current");
  });
});

// Partners Cards Slider
var stackedCard = new stackedCards({
  selector: ".cards_slider",
  layout: "slide",
  transformOrigin: "center",
});
stackedCard.init();
