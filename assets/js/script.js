// Array with ten sets of questions and their corresponding possible options

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
        question: 'What\'s the title of Phoebe\'s hit song?',
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
        question: 'What\'s the name of Ross\' monkey?',
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
        question: 'Who sang the theme song?',
        answers: [
            { text: 'The Rembrandts', correct: true },
            { text: 'Blur', correct: false },
            { text: 'The Corrs', correct: false },

        ]
    },

    {
        question: 'Which celebrity did not make a cameo in the series?',
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
        question: 'What are Monica and Ross\' parents called?',
        answers: [
            { text: 'Pam and Pete', correct: false },
            { text: 'Judy and Jack', correct: true },
            { text: 'Rose and Ronnie', correct: false },
        ]
    },

];

// Variable for the question
const questionElement = document.getElementById("question");

// Variable for the answer
const answerButtons = document.getElementById("answer-buttons");

// Variable for the next button
const nextButton = document.getElementById("btn-next");

// Variable to store the score index and initial score
let currentQuestionIndex = 0;
let score = 0;

// Event listener: wait for the DOM to finish loading before running the quiz
document.addEventListener("DOMContentLoaded", beginQuiz);

/** Function to start the quiz with question index and initial score set to 0 
 * then call the function to show the question
 */

function beginQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.textContent = "Next one";
    displayQuestion();
}

/** 
 * Function to display the question with corresponding index number and update the text. 
 * Create and display a button and update the text with the possible answers. 
 * Event listener with click event for the selection of the answer. 
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
 * Function to register the option clicked by the user and check if answer is correct; 
 * automatically highlight the correct answer; 
 * display the "Next" button; 
 * prevent the user from selecting another option once one answer is selected;
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
 * Function for the "Next" button to be clickable and update the index; 
 * display the subsequent question until the last one;
 * after the tenth question, display the score
*/

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        displayScore();
    }
}

// Event listener with click event for the "Next" button; 

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        beginQuiz();
    }
});

beginQuiz();

// Function to clear the area and reset previous answer before displaying the next question

function clearArea() {

    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// Function to display the final score and three different phrases based on score

function displayScore() {
    clearArea();
    if (score === 10) {
        questionElement.innerHTML = `You scored ${score} out of ${questions.length}! 
        Oh. My. God.!`;
        nextButton.innerHTML = "Once more!";
        nextButton.style.display = "block";
    } else if (score <= 5) {
        questionElement.innerHTML = `You scored ${score} out of ${questions.length}! Could this quiz BE any harder?!`;
        nextButton.innerHTML = "Try again!";
        nextButton.style.display = "block";
    } else {
        if (score > 5 && score < 10) {
            questionElement.innerHTML = `You scored ${score} out of ${questions.length}! Not too shabby!`;
            nextButton.innerHTML = "Try again!";
            nextButton.style.display = "block";
        }
        // Handle the case where score is greater than 10 or less than 0 
    }
}
