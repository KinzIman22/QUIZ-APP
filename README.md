# 📝 Quiz with JSON

A simple and interactive **Web Quiz Application** built using **HTML, CSS, JavaScript, and JSON**. The application loads quiz questions from a JSON file, allows users to answer multiple-choice questions, evaluates responses, highlights correct and incorrect answers, and displays the final score.

---
#Live demo:

https://questioneries-quiz-javascript.netlify.app/

## 📌 Project Overview

This project demonstrates how to create a dynamic quiz application using JavaScript and JSON. Instead of hardcoding questions in JavaScript, all quiz data is stored in a separate JSON file, making it easy to update or add new questions without modifying the application logic.

---

## 🚀 Features

- 📂 Loads quiz questions from a JSON file.
- ✅ Displays multiple-choice questions dynamically.
- 🎯 Allows one answer per question using radio buttons.
- ✔️ Highlights correct answers in green.
- ❌ Highlights incorrect selected answers in red.
- 📊 Calculates and displays the final score.
- ⚠️ Handles JSON loading errors gracefully.
- 🎨 Modern responsive user interface.

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- JSON
- Fetch API

---

## 📁 Project Structure

```
Quiz-With-JSON/
│
├── index.html          # Main webpage
├── modification.css    # Styling file
├── data.js             # JavaScript logic
├── questions.json      # Quiz questions
├── images.jpeg         # Banner image
└── README.md           # Project documentation
```

---

## ⚙️ How It Works

### Step 1: Load Quiz

- When the webpage loads, the `loadQuiz()` function is called.
- JavaScript fetches quiz questions from `questions.json`.
- Questions are stored in an array.
- The quiz is displayed dynamically on the webpage.

---

### Step 2: Attempt the Quiz

- Users read each question.
- One option can be selected for each question using radio buttons.

---

### Step 3: Submit Answers

When the **Submit** button is clicked:

- JavaScript checks each selected answer.
- If the answer is correct:
  - The option turns **green**.
- If the answer is incorrect:
  - The selected option turns **red**.
  - The correct answer remains highlighted in **green**.

---

### Step 4: Display Result

After evaluation:

- Total correct answers are calculated.
- Final score is displayed.

Example:

```
You scored 4 out of 5
```

---

## 📄 JSON Format

Each question is stored as an object.

Example:

```json
{
  "question": "Which tag is used to create a hyperlink in HTML?",
  "options": [
    "<link>",
    "<a>",
    "<href>",
    "<url>"
  ],
  "correctIndex": 1
}
```

### Fields

| Field | Description |
|--------|-------------|
| question | Question text |
| options | List of answer choices |
| correctIndex | Index of the correct option |

---

## 💻 Functions Used

### escapeHTML()

Escapes HTML characters to prevent HTML injection.

---

### loadQuiz()

- Fetches JSON data.
- Handles loading errors.
- Calls `displayQuiz()`.

---

### displayQuiz()

- Generates quiz interface dynamically.
- Creates radio buttons for each option.

---

### evaluateQuiz()

- Checks selected answers.
- Calculates score.
- Highlights correct and incorrect answers.
- Displays final result.

---

## 🎨 User Interface

The application includes:

- Gradient background
- Responsive layout
- Quiz card design
- Hover effects
- Correct answer highlighting
- Wrong answer highlighting
- Score display
- Error message display

---

## 📷 Workflow

```
Page Loads
      │
      ▼
Load JSON File
      │
      ▼
Display Questions
      │
      ▼
User Selects Answers
      │
      ▼
Click Submit
      │
      ▼
Evaluate Answers
      │
      ▼
Highlight Answers
      │
      ▼
Calculate Score
      │
      ▼
Display Final Result
```

---

## ▶️ How to Run

1. Download or clone the project.

```bash
git clone https://github.com/yourusername/Quiz-With-JSON.git
```

2. Open the project folder.

3. Run using a local server (recommended):

Using VS Code Live Server:

- Install the Live Server extension.
- Right-click `index.html`.
- Click **Open with Live Server**.

OR

Using Python:

```bash
python -m http.server
```

Then open:

```
http://localhost:8000
```

---

## 📚 Learning Outcomes

This project demonstrates:

- Working with JSON data
- Using Fetch API
- DOM Manipulation
- Event Handling
- Dynamic HTML generation
- Error Handling
- JavaScript Functions
- CSS Styling
- Responsive Design

---

## 🔮 Future Improvements

- Timer for each question
- Shuffle questions randomly
- Progress bar
- Negative marking
- Restart quiz button
- Multiple quiz categories
- Score history using Local Storage
- Dark mode support

---

## 👨‍💻 Author

**Developed by:** Your Name

Course: Web Application Development

Project: Quiz with JSON

---

## 📜 License

This project is developed for educational purposes and can be modified or reused for learning.
