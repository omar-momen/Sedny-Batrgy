/******* Start Header Carousals ********/
$(".header_fill_carousal").slick({
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 1000,
  arrows: true,
  fade: true,
  rtl: document.documentElement.getAttribute("dir") == "rtl" ? true : false,
});
$(".header_slices_carousal").slick({
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 500,
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: ".header_fill_carousal",
  rtl: document.documentElement.getAttribute("dir") == "rtl" ? true : false,
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
  ],
});
$(".header_slices_carousal .slick-slide").hover(function () {
  $(".header_fill_carousal .slick-next").click();
  $(this).addClass("slick-current").siblings().removeClass("slick-current");
});
/******* End Header Carousals ********/

// About US Section
$("#videoPopup").magnificPopup({
  type: "iframe",
});

document.getElementById("more").onclick = function () {
  document.getElementById("videoPopup").click();
};
let more_btn_icon = document.querySelector(".more_btn i");
if (document.documentElement.getAttribute("dir") === "rtl") {
  more_btn_icon.classList.remove("fa-arrow-right");
  more_btn_icon.classList.add("fa-arrow-left");
  if (window.innerWidth >= 480) {
    more_btn_icon.classList.remove("fa-arrow-down");
    more_btn_icon.classList.add("fa-arrow-left");
  }
}
if (window.innerWidth <= 480) {
  more_btn_icon.classList.remove("fa-arrow-right");
  more_btn_icon.classList.remove("fa-arrow-left");
  more_btn_icon.classList.add("fa-arrow-down");
} else {
  more_btn_icon.classList.remove("fa-arrow-down");
  more_btn_icon.classList.add("fa-arrow-right");
}

// Clients Number
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

// Services Section
let tabsElemens = document.querySelectorAll(".grid_items_container .tab");

tabsElemens.forEach((element) => {
  element.addEventListener("click", function () {
    tabsElemens.forEach((tabsElement) =>
      tabsElement.classList.remove("active")
    );
    this.classList.add("active");
  });
});

$(".grid_items_container .grid_item").on("click", function () {
  // $(this).addClass("active").siblings().removeClass("active");
  $("#tab-" + $(this).data("tab"))
    .fadeIn()
    .siblings()
    .css("display", "none");
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
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 2,
  adaptiveHeight: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: false,
  rtl: document.documentElement.getAttribute("dir") == "rtl" ? true : false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        centerMode: false,
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: false,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: false,
        slidesToShow: 2,
      },
    },
  ],
});
$(".our_articles .content").slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: false,
  rtl: document.documentElement.getAttribute("dir") == "rtl" ? true : false,
});

$(".articles_slider .slick-slide").hover(function () {
  $(".our_articles .content .slick-next").click();
  $(this).addClass("slick-current").siblings().removeClass("slick-current");
});

// Partners Cards Slider
$(".cards_slider").slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  centerPadding: "60px",
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  pauseOnDotsHover: true,
  rtl: document.documentElement.getAttribute("dir") == "rtl" ? true : false,
});
