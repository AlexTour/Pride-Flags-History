const quizData = [
    {
        question: "How many colors are there in the original rainbow flag?",
        answers: ["Six", "Seven", "Eight"],
        correctAnswer: "Six",
        imageUrl: "https://example.com/image1.jpg",
        info: "The original rainbow flag consists of six colors: red, orange, yellow, green, blue, and violet, symbolizing the diversity of the LGBTQ+ community."
    },
    {
        question: "Which pride flag features five horizontal stripes in  pink, purple, and blue?",
        answers: ["Progress Pride Flag", "Bisexual Pride Flag", "Non-Binary Pride Flag"],
        correctAnswer: "Bisexual Pride Flag",
        imageUrl: "https://example.com/image2.jpg",
        info: "The Bisexual Pride Flag features five horizontal stripes in shades of pink, purple, and blue. The pink stripe represents same-sex attraction, the blue stripe represents opposite-sex attraction, and the purple stripe represents the attraction to both sexes, symbolizing bisexuality."
    },
    {
        question: "Which pride flag consists of nine horizontal stripes in pink, purple, blue, green, yellow, orange, red, brown, and black?",
        answers: ["Non-Binary Pride Flag", "Progress Pride Flag", "Pansexual Pride Flag"],
        correctAnswer: "Progress Pride Flag",
        imageUrl: "https://example.com/image4.jpg",
        info: "The Progress Pride Flag is an updated version of the traditional rainbow flag. It features nine horizontal stripes in the colors pink, red, orange, yellow, green, blue, purple, black, and brown. The additional black and brown stripes are meant to represent marginalized LGBTQ+ communities of color and those living with HIV/AIDS, while the white, pink, and blue stripes represent transgender individuals, non-binary individuals, and those who are intersex."
    },
    {
        question: "Which pride flag consists of five horizontal stripes in shades of pink, purple, and blue, with a pink triangle at the left?",
        answers: ["Lesbian Pride Flag", "Bisexual Pride Flag", "Transgender Pride Flag"],
        correctAnswer: "Lesbian Pride Flag",
        imageUrl: "https://example.com/image6.jpg",
        info: "The Lesbian Pride Flag consists of five horizontal stripes in shades of pink, purple, and blue, with a pink triangle at the left. It represents love and attraction among women."
    },
    {
        question: "Which pride flag is designed with a rainbow gradient and includes a chevron shape?",
        answers: ["Inclusive Pride Flag", "Progress Pride Flag", "Non-Binary Pride Flag"],
        correctAnswer: "Inclusive Pride Flag",
        imageUrl: "https://example.com/image7.jpg",
        info: "The Inclusive Pride Flag is designed with a rainbow gradient and includes a chevron shape at the bottom, representing forward progress and inclusivity within the LGBTQ+ community."
    },
    {
        question: "Which pride flag features a black background with a large gray ace in the center, surrounded by four horizontal stripes?",
        answers: ["Asexual Pride Flag", "Pansexual Pride Flag", "Genderqueer Pride Flag"],
        correctAnswer: "Asexual Pride Flag",
        imageUrl: "https://example.com/image9.jpg",
        info: "The Asexual Pride Flag features a black background with a large gray ace (a symbol of asexuality) in the center, surrounded by four horizontal stripes. The top stripe is purple, representing community; the second stripe is gray, representing gray-asexuality and demisexuality; the third stripe is white, representing sexuality; and the bottom stripe is black, representing asexuality."
    },
    {
        question: "Which pride flag consists of seven horizontal stripes in pink, blue, and lavender?",
        answers: ["Pansexual Pride Flag", "Genderqueer Pride Flag", "Progress Pride Flag"],
        correctAnswer: "Pansexual Pride Flag",
        imageUrl: "https://example.com/image10.jpg",
        info: "The Pansexual Pride Flag consists of seven horizontal stripes in pink, blue, and lavender. The pink stripe represents attraction to females, the blue stripe represents attraction to males, and the lavender stripe represents attraction to individuals regardless of gender or sex."
    },
    {
        question: "Which pride flag features horizontal stripes in pink, white, and cyan?",
        answers: ["Non-Binary Pride Flag", "Transgender Pride Flag", "Intersex Pride Flag"],
        correctAnswer: "Transgender Pride Flag",
        imageUrl: "https://example.com/image11.jpg",
        info: "The Transgender Pride Flag features horizontal stripes in pink, white, and cyan. The pink stripe represents femininity, the blue stripe represents masculinity, and the white stripe represents non-binary or intersex individuals."
    },
    {
        question: "Which pride flag is designed with horizontal stripes in shades of brown and black, with a pink stripe at the top?",
        answers: ["Lesbian Pride Flag", "Transgender Pride Flag", "Progress Pride Flag"],
        correctAnswer: "Lesbian Pride Flag",
        imageUrl: "https://example.com/image18.jpg",
        info: "The Lesbian Pride Flag is designed with horizontal stripes in shades of brown and black, with a pink stripe at the top. The flag represents the diverse experiences and identities of lesbians around the world."
    },
    {
        question: "Which pride flag is designed with horizontal stripes in pink, purple, blue, green, yellow, orange, and red?",
        answers: ["Inclusive Pride Flag", "Progress Pride Flag", "Aromantic Pride Flag"],
        correctAnswer: "Inclusive Pride Flag",
        imageUrl: "https://example.com/image20.jpg",
        info: "The Inclusive Pride Flag is designed with horizontal stripes in pink, purple, blue, green, yellow, orange, and red. The flag represents the diversity and inclusivity of the LGBTQ+ community, with each color symbolizing different identities and experiences."
    }
];

let currentQuestion = 0;
let score = 0;

const questionContainer = document.getElementById('question-container');
const questionNumberText = document.getElementById('question-number');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options');
const resultPanel = document.getElementById('result-panel');
const resultText = document.getElementById('result');
const flagImage = document.getElementById('flag-image');
const additionalInfo = document.getElementById('additional-info');
const scorePanel = document.getElementById('score-panel');
const scoreText = document.getElementById('score');
const finalImage = document.getElementById('final-image');
const progressBar = document.getElementById('progress-bar');


function displayQuestion() {
    const currentQuestionData = quizData[currentQuestion];
    questionNumberText.textContent = `Question ${currentQuestion + 1} of ${quizData.length}:`;
    questionText.textContent = currentQuestionData.question;
    optionsContainer.innerHTML = currentQuestionData.answers.map(answer => `
        <label class="radio">
            <input type="radio" name="answer" value="${answer}">
            ${answer}
        </label>
    `).join('');
}

// Function to check the answer
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

        // Increment current question
        currentQuestion++;

        // Update progress bar
        const progress = (currentQuestion / quizData.length) * 100;
        progressBar.innerHTML = `<div class="progress-bar-fill" style="width: ${progress}%;"></div>`;

        // Check if quiz is complete
        if (currentQuestion < quizData.length) {
            displayQuestion();
        } else {
            showScore();
        }
    }
}

function nextQuestion() {
    checkAnswer();

    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        displayQuestion();
    } else {
        // Quiz completed, show final score
        const scorePercentage = (score / quizData.length) * 100;
        const scoreText = `Your score: ${score} out of ${quizData.length} (${scorePercentage.toFixed(2)}%)`;
        questionContainer.innerHTML += `<div id="score-panel"><h2>${scoreText}</h2></div>`;
        document.getElementById('progress-bar').style.display = 'none';
    }
}

// Initial display
displayQuestion();
