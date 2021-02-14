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
let questionsObject;
let qCount;
let currentIndex = 0;
let right_answers = 0;

function get_questions() {
  let request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      questionsObject = JSON.parse(this.responseText);

      qCount = questionsObject.length;

      for (let i = 0; i < qCount; i++) {
        addQuestionData(questionsObject[currentIndex], i + 1);
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

    let uniqe_id = (count + i) * Math.random();

    // Add type + name + id + data attribute
    let radioInput = document.createElement("input");
    radioInput.name = `question_${count}`;
    radioInput.type = "radio";
    radioInput.id = `answer_${uniqe_id}`;
    radioInput.dataset.answer = obj[`answer_${i}`];

    let labelEl = document.createElement("label");
    let labelText = document.createTextNode(obj[`answer_${i}`]);
    labelEl.htmlFor = `answer_${uniqe_id}`;
    labelEl.appendChild(labelText);

    answerDiv.appendChild(radioInput);
    answerDiv.appendChild(labelEl);

    answersArea.appendChild(answerDiv);

    questionDiv.appendChild(questionArea);
    questionDiv.appendChild(answersArea);
  }
  // Aappend the Question to the Questions Container
  questionsContainer.appendChild(questionDiv);
  // Increes To Next Question
  currentIndex++;
}
get_questions();

// Submit Button
submitButton.onclick = function () {
  let sure = prompt("Are u sure", "yes");
  if (sure == "yes" || sure == "Yes" || sure == "YES") {
    check_Answer();
    show_results();
    console.log(right_answers);
  }
};

// Check Answer Fucntion
function check_Answer() {
  let questions_test = Array.from(document.querySelectorAll(".question"));
  questions_test.forEach((question, index) => {
    let answers_container = question.lastElementChild;
    let answers = Array.from(answers_container.children);
    let r_answer = questionsObject[index]["right_answer"];
    let choosen_answer;
    answers.forEach((answer) => {
      let answer_input = answer.firstElementChild;
      if (answer_input.checked) {
        choosen_answer = answer_input.dataset.answer;
      }
    });
    // increes right_answers by (1) if The Answer is true
    if (choosen_answer == r_answer) {
      right_answers++;
    }
  });
}

// Show Results Function
function show_results() {
  if (right_answers > qCount / 2) {
    Swal.fire({
      icon: "success",
      title: "Exam finished",
      text: `You answerd ${right_answers} from ${qCount}`,
      confirmButtonText: "<a href='courses.html'>Return to training page</a>",
    });
  } else if (right_answers == qCount) {
    Swal.fire({
      icon: "success",
      title: "Exam finished",
      text: `You answerd ${right_answers} from ${qCount}`,
      confirmButtonText: "<a href='courses.html'>Return to training page</a>",
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Exam finished",
      text: `You answerd ${right_answers} from ${qCount}`,
      confirmButtonText: "<a href='courses.html'>Return to training page</a>",
    });
  }
}
