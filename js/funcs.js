// Add Class To item And Remove From sibilings
const active_Class = (parent_query_selector, child_node_name) => {
  document
    .querySelector(parent_query_selector)
    .addEventListener("click", (e) => {
      let target = e.target;
      if (target.nodeName == child_node_name) {
        Array.from(target.parentElement.children).forEach((li) => {
          li.classList.remove("active");
        });
        target.classList.add("active");
      }
    });
};

// Scroll To Top
const scroll_Top = (button_selector) => {
  let scroll_top_button = document.querySelector(button_selector);
  scroll_top_button.addEventListener("click", scrollTop);
  function scrollTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
};
