/********** Start loading **********/
$(window).on("load", function () {
  $(".loading-overlay").fadeOut();
});
/********** End loading **********/

/********** Start Switch Dom (right To left) (left To right) **********/
let language_button = document.querySelector(
  "nav.nav .upper_nav .switch_lang .glope"
);
let siwtch_lang = () => {
  if (language_button.nextElementSibling.textContent == "Ar") {
    document.documentElement.setAttribute("dir", "rtl");
    language_button.nextElementSibling.textContent = "En";
  } else if (language_button.nextElementSibling.textContent == "En") {
    document.documentElement.setAttribute("dir", "ltr");
    language_button.nextElementSibling.textContent = "Ar";
  }
};
$(window).on("load", siwtch_lang);
language_button.addEventListener("click", siwtch_lang);
/********** End Switch Dom (right To left) (left To right) **********/

// Main Nav Search input
$("nav .main_nav form span").click(function () {
  $(this).next().slideToggle();
  $(this).next().focus();
});

// Toggle Class Active On Main Nav Links
$("nav.nav .main_nav ul.links li").click(function () {
  $(this).addClass("active").siblings().removeClass("active");
});
