$(window).on("load", function () {
  check_muted();
});

$(".courses .paginations ul li").click(function () {
  $(this).addClass("active").siblings().removeClass("active");
  check_muted();
});

$(".courses .paginations .prev").click(function () {
  prev_click();
});
$(".courses .paginations .next").click(function () {
  next_click();
});

const next_click = () => {
  $(".courses .paginations ul li.active")
    .next()
    .addClass("active")
    .siblings()
    .removeClass("active");
  check_muted();
};

const prev_click = () => {
  $(".courses .paginations ul li.active")
    .prev()
    .addClass("active")
    .siblings()
    .removeClass("active");
  check_muted();
};

const check_muted = () => {
  if ($(".courses .paginations ul li:first-child").hasClass("active")) {
    $(".courses .paginations .prev").addClass("text-muted");
  } else {
    $(".courses .paginations .prev").removeClass("text-muted");
  }
  if ($(".courses .paginations ul li:last-child").hasClass("active")) {
    $(".courses .paginations .next").addClass("text-muted");
  } else {
    $(".courses .paginations .next").removeClass("text-muted");
  }
};
