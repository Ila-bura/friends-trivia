// array with ten sets of questions with their corresponding possible options

const questions = [
    {
        question: 'How many sisters does Joey have?',
        answers: [
            { text: '7', correct: true },
            { text: '6', correct: false },
            { text: '5', correct: false },
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
            { text: 'Your roommate', correct: false },
            { text: 'Your soulmate', correct: true },

        ]
    },

    {
        question: 'What is the name of Ross\' monkey?',
        answers: [
            { text: 'Marcel', correct: true },
            { text: 'Miguel', correct: false },
            { text: 'Manuel', correct: false },
        ]
    },

    {
        question: 'What job does Chandler\'s dad do in Vegas?',
        answers: [
            { text: 'Croupier', correct: false },
            { text: 'Drag queen', correct: true },
            { text: 'Elvis impersonator', correct: false },
        ]
    },

    {
        question: 'What did Phoebe legally change her name to?',
        answers: [
            { text: 'Princess Consuela Banana Hammock', correct: true },
            { text: 'Regina Phalange', correct: false },
            { text: 'Nestlé Toulouse', correct: false },

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
            { text: 'Lipstick for men', correct: true },
            { text: 'Handbag for men', correct: false },
            { text: 'Shower cap for men', correct: false },
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

// variable for the question
const questionElement = document.getElementById("question");

// variable for the answer
const answerButtons = document.getElementById("answer-buttons");

// variable for the next button
const nextButton = document.getElementById("btn-next");

// variable to store the score index and initial score
let currentQuestionIndex = 0;
let score = 0;

// event listener
document.addEventListener("DOMContentLoaded", beginQuiz);

/** function to start the quiz with question index and initial score set to 0 
 * then call the function to show the question
 */

function beginQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.textContent = "Next one";
    displayQuestion();
}

/** 
 * function to display the question with corresponding index number and update the text. 
 * Create and display a button and update the text with the possible answers. 
 * Create a click event for the selection of the answer. 
*/

function displayQuestion() {
    clearArea();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNumber + " - " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", pickAnswer);
    });
}

/** 
 * function to add the button clicked by the user and check if answer is correct; 
 * automatically highlight the correct answer if user selected the wrong one; 
 * add the next button; 
 * prevent the user from selecting other options once one answer is selected
 * increase score by one
*/



function pickAnswer(e) {
    const chosenButton = e.target;
    const isCorrect = chosenButton.dataset.correct === "true";
    if (isCorrect) {
        chosenButton.classList.add("correct");
        score++;
    } else {
        chosenButton.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}


/** 
 * function next button to be clickable and update the index; 
 * if there is another question display it otherwise display the score
*/

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        displayScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        beginQuiz();
    }
});

beginQuiz();



// function to clear the area and reset previous answers before displaying the next question

function clearArea() {

    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }

}

// function to display the final score and two different phrases based on score

function displayScore() {
    clearArea();
    if (score >= 6) {
        questionElement.innerHTML = `You scored ${score} out of ${questions.length}! 
        Oh. My. God.!`;
        nextButton.innerHTML = "Once more!";
        nextButton.style.display = "block";
    } else {
        questionElement.innerHTML = `You scored ${score} out of ${questions.length}! Can this quiz BE any harder?!`;
        nextButton.innerHTML = "Try again!";
        nextButton.style.display = "block";
    };
}

