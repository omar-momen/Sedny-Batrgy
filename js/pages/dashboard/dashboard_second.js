let pagination = document.querySelector(".pagination span");
let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");
let paginationNumber = document.querySelectorAll(".table tr").length - 1;
let defaultNumber = 1;

pagination.innerHTML = `${defaultNumber} of ${paginationNumber}`;

prevBtn.onclick = function () {
  prevButton();
};
nextBtn.onclick = function () {
  nextButton();
};

function nextButton() {}

function prevButton() {}
