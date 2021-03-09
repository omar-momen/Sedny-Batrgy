/********** Start loading **********/
$(window).on("load", function () {
  $(".loading-overlay").fadeOut();
});
/********** End loading **********/

/********** Start Switch Dom (right To left) (left To right) **********/
let language_button = document.querySelector("nav.navbar .glope");
let siwtch_lang = () => {
  if (document.documentElement.getAttribute("dir") == "ltr") {
    document.documentElement.setAttribute("dir", "rtl");
  } else if (document.documentElement.getAttribute("dir") == "rtl") {
    document.documentElement.setAttribute("dir", "ltr");
  }
};
language_button.addEventListener("click", siwtch_lang);
/********** End Switch Dom (right To left) (left To right) **********/

// Adjust main Header_height
const main_header = document.querySelector("header.header");
const nav = document.querySelector("nav.navbar");
const nav_height_value = nav.clientHeight;
const window_height = window.innerHeight;
if (main_header) {
  main_header.style.height = window_height - nav_height_value + "px";
}

// Main Nav Search input
$("nav.navbar .corner_div span.search_icon").click(function () {
  $("nav.navbar .form_section").addClass("active");
});
$("nav.navbar .form_section .close_form_section").click(function () {
  $("nav.navbar .form_section").removeClass("active");
});

// Main Nav Scroll Fixed
$(window).scroll(function () {
  progres_Bar();
  if ($(window).scrollTop() > 10) {
    $("nav.navbar").addClass("fixed");
  } else {
    $("nav.navbar").removeClass("fixed");
  }
  // Scroll To Top
  if ($(window).scrollTop() > 500) {
    $(".scrollToTop").addClass("active");
  } else {
    $(".scrollToTop").removeClass("active");
  }
});
$(".scrollToTop").on("click", function () {
  $("body,html").animate({
    scrollTop: 0,
  });
});

/********** Start Nav Services Hover **********/
// Adjust main Nav_height
const main_nav = document.querySelector("nav.navbar");
const main_nav_height = main_nav.clientHeight;
const services_hover = document.querySelector(
  "nav.navbar ul.links .services .services_hover"
);
services_hover.style.top = main_nav_height + "px";
// parent
if (window.innerWidth >= 992) {
  $("nav.navbar ul.links li.services").hover(
    function () {
      services_hover.style.height = "500px";
      $("nav.navbar ul.links .services .services_hover").slideDown(200);
      setTimeout(() => {
        $("nav.navbar ul.links .services .services_hover").addClass("active");
      }, 201);
    },
    function () {
      $("nav.navbar ul.links .services .services_hover").removeClass("active");
      $("nav.navbar ul.links .services .services_hover").slideUp(200);
      // Pointer None
      $("nav.navbar ul.links .services").addClass("pointer_none");
      setTimeout(() => {
        $("nav.navbar ul.links .services").removeClass("pointer_none");
      }, 500);
    }
  );
  $("span.arrow_up").hover(function () {
    $("nav.navbar ul.links .services .services_hover").removeClass("active");
    $("nav.navbar ul.links .services .services_hover").slideUp();
  });
} else {
  $("nav.navbar ul.links li.services").click(function () {
    $(
      "nav.navbar ul.links .services .services_drop_down.small_screen_only"
    ).slideToggle(500);
    $("nav.navbar ul.links .services .arrow_parent").toggleClass("active");
  });
  $(
    "nav.navbar ul.links .services .services_drop_down.small_screen_only"
  ).click(function (e) {
    e.stopPropagation();
  });
  // #######################
  $(
    "nav.navbar ul.links .services .services_drop_down.small_screen_only li.drop_down_link"
  ).click(function () {
    $(this).find(".sub_drop_down").slideToggle();
    $(this).find(".arrow").toggleClass("active");
  });
  $(
    "nav.navbar ul.links .services .services_drop_down.small_screen_only li.drop_down_link .sub_drop_down"
  ).click(function (e) {
    e.stopPropagation();
  });
}

$(window).resize(function () {
  if (window.innerWidth >= 992) {
    $("nav.navbar ul.links li.services").hover(
      function () {
        services_hover.style.height = "500px";
        $("nav.navbar ul.links .services .services_hover").slideDown(200);
        setTimeout(() => {
          $("nav.navbar ul.links .services .services_hover").addClass("active");
        }, 201);
      },
      function () {
        $("nav.navbar ul.links .services .services_hover").removeClass(
          "active"
        );
        $("nav.navbar ul.links .services .services_hover").slideUp(200);
        // Pointer None
        $("nav.navbar ul.links .services").addClass("pointer_none");
        setTimeout(() => {
          $("nav.navbar ul.links .services").removeClass("pointer_none");
        }, 500);
      }
    );
    $("span.arrow_up").hover(function () {
      $("nav.navbar ul.links .services .services_hover").removeClass("active");
      $("nav.navbar ul.links .services .services_hover").slideUp();
    });
  } else {
    $("nav.navbar ul.links li.services").click(function () {
      $(
        "nav.navbar ul.links .services .services_drop_down.small_screen_only"
      ).slideToggle(500);
      $("nav.navbar ul.links .services .arrow_parent").toggleClass("active");
    });
    $(
      "nav.navbar ul.links .services .services_drop_down.small_screen_only"
    ).click(function (e) {
      e.stopPropagation();
    });
    // #######################
    $(
      "nav.navbar ul.links .services .services_drop_down.small_screen_only li.drop_down_link"
    ).click(function () {
      $(this).find(".sub_drop_down").slideToggle();
      $(this).find(".arrow").toggleClass("active");
    });
    $(
      "nav.navbar ul.links .services .services_drop_down.small_screen_only li.drop_down_link .sub_drop_down"
    ).click(function (e) {
      e.stopPropagation();
    });
  }
});

// childs
$("nav.navbar ul.links .services .services_hover ul.tabs li").hover(
  function () {
    $(this).addClass("active").siblings().removeClass("active");
    services_hover.style.height =
      $($(this).data("active")).height() + 150 + "px";
    $($(this).data("active"))
      .addClass("active")
      .siblings()
      .removeClass("active");
  }
);

function progres_Bar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
/********** End Nav Services Hover **********/
