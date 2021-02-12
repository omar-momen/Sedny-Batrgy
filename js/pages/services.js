// Filters
$(".services_filter .filter_section .upper").click(function () {
  $(this).parent().find("form").slideToggle();
});

// Faq
$(".services_filter .faq .accordions .accordion h2").click(function () {
  $(this).next(".accordion_content").slideToggle();
  $(this).find("span:last-child").toggleClass("active");
});
