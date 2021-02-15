$(".videoPopup").magnificPopup({
  type: "iframe",
});

// Percentage Validation
let percentageEl = document.querySelector(".percentage span");
let percentageContainer = document.querySelector(".percentage");
let percentageIcon = document.querySelector(".percentage i");
let testHead = document.querySelector(".head");
let startButton = document.querySelector(".start_test_btn a");
let testIcons = document.querySelectorAll(".icons li i");

if (percentageEl.textContent >= "50") {
  testHead.classList.add("good");
  startButton.classList.add("good");
  testIcons.forEach((icon) => {
    icon.classList.add("good");
  });
  percentageIcon.className = "far fa-check-circle";
} else {
  testHead.classList.add("bad");
  startButton.classList.add("bad");
  testIcons.forEach((icon) => {
    icon.classList.add("bad");
  });
  percentageIcon.className = "far fa-times-circle";
}

if (percentageEl.textContent === "") {
  testHead.classList.remove("bad");
  startButton.classList.remove("bad");
  testIcons.forEach((icon) => {
    icon.classList.remove("bad");
  });
  percentageContainer.remove();
}
