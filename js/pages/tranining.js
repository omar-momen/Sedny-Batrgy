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
