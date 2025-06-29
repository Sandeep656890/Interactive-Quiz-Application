const questions = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris"
  },
  {
    question: "Which language runs in a web browser?",
    choices: ["Python", "C", "Java", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "Who is the founder of Microsoft?",
    choices: ["Bill Gates", "Steve Jobs", "Mark Zuckerberg", "Larry Page"],
    answer: "Bill Gates"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById('question');
const choicesEl = document.getElementById('choices');
const nextBtn = document.getElementById('next');
const resultEl = document.getElementById('result');
const scoreEl = document.getElementById('score');

function showQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  choicesEl.innerHTML = '';

  q.choices.forEach(choice => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.textContent = choice;
    btn.onclick = () => selectAnswer(choice);
    li.appendChild(btn);
    choicesEl.appendChild(li);
  });
}

function selectAnswer(choice) {
  if (choice === questions[currentQuestion].answer) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById('quiz').classList.add('hidden');
  resultEl.classList.remove('hidden');
  scoreEl.textContent = `${score} out of ${questions.length}`;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  resultEl.classList.add('hidden');
  document.getElementById('quiz').classList.remove('hidden');
  showQuestion();
}

nextBtn.addEventListener('click', () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

// Initialize
showQuestion();
