function checkAnswers() {
    var correctAnswers = ["a", "a", "a", "a", "b", "b"];
    var userAnswers = [];
    userAnswers.push(document.querySelector('input[name="q1"]:checked').value);
    userAnswers.push(document.querySelector('input[name="q2"]:checked').value);
    userAnswers.push(document.querySelector('input[name="q3"]:checked').value);
    userAnswers.push(document.querySelector('input[name="q4"]:checked').value);
    userAnswers.push(document.querySelector('input[name="q5"]:checked').value);
    userAnswers.push(document.querySelector('input[name="q6"]:checked').value);

    var score = 0;
    var resultText = "<p>Results:</p>";
    for (var i = 0; i < correctAnswers.length; i++) {
        if (userAnswers[i] === correctAnswers[i]) {
            score++;
            resultText += "<p>Question " + (i+1) + ": Correct!</p>";
        } else {
            resultText += "<p>Question " + (i+1) + ": Wrong! The correct answer is " + getCorrectAnswer(correctAnswers[i]) + "</p>";
        }
    }

    resultText += "<p>You got " + score + " out of " + correctAnswers.length + " correct!</p>";
    document.getElementById("result").innerHTML = resultText;
}

function getCorrectAnswer(option) {
    switch (option) {
        case "a":
            return "The original rainbow flag consists of six colors: red, orange, yellow, green, blue, and violet, symbolizing the diversity of the LGBTQ+ community.";
        case "b":
            return "The Transgender Pride Flag features a black stripe at the top, representing transgender individuals, a white stripe in the middle, representing non-binary and intersex individuals, and a light blue stripe at the bottom, representing those who identify as male.";
        case "c":
            return "The Bisexual Pride Flag includes the colors pink, purple, and blue. Pink represents same-sex attraction, blue represents opposite-sex attraction, and purple represents the combination of both, symbolizing bisexuality.";
        case "d":
            return "The Progress Pride Flag features the colors black, brown, red, orange, yellow, green, blue, and purple, along with the traditional rainbow colors. It is designed to be inclusive of marginalized communities within the LGBTQ+ spectrum.";
        case "e":
            return "The Lesbian Pride Flag consists of three horizontal stripes in shades of pink, red, and white. The colors symbolize love, femininity, and community among lesbians.";
        case "f":
            return "The Intersex Pride Flag features a yellow background with a purple circle in the center. The yellow represents hermaphrodite (intersex) infants who were assigned female or male at birth, and the purple circle symbolizes the unity of intersex people and their resilience against stigmatization and prejudice.";
        default:
            return "Unknown";
    }
}
