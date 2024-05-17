const quizData = [
    {
        question: "The original Rainbow Pride Flag, designed by Gilbert Baker in 1978, had how many colors?",
        answers: ["Six", "Eight", "Twelve"],
        correctAnswer: "Eight",
        imageUrl: "Gilbert-1.jpg",
        info: "The original rainbow flag consists of six colours: red, orange, yellow, green, blue, and violet, symbolizing the diversity of the LGBTQ+ community."
    },
    {
        question: "How many colours are there in the original rainbow flag?",
        answers: ["Six", "Seven", "Eight"],
        correctAnswer: "Six",
        imageUrl: "Color-Pride-Flag.jpg",
        info: "The 6-Color Pride Flag is one of the most well-known and used LGBT flags throughout history. Hot pink wasn´t included because the fabric was hard to find. In 1979, Gilbert Baker dropped the turquoise stripe, creating the most well-known pride flag."
    },
    {
        question: "Which pride flag features three horizontal stripes in  pink, purple, and blue?",
        answers: ["Pansexual Pride Flag", "Bisexual Pride Flag", "Asexual Pride Flag"],
        correctAnswer: "Bisexual Pride Flag",
        imageUrl: "bisexual.jpg",
        info: "The Bisexual Pride Flag features three horizontal stripes in shades of blue, purple and pink. Blue is for opposite-sex attraction. Pink is for same-sex attraction. Purple is for attraction to both sexes."
    },
    {
        question: "Which pride flag consists of nine horizontal stripes in pink, purple, blue, green, yellow, orange, red, brown, and black?",
        answers: ["Non-Binary Pride Flag", "Progress Pride Flag", "Pansexual Pride Flag"],
        correctAnswer: "Progress Pride Flag",
        imageUrl: "Intersex-inclusive-pride-flag.jpg",
        info: "The Progress Pride Flag is an updated version of the traditional rainbow flag. It features nine horizontal stripes in pink, red, orange, yellow, green, blue, purple, black, and brown. The additional black and brown stripes are meant to represent marginalized LGBTQ+ communities of color and those living with HIV/AIDS, while the white, pink, and blue stripes represent transgender individuals, non-binary individuals, and those who are intersex."
    },
    {
        question: "Which pride flag consists of three horizontal stripes in pink, blue, and yellow?",
        answers: ["Pansexual Pride Flag", "Genderqueer Pride Flag", "Progress Pride Flag"],
        correctAnswer: "Pansexual Pride Flag",
        imageUrl: "pansexual.jpg",
        info: "The Pansexual Pride Flag consists of three horizontal stripes in pink, blue, and yellow. Pink is for attraction to women. Blue is for attraction to men. Yellow is for attraction to those who don’t identify with either gender."
    },
    {
        question: "Which pride flag features horizontal stripes in pink, white, and cyan?",
        answers: ["Non-Binary Pride Flag", "Transgender Pride Flag", "Intersex Pride Flag"],
        correctAnswer: "Transgender Pride Flag",
        imageUrl: "transgender.jpg",
        info: "The Transgender Pride Flag features pink, white, and cyan horizontal stripes. Pink is for femininity. Blue is for masculinity. White is for non-binary or intersex individuals."
    },
    {
        question: "Which pride flag is designed with horizontal stripes in pink, purple, blue, green, yellow, orange, and red?",
        answers: ["Inclusive Pride Flag", "Progress Pride Flag", "Aromantic Pride Flag"],
        correctAnswer: "Inclusive Pride Flag",
        imageUrl: "Intersex-inclusive-pride-flag.jpg",
        info: "The Inclusive Pride Flag is designed with horizontal stripes in pink, purple, blue, green, yellow, orange, and red. The flag represents the diversity and inclusivity of the LGBTQ+ community, with each color symbolizing different identities and experiences."
    }
];

let currentQuestion = 0;
let score = 0;

const questionNumberText = document.getElementById('question-number');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options');
const resultPanel = document.getElementById('result-panel');
const questionContainer = document.getElementById('questionContainer');
const resultText = document.getElementById('result');
const flagImage = document.getElementById('flag-image');
const additionalInfo = document.getElementById('additional-info');
const scorePanel = document.getElementById('score-panel');
const scoreText = document.getElementById('score');
const finalImage = document.getElementById('final-image');
const progressBar = document.getElementById('progress-bar');
const nextButton = document.getElementById('next-button');
const nextResultButton = document.getElementById('next-result-button');
const playAgainButton = document.getElementById('play-again-button');


function displayQuestion() {
    const currentQuestionData = quizData[currentQuestion];
    questionNumberText.textContent = `Question ${currentQuestion + 1}/${quizData.length}`;
    questionText.textContent = currentQuestionData.question;
    optionsContainer.innerHTML = currentQuestionData.answers.map(answer => `
        <label class="radio">
            <input type="radio" name="answer" value="${answer}">
            ${answer}
        </label>
    `).join('');
}

function nextOrCheck() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        // User has selected an answer, check it
        checkAnswer();
    } else {
        // User hasn't selected an answer, move to next question
        nextQuestion();
    }
}

function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        const answer = selectedAnswer.value;
        const currentQuestionData = quizData[currentQuestion];
        
        resultText.textContent = answer === currentQuestionData.correctAnswer ? "correct" : "incorrect";
        flagImage.src = currentQuestionData.imageUrl;
        additionalInfo.textContent = currentQuestionData.info;
        resultPanel.style.display = "block";

        if (answer === currentQuestionData.correctAnswer) {
            score++;
        }

        // Hide the question container
        questionContainer.style.display = "none";

        // Show the 'Next' button for showing next question
        nextButton.style.display = "block";
        nextResultButton.style.display = "none";
    }
}

function nextQuestion() {
    // Move to the next question
    currentQuestion++;

    // Check if there are more questions
    if (currentQuestion < quizData.length) {
        displayQuestion();
        // Show the question container
        questionContainer.style.display = "block";

        // Hide the result panel
        resultPanel.style.display = "none";
    } else {

        // Quiz completed, show final score
        showScore();
    }
    
    // Hide the 'Next' button for showing next question
    nextButton.style.display = "none";
    nextResultButton.style.display = "block";
}

function showScore() {
     // Hide the result panel
    resultPanel.style.display = "none";
    
    // Calculate the score percentage
    const scorePercentage = (score / quizData.length) * 100;

    // Set the text of the score paragraph element
    const scoreMessage = `You scored ${score} out of ${quizData.length} answers. According to my calculations that is (${scorePercentage.toFixed(2)}%). Here, you receive a happy pride dog as a gift:`;
    scoreText.textContent = scoreMessage;

    // Show the score panel
    scorePanel.style.display = 'block';

    // Show the play again button
    playAgainButton.style.display = 'block';
}


function restartQuiz() {
    // Reset variables
    currentQuestion = 0;
    score = 0;

    // Show the first question
    displayQuestion();

    // Hide the score panel
    scorePanel.style.display = 'none';

    // Show the progress bar
    progressBar.style.display = 'block';

    // Hide the play again button
    playAgainButton.style.display = 'none';

    // Reset the container content
    questionContainer.style.display = 'block';
    resultPanel.style.display = 'none';
}


// Initial display
displayQuestion();
