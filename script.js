const question1 = {
  question: "What does HTML stand for?",
  options: [
    "Hyper Transfer Markup Language",
    "Hyper Text Markup Language",
    "Hyperlink and Text Markup Language",
    "High-Level Text Markup Language",
  ],
  correctAnswer: "option2",
};

const question2 = {
  question: "How can you include an external CSS file in your HTML document?",
  options: [
    '<link rel="stylesheet" type="text/css" href="style.css">',
    '<style src="style.css"></style>',
    '<css type="text/css" href="style.css">',
    "<stylesheet>style.css</stylesheet>",
  ],
  correctAnswer: "option1",
};

const question3 = {
  question: "What keyword is used to declare variables in JavaScript?",
  options: ["var", "int", "declare", "variable"],
  correctAnswer: "option1",
};

const question4 = {
  question: "Which tag is used to create a hyperlink in HTML?",
  options: ["<url>", "<link>", "<a>", "<hyperlink>"],
  correctAnswer: "option1",
};

const question5 = {
  question: "How can you select an element with id 'example' in CSS?",
  options: ["#example", ".example", "*example*", "element(example)"],
  correctAnswer: "option1",
};

const question6 = {
  question: "What is the purpose of the document.getElementById method?",
  options: [
    "To access the content of an HTML element by its id",
    "To create a new HTML element",
    "To define a new CSS style",
    "To validate HTML documents",
  ],
  correctAnswer: "option1",
};

const question7 = {
  question: "Which doctype declaration is correct for HTML5?",
  options: [
    "<!DOCTYPE HTML5>",
    '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 5.0//EN">',
    "<!DOCTYPE html>",
    "<!DOCTYPE xhtml>",
  ],
  correctAnswer: "option3",
};

const question8 = {
  question: "How do you add comments in CSS?",
  options: ["// Comment", "<!-- Comment -->", "/* Comment */", "** Comment **"],
  correctAnswer: "option3",
};

const question9 = {
  question: "What is the purpose of the console.log statement?",
  options: [
    "To log messages to the console for debugging",
    "To display an alert message",
    "To create a new variable",
    "To define a function",
  ],
  correctAnswer: "option1",
};

const question10 = {
  question: "Which tag is used to define an unordered list in HTML?",
  options: ["<list>", "<ol>", "<ul>", "<li>"],
  correctAnswer: "option3",
};

const question11 = {
  question: "How can you center an element horizontally in CSS?",
  options: [
    "text-align: center;",
    "align: center;",
    "margin: auto;",
    "horizontal-align: center;",
  ],
  correctAnswer: "option3",
};

const question12 = {
  question: "What does the typeof operator do in JavaScript?",
  options: [
    "Returns the data type of a variable",
    "Declares a new variable",
    "Checks if a variable is defined",
    "Converts a variable to a string",
  ],
  correctAnswer: "option1",
};

const questions = [
  question1,
  question2,
  question3,
  question4,
  question5,
  question6,
  question7,
  question8,
  question9,
  question10,
  question11,
  question12,
];

let questionsNum = questions.length;

function getRandomQuestions(questionsArr) {
  let randomQs = [];
  let tempArray = [...questionsArr];

  while (randomQs.length < 5) {
    let randomIndex = Math.floor(Math.random() * tempArray.length);
    randomQs.push(tempArray.splice(randomIndex, 1)[0]);
  }

  return randomQs;
}

let generateRandomQuestions = getRandomQuestions(questions);
function questionMaker() {
  for (let i = 0; i < generateRandomQuestions.length; i++) {
    let question = generateRandomQuestions[i];

    let text = document.createElement("h2");
    text.textContent = `${i + 1}. ${question.question}`;
    text.classList.add(`q${i + 1}-Headline`);

    let currentDiv = document.querySelector(`.q${i + 1}`);
    currentDiv.appendChild(text);

    for (let j = 0; j < question.options.length; j++) {
      let optionLabel = document.createElement("label");
      let optionInput = document.createElement("input");

      optionInput.type = "radio";
      optionInput.name = `options_${i + 1}`;
      optionInput.value = `option${j + 1}`;
      optionLabel.classList.add(`q${i + 1}-option${j + 1}`);
      optionInput.classList.add(`q${i + 1}-input${j + 1}`);

      if (j === 0) {
        optionInput.checked = true;
      }

      optionLabel.appendChild(optionInput);
      optionLabel.appendChild(document.createTextNode(question.options[j]));
      currentDiv.appendChild(optionLabel);
    }
  }
}
questionMaker();

let btnSendAnswers = document.querySelector(".btns-Submit");
btnSendAnswers.addEventListener("click", () => {
  let divAnswers = document.querySelector(".answers");
  divAnswers.innerHTML = "";

  let selectedAnswers = [];

  for (let i = 0; i < generateRandomQuestions.length; i++) {
    let userAnswer = document.querySelector(
      `input[name=options_${i + 1}]:checked`
    );

    userAnswer = userAnswer.value;

    selectedAnswers.push(userAnswer);

    if (userAnswer === generateRandomQuestions[i].correctAnswer) {
      let newP = document.createElement("p");
      newP.textContent = `Answer for Question ${i + 1} is correct!`;
      newP.classList.add("correctAnswer");
      divAnswers.appendChild(newP);
    } else {
      let newP = document.createElement("p");
      newP.textContent = `Answer for Question ${i + 1} is incorrect!`;
      newP.classList.add("incorrectAnswer");
      divAnswers.appendChild(newP);
      console.log("User's Answer:", userAnswer);
      console.log("Correct Answer:", generateRandomQuestions[i].correctAnswer);
    }
  }
  divAnswers.scrollIntoView({ behavior: "smooth" });
});

let newQuestions = document.querySelector(".btns-Reset");

newQuestions.addEventListener("click", () => {
  for (let i = 0; i < generateRandomQuestions.length; i++) {
    let currentDiv = document.querySelector(`.q${i + 1}`);
    currentDiv.innerHTML = "";
  }

  let divAnswers = document.querySelector(".answers");
  divAnswers.innerHTML = "";

  generateRandomQuestions = getRandomQuestions(questions);
  questionMaker();

  document.getElementById("topOfPage").scrollIntoView({ behavior: "smooth" });
});
