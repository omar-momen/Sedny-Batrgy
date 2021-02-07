$(window).on("load", function () {
  check_muted();
});

$(".blogs .paginations ul li").click(function () {
  $(this).addClass("active").siblings().removeClass("active");
  check_muted();
});

$(".blogs .paginations .prev").click(function () {
  prev_click();
});
$(".blogs .paginations .next").click(function () {
  next_click();
});

const next_click = () => {
  $(".blogs .paginations ul li.active")
    .next()
    .addClass("active")
    .siblings()
    .removeClass("active");
  check_muted();
};

const prev_click = () => {
  $(".blogs .paginations ul li.active")
    .prev()
    .addClass("active")
    .siblings()
    .removeClass("active");
  check_muted();
};

const check_muted = () => {
  if ($(".blogs .paginations ul li:first-child").hasClass("active")) {
    $(".blogs .paginations .prev").addClass("text-muted");
  } else {
    $(".blogs .paginations .prev").removeClass("text-muted");
  }
  if ($(".blogs .paginations ul li:last-child").hasClass("active")) {
    $(".blogs .paginations .next").addClass("text-muted");
  } else {
    $(".blogs .paginations .next").removeClass("text-muted");
  }
};
