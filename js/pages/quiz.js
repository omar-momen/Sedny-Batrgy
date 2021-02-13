// Counter Down
let countDownInterval;
function count_Down(time) {
  let seconds = time;
  let countdownEL = document.querySelector(".timer");
  let minutes, remSeconds;
  let progressTime = seconds * 1000;

  countDownInterval = setInterval(() => {
    minutes = Math.floor(seconds / 60);
    remSeconds = seconds % 60;

    minutes = minutes < 10 ? `0${minutes}` : minutes;
    remSeconds = remSeconds < 10 ? `0${remSeconds}` : remSeconds;

    if (--seconds < 0) {
      clearInterval(countDownInterval);
      // Swal.fire({
      //   title: "Time is up",
      //   text: `We will send your results on your email (ahmedkhaild@gmail.com)`,
      //   confirmButtonText: "Return to training page",
      // });
    }

    countdownEL.innerHTML = `${minutes}:${remSeconds}`;
  }, 1000);

  $(".counter_progress").circleProgress({
    value: 1,
    size: 80,
    fill: {
      gradient: ["red", "orange"],
    },
    animation: {
      duration: progressTime + 1000,
      linear: "circleProgressEasing",
    },
    startAngle: 4.7,
    fill: { color: "#4DC9F8" },
    thickness: 4,
  });
}
count_Down(120);
// Main Variables
let quizPage = document.querySelector(".quiz_page");
let questionsContainer = document.querySelector(".questions_area .container");
let submitButton = document.getElementById("finish");

// Global Variables
let qObj;
let qCount;
let currentIndex = 0;
let rightAnswers = 0;

function get_questions() {
  let request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      let questionsObject = JSON.parse(this.responseText);

      for (let i = 0; i <= 8; i++) {
        addQuestionData(questionsObject[i], i + 1);
      }
    }
  };
  request.open("GET", "../../json/questions.json", true);
  request.send();
}

function addQuestionData(obj, count) {
  // Create The Question Elements
  let questionDiv = document.createElement("div");
  let questionArea = document.createElement("div");
  let answersArea = document.createElement("div");
  let questionNumber = document.createElement("span");
  let numberText = document.createTextNode(`${count}.`);
  let questionTitle = document.createElement("h3");
  let questionText = document.createTextNode(obj.title);

  questionDiv.classList = "question mt-4";
  questionArea.className = "question_area";
  answersArea.className = "answers_area";

  questionDiv.appendChild(questionArea);
  questionDiv.appendChild(answersArea);

  questionNumber.appendChild(numberText);
  questionTitle.appendChild(questionText);
  questionArea.appendChild(questionNumber);
  questionArea.appendChild(questionTitle);

  // Add Answers To The Question Div
  for (let i = 1; i <= 4; i++) {
    let answerDiv = document.createElement("div");
    answerDiv.className = "answer";

    // Add type + name + id + data attribute
    let radioInput = document.createElement("input");
    radioInput.name = "question";
    radioInput.type = "radio";
    radioInput.id = `answer_${i}`;
    radioInput.dataset.answer = obj[`answer_${i}`];

    let labelEl = document.createElement("label");
    let labelText = document.createTextNode(obj[`answer_${i}`]);
    labelEl.htmlFor = `answer_${i}`;
    labelEl.appendChild(labelText);

    answerDiv.appendChild(radioInput);
    answerDiv.appendChild(labelEl);

    answersArea.appendChild(answerDiv);

    questionDiv.appendChild(questionArea);
    questionDiv.appendChild(answersArea);
  }
  // Aappend the Question to the Questions Container
  questionsContainer.appendChild(questionDiv);
}
get_questions();

// Submit Button
submitButton.onclick = function () {
  // Swal.fire({
  //   icon: "success",
  //   title: "Exam finished",
  //   text: `We will send your results on your email (ahmedkhaild@gmail.com)`,
  //   confirmButtonText: "Return to training page",
  // });
};
