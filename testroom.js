const questions = [
    {
        question: "What is the capital of France?",
        choices: ["Paris", "Rome", "London"],
        correctAnswer: "Paris"
    },
  {
        question: "Which planet is known as the Red Planet?",
        choices: ["Mars", "Venus", "Jupiter"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the largest mammal?",
        choices: ["Elephant", "Blue Whale", "Giraffe"],
        correctAnswer: "Blue Whale"
    },
    // Add more questions here
    // Add more questions here
];

const questionsDiv = document.getElementById('questions');
const submitButton = document.getElementById('submitQuiz');
const resultsDiv = document.getElementById('results');

// Create questions and answer choices
questions.forEach((q, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');

    const questionText = document.createElement('p');
    questionText.textContent = `${index + 1}. ${q.question}`;
    questionDiv.appendChild(questionText);

    q.choices.forEach(choice => {
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = `q${index}`;
        input.value = choice;
        label.appendChild(input);
        label.appendChild(document.createTextNode(` ${choice}`));
        questionDiv.appendChild(label);
    });

    questionsDiv.appendChild(questionDiv);
});

submitButton.addEventListener('click', showResults);

function showResults() {
    let correctCount = 0;

    questions.forEach((q, index) => {
        const selectedAnswer = document.querySelector(`input[name="q${index}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === q.correctAnswer) {
            correctCount++;
        }
    });

    const totalQuestions = questions.length;
    const percentageCorrect = (correctCount / totalQuestions) * 100;

    resultsDiv.textContent = `You got ${correctCount} out of ${totalQuestions} questions correct (${percentageCorrect.toFixed(2)}%)`;
}
