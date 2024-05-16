const quizData = [
    {
        question: "How many colors are there in the original rainbow flag?",
        answers: ["Six", "Seven", "Eight"],
        correctAnswer: "Six",
        imageUrl: "https://example.com/image1.jpg",
        info: "The original rainbow flag consists of six colors: red, orange, yellow, green, blue, and violet, symbolizing the diversity of the LGBTQ+ community."
    },
    {
        question: "Which pride flag features five horizontal stripes in black, brown, red, orange, and yellow?",
        answers: ["Progress Pride Flag", "Bisexual Pride Flag", "Non-Binary Pride Flag"],
        correctAnswer: "Bisexual Pride Flag",
        imageUrl: "https://example.com/image2.jpg",
        info: "The Bisexual Pride Flag features five horizontal stripes in shades of pink, purple, and blue. The pink stripe represents same-sex attraction, the blue stripe represents opposite-sex attraction, and the purple stripe represents the attraction to both sexes, symbolizing bisexuality."
    },
    {
        question: "Which pride flag features a pink triangle on a black background?",
        answers: ["Progress Pride Flag", "Lesbian Pride Flag", "Asexual Pride Flag"],
        correctAnswer: "Asexual Pride Flag",
        imageUrl: "https://example.com/image3.jpg",
        info: "The Asexual Pride Flag consists of a black background with a large gray ace (a symbol of asexuality) in the center, surrounded by four horizontal stripes. The top stripe is purple, representing community; the second stripe is gray, representing gray-asexuality and demisexuality; the third stripe is white, representing sexuality; and the bottom stripe is black, representing asexuality."
    },
    {
        question: "Which pride flag consists of nine horizontal stripes in pink, purple, blue, green, yellow, orange, red, brown, and black?",
        answers: ["Non-Binary Pride Flag", "Progress Pride Flag", "Pansexual Pride Flag"],
        correctAnswer: "Progress Pride Flag",
        imageUrl: "https://example.com/image4.jpg",
        info: "The Progress Pride Flag is an updated version of the traditional rainbow flag. It features nine horizontal stripes in the colors pink, red, orange, yellow, green, blue, purple, black, and brown. The additional black and brown stripes are meant to represent marginalized LGBTQ+ communities of color and those living with HIV/AIDS, while the white, pink, and blue stripes represent transgender individuals, non-binary individuals, and those who are intersex."
    },
    {
        question: "Which pride flag features the colors black, gray, white, and purple?",
        answers: ["Demisexual Pride Flag", "Polysexual Pride Flag", "Asexual Pride Flag"],
        correctAnswer: "Demisexual Pride Flag",
        imageUrl: "https://example.com/image5.jpg",
        info: "The Demisexual Pride Flag features a black triangle on a white background, symbolizing asexuality, with a gray stripe representing gray-asexuality or demisexuality, and a purple stripe representing community and pride."
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
        question: "Which pride flag is made up of horizontal stripes in black, brown, red, orange, and yellow?",
        answers: ["Bisexual Pride Flag", "Lesbian Pride Flag", "Pansexual Pride Flag"],
        correctAnswer: "Bisexual Pride Flag",
        imageUrl: "https://example.com/image8.jpg",
        info: "The Bisexual Pride Flag features horizontal stripes in black, brown, red, orange, and yellow. Each color has its own significance: pink represents same-sex attraction, blue represents opposite-sex attraction, and the middle stripe (purple or lavender) represents the attraction to both sexes, symbolizing bisexuality."
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
        question: "Which pride flag is made up of horizontal stripes in red, white, pink, purple, blue, and black?",
        answers: ["Polysexual Pride Flag", "Aromantic Pride Flag", "Genderqueer Pride Flag"],
        correctAnswer: "Polysexual Pride Flag",
        imageUrl: "https://example.com/image12.jpg",
        info: "The Polysexual Pride Flag is made up of horizontal stripes in red, white, pink, purple, blue, and black. It represents individuals who are attracted to multiple genders but not necessarily all genders."
    },
    {
        question: "Which pride flag consists of a rainbow with a centered lambda symbol?",
        answers: ["Intersex Pride Flag", "Inclusive Pride Flag", "Progress Pride Flag"],
        correctAnswer: "Intersex Pride Flag",
        imageUrl: "https://example.com/image13.jpg",
        info: "The Intersex Pride Flag consists of a rainbow with a centered lambda symbol, representing intersex individuals. The colors of the rainbow symbolize diversity and the right to be free of shame and secrecy."
    },
    {
        question: "Which pride flag is designed with a rainbow gradient and includes a black triangle at the left?",
        answers: ["Aromantic Pride Flag", "Lesbian Pride Flag", "Inclusive Pride Flag"],
        correctAnswer: "Aromantic Pride Flag",
        imageUrl: "https://example.com/image14.jpg",
        info: "The Aromantic Pride Flag is designed with a rainbow gradient and includes a black triangle at the left. The flag represents individuals who experience little or no romantic attraction to others."
    },
    {
        question: "Which pride flag is made up of horizontal stripes in black, white, purple, blue, green, yellow, and red?",
        answers: ["Non-Binary Pride Flag", "Genderqueer Pride Flag", "Pansexual Pride Flag"],
        correctAnswer: "Non-Binary Pride Flag",
        imageUrl: "https://example.com/image15.jpg",
        info: "The Non-Binary Pride Flag is made up of horizontal stripes in black, white, purple, blue, green, yellow, and red. The flag represents individuals whose gender identity falls outside the traditional binary framework of male and female."
    },
    {
        question: "Which pride flag consists of horizontal stripes in black, gray, white, and purple?",
        answers: ["Genderqueer Pride Flag", "Asexual Pride Flag", "Demisexual Pride Flag"],
        correctAnswer: "Demisexual Pride Flag",
        imageUrl: "https://example.com/image16.jpg",
        info: "The Demisexual Pride Flag consists of horizontal stripes in black, gray, white, and purple. The flag represents individuals who experience limited or no sexual attraction until a strong emotional or romantic connection is formed."
    },
    {
        question: "Which pride flag features horizontal stripes in pink, blue, and yellow, with a centered white crescent moon and star?",
        answers: ["Genderfluid Pride Flag", "Non-Binary Pride Flag", "Intersex Pride Flag"],
        correctAnswer: "Genderfluid Pride Flag",
        imageUrl: "https://example.com/image17.jpg",
        info: "The Genderfluid Pride Flag features horizontal stripes in pink, blue, and yellow, with a centered white crescent moon and star. The pink stripe represents femininity, the blue stripe represents masculinity, and the yellow stripe represents non-binary or non-conforming genders. The white crescent moon represents fluidity, while the white star represents different genders being present within the genderfluid community."
    },
    {
        question: "Which pride flag is designed with horizontal stripes in shades of brown and black, with a pink stripe at the top?",
        answers: ["Lesbian Pride Flag", "Transgender Pride Flag", "Progress Pride Flag"],
        correctAnswer: "Lesbian Pride Flag",
        imageUrl: "https://example.com/image18.jpg",
        info: "The Lesbian Pride Flag is designed with horizontal stripes in shades of brown and black, with a pink stripe at the top. The flag represents the diverse experiences and identities of lesbians around the world."
    },
    {
        question: "Which pride flag consists of horizontal stripes in pink, yellow, blue, pink, yellow, and blue?",
        answers: ["Genderqueer Pride Flag", "Genderfluid Pride Flag", "Polysexual Pride Flag"],
        correctAnswer: "Genderfluid Pride Flag",
        imageUrl: "https://example.com/image19.jpg",
        info: "The Genderfluid Pride Flag consists of horizontal stripes in pink, yellow, and blue, repeating twice. The pink stripe represents femininity, the blue stripe represents masculinity, and the yellow stripe represents non-binary or non-conforming genders."
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


function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        const answer = selectedAnswer.value;
        const currentQuestionData = quizData[currentQuestion];
        const isCorrect = answer === currentQuestionData.correctAnswer;
        
        questionContainer.innerHTML += `
            <div class="results">
                <p>Your answer is ${isCorrect ? 'correct' : 'incorrect'}.</p>
                <img src="${currentQuestionData.imageUrl}" alt="Flag Image" class="flag-image">
                <p class="additional-info">${currentQuestionData.info}</p>
            </div>
        `;

        if (isCorrect) {
            score++;
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
