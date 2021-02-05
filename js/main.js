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
