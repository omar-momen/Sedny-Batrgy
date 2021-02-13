// Counter Down
const startingMinutes = 2;
let time = startingMinutes * 60,
    progressTime = time * 1000;
const countdownEl = document.querySelector(".timer");

setInterval(updateCountDown, 1000);

function updateCountDown() {
  "use strict";
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  countdownEl.textContent = `${minutes}:${seconds}`;
  time--;
  time = time < 0 ? 0 : time;
}


$('.counter_progress').circleProgress({
  value: 1,
  size: 80,
  fill: {
    gradient: ["red", "orange"]
  },
  animation: { duration: progressTime, linear: "circleProgressEasing" },
  startAngle: 4.7,
  fill: { color: "#4DC9F8" },
  thickness: 4,
});

// Main Variables
let questionsContainer = document.querySelector(".questions_area .container");



function get_questions() {
  let request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      let questionsObject = JSON.parse(this.responseText),
        qCount = questionsObject.length;

        for(let i = 0; i <= 8; i++){
          addQuestionData(questionsObject[i], i + 1)
        }
    }
  };
  request.open("GET", "../../json/questions.json", true);
  request.send();
}

function addQuestionData(obj, count) {
  let questionDiv = document.createElement("div")
  let questionArea = document.createElement("div");
  let answersArea = document.createElement("div")
  let questionNumber = document.createElement("span");
  let numberText = document.createTextNode(`${count}.`)
  let questionTitle = document.createElement("h3");
  let questionText = document.createTextNode(obj.title);

  questionDiv.classList = "question mt-4"
  questionArea.className = "question_area"
  answersArea.className = "answers_area"

  questionDiv.appendChild(questionArea)
  questionDiv.appendChild(answersArea)

  questionNumber.appendChild(numberText);
  questionTitle.appendChild(questionText);
  questionArea.appendChild(questionNumber);
  questionArea.appendChild(questionTitle);

  // Add Answers
  for(let i = 1; i <= 4; i++) {
    let answerDiv = document.createElement("div");
    let radioInput = document.createElement("input");
    let labelEl = document.createElement("label");
    let labelText = document.createTextNode(obj[`answer_${i}`]);

    answerDiv.className = "answer";

    // Add type + name + id + data attribute
    radioInput.name = "question";
    radioInput.type = "radio";
    radioInput.id = `answer_${i}`;
    radioInput.dataset.answer = obj[`answer_${i}`];

    labelEl.htmlFor = `answer_${i}`;

    labelEl.appendChild(labelText);

    answerDiv.appendChild(radioInput);
    answerDiv.appendChild(labelEl);

    answersArea.appendChild(answerDiv);

    questionDiv.appendChild(questionArea)
    questionDiv.appendChild(answersArea)
  }
  questionsContainer.appendChild(questionDiv)
  
} 
get_questions()