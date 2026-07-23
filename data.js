const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const scoreContainer = document.getElementById('score');
const errorContainer = document.getElementById('error');

let quizData = [];


function escapeHTML(str) {
  return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}


function loadQuiz() {
  fetch('questions.json')
    .then(response => {
      if (!response.ok) throw new Error('Failed to load questions');
      return response.json();
    })
    .then(data => {
      quizData = data;
      displayQuiz(data);
    })
    .catch(error => {
      errorContainer.textContent = "Error loading quiz. Try again.";
      errorContainer.classList.remove('hidden');
    });
}

function displayQuiz(questions) {
  let html = '';
  questions.forEach((q, i) => {
    html += `<div class="question">
      <p><strong>Q${i + 1}: ${escapeHTML(q.question)}</strong></p>
      <div class="options">`;

    q.options.forEach((opt, j) => {
      html += `
        <label>
          <input type="radio" name="question${i}" value="${j}"> ${escapeHTML(opt)}
        </label><br>`;
    });

    html += `</div></div>`;
  });

  quizContainer.innerHTML = html;
}


function evaluateQuiz() {
  let score = 0;

  quizData.forEach((q, i) => {
    const selected = document.querySelector(`input[name="question${i}"]:checked`);
    const optionsDiv = quizContainer.children[i].querySelector('.options');
    const inputs = optionsDiv.querySelectorAll('input');

    inputs.forEach((input, index) => {
      const label = input.parentElement;
      label.classList.remove('correct', 'incorrect');

      if (index === q.correctIndex) {
        label.classList.add('correct');
      } else if (selected && parseInt(selected.value) === index && index !== q.correctIndex) {
        label.classList.add('incorrect');
      }
    });

    if (selected && parseInt(selected.value) === q.correctIndex) {
      score++;
    }
  });

  const message = `You scored ${score} out of ${quizData.length}`;
  scoreContainer.textContent = message;
  alert(message);
}

submitButton.addEventListener('click', evaluateQuiz);
loadQuiz();
