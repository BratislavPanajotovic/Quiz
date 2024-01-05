const question1 = {
  question: "What does HTML stand for?",
  options: [
    "Hyper Transfer Markup Language",
    "Hyper Text Markup Language",
    "Hyperlink and Text Markup Language",
    "High-Level Text Markup Language",
  ],
  correctAnswer: "B",
};

const question2 = {
  question: "How can you include an external CSS file in your HTML document?",
  options: [
    '<link rel="stylesheet" type="text/css" href="style.css">',
    '<style src="style.css"></style>',
    '<css type="text/css" href="style.css">',
    "<stylesheet>style.css</stylesheet>",
  ],
  correctAnswer: "A",
};

const question3 = {
  question: "What keyword is used to declare variables in JavaScript?",
  options: ["var", "int", "declare", "variable"],
  correctAnswer: "A",
};

const question4 = {
  question: "Which tag is used to create a hyperlink in HTML?",
  options: ["<url>", "<link>", "<a>", "<hyperlink>"],
  correctAnswer: "C",
};

const question5 = {
  question: "How can you select an element with id 'example' in CSS?",
  options: ["#example", ".example", "*example*", "element(example)"],
  correctAnswer: "A",
};

const question6 = {
  question: "What is the purpose of the document.getElementById method?",
  options: [
    "To access the content of an HTML element by its id",
    "To create a new HTML element",
    "To define a new CSS style",
    "To validate HTML documents",
  ],
  correctAnswer: "A",
};

const question7 = {
  question: "Which doctype declaration is correct for HTML5?",
  options: [
    "<!DOCTYPE HTML5>",
    '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 5.0//EN">',
    "<!DOCTYPE html>",
    "<!DOCTYPE xhtml>",
  ],
  correctAnswer: "C",
};

const question8 = {
  question: "How do you add comments in CSS?",
  options: ["// Comment", "<!-- Comment -->", "/* Comment */", "** Comment **"],
  correctAnswer: "C",
};

const question9 = {
  question: "What is the purpose of the console.log statement?",
  options: [
    "To log messages to the console for debugging",
    "To display an alert message",
    "To create a new variable",
    "To define a function",
  ],
  correctAnswer: "A",
};

const question10 = {
  question: "Which tag is used to define an unordered list in HTML?",
  options: ["<list>", "<ol>", "<ul>", "<li>"],
  correctAnswer: "C",
};

const question11 = {
  question: "How can you center an element horizontally in CSS?",
  options: [
    "text-align: center;",
    "align: center;",
    "margin: auto;",
    "horizontal-align: center;",
  ],
  correctAnswer: "C",
};

const question12 = {
  question: "What does the typeof operator do in JavaScript?",
  options: [
    "Returns the data type of a variable",
    "Declares a new variable",
    "Checks if a variable is defined",
    "Converts a variable to a string",
  ],
  correctAnswer: "A",
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

  while (randomQs.length < 5 && tempArray.length > 0) {
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
    text.textContent = `${question.question}`;

    let currentDiv = document.querySelector(`.q${i + 1}`);
    currentDiv.appendChild(text);
  }
}

questionMaker();
