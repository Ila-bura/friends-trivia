// Array with ten sets of questions with their corresponding possible options

let allQuestions = [
    {
        question: 'How many sisters does Joey have?',
        answers: [
            { text: 'seven', correct: true },
            { text: 'six', correct: false },
            { text: 'five', correct: false },
        ]
    },

    {
        question: 'What dessert did Rachel try to make for Thanksgiving?',
        answers: [
            { text: 'Toffee', correct: false },
            { text: 'Truffle', correct: false },
            { text: 'Trifle', correct: true },
        ]
    },

    {
        question: 'What is the title of Phoebe\'s most popular song?',
        answers: [
            { text: 'Stinky Cat', correct: false },
            { text: 'Smelly Cat', correct: true },
            { text: 'Silly Cat', correct: false },

        ]
    },

    {
        question: 'What is a lobster?',
        answers: [
            { text: 'Your gym buddy', correct: false },
            { text: 'Your favourite roommate', correct: false },
            { text: 'The person you are meant to be with', correct: true },

        ]
    },

    {
        question: 'What is the name of Ross\'s monkey?',
        answers: [
            { text: 'Marcel', correct: true },
            { text: 'Miguel', correct: false },
            { text: 'Manuel', correct: false },
        ]
    },

    {
        question: 'What job does Chandler\'s dad do in Vegas?',
        answers: [
            { text: 'A croupier', correct: false },
            { text: 'A drag queen', correct: true },
            { text: 'Elvis impersonator', correct: false },
        ]
    },

    {
        question: 'What did Phoebe legally change her name to?',
        answers: [
            { text: 'Princess Consuela Banana Hammock', correct: true },
            { text: 'Regina Phalange', correct: false },
            { text: 'Ursula Muriel', correct: false },

        ]
    },

    {
        question: 'Which of these celebrities did not make a cameo in the series?',
        answers: [
            { text: 'Robin Williams', correct: false },
            { text: 'Isabella Rossellini', correct: false },
            { text: 'Cher', correct: true },
        ]
    },

    {
        question: 'What Japanese product does Joey do a commercial for?',
        answers: [
            { text: 'A lipstick for men', correct: true },
            { text: 'A handbag for men', correct: false },
            { text: 'A shower cap for men', correct: false },
        ]
    },

    {
        question: 'What are the names of Monica and Ross\' parents?',
        answers: [
            { text: 'Pam and Pete', correct: false },
            { text: 'Judy and Jack', correct: true },
            { text: 'Rose and Ronnie', correct: false },
        ]
    },

];

// Variable for the question
let question = document.GetElementById("question");

// Variable for the answer
let answerButton = document.GetElementById("answer-buttons");

// Variable for the next button
let nextButton = document.GetElementById("btn-next");

// Variable to store the score index and initial score
let currentQuestionIndex = 0;
let score = 0;

// Function to start the quiz with question index and initial score set to 0 then call the function to show the question
function beginQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next one";
    displayQuestion();
}

// Function to display the questions with corresponding number and update the text. Create and display a button and update the text with the possible answers.

function displayQuestion() {
    let currentQuestion = question[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    question.innerHTML = questionNumber + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}
beginQuiz();
// Function to check if answer is correct

// Function to clear the area

// Function to display the final score


// Function to restart the quiz
