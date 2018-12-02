$(document).ready(function () {

    var intervalId = 0;
    var time = 20;
    var wins = 0;
    var losses = 0;
    var questions = [
        {
            question: 'What name was Cheverolet considering before settling on the name "Camaro"?',
            choices: [["The Cougar"], ["The Bullet"], ["The Panther", "c"], ["The Arrow"]]
        },
        {
            question: "Before its debut, what other body style was Chevy considering for the Camaro but never made it to production?",
            choices: [["Four Door Sedan"], ["Station Wagon", "c"], ["Coupé Utility Pickup Muscle car"], ["Pickup Truck"]]
        },
        {
            question: "How many different engine options existed when the Camaro hit the market?",
            choices: [["4"], ["5"], ["6"], ["7", "c"]]
        },
        {
            question: "Of all the first generation model years, which had the most sales?",
            choices: [["1966"], ["1967"], ["1968"], ["1969", "c"]]
        },
        {
            question: "How many Z/28's were built in 1975?",
            choices: [["75"], ["250"], ["700"], ["1", "c"]]
        },
        {
            question: "What was the base price of the very first Camaros released?",
            choices: [["$1,987"], ["$2,572", "c"], ["$8,780"], ["$12,980"]]
        },
        {
            question: "Which car was the second generation Camaro based off of?",
            choices: [["Ferrari", "c"], ["Ford Mustang"], ["Dodge Challenger"], ["Volkswagen Karmann Ghia"]]
        },
    ]

    var gameInSession = false;
    var questionCount = 0;

    function newQuestion() {
        if (questionCount === questions.length) {
            displayScore();
        } else {
            time = 20;
            $(".timerDisp").text("Time remaining: 00:20");
            var currentQuest = questions[questionCount].question;
            $(".questionArea").text(currentQuest);
            $(".buttonArea").empty();
            populateButtons()

            if (!gameInSession) {
                intervalId = setInterval(counting, 1000);
                gameInSession = true;
            }
        }
    }

    function displayScore() {
        var win = $("<p>", {
            text: "Correct: " + wins,
            class: 'score'
        });
        var lose = $("<p>", {
            text: "Incorrect: " + losses,
            class: 'score'
        });

        var reset = $("<button>", {
            text: "Start Over",
            class: 'resetBtn'
        });

        $(".timerDisp").empty();
        $(".questionArea").empty();
        $(".buttonArea").empty();
        $(".buttonArea").append(win);
        $(".buttonArea").append("<p>");
        $(".buttonArea").append(lose);
        $(".buttonArea").append("<p>");
        $(".buttonArea").append(reset);

        $(".resetBtn").click(function () {
            questionCount = 0;
            wins = 0;
            losses = 0;
            newQuestion();
        });
    }

    function populateButtons() {
        var btn1 = $('<button/>', {
            text: questions[questionCount].choices[0][0],
            class: 'button1 choiceButtons'
        });
        $(".buttonArea").append(btn1);
        $(".buttonArea").append("<p>");
        $(".button1").click(function () {
            if ((questions[questionCount].choices[0]).length == 2) {
                clearInterval(intervalId);
                displayCorrectImage()
                questionCount++;
                setTimeout(newQuestion, 3000);
            }
            else {
                clearInterval(intervalId);
                gameInSession = false
                displayWrongImage()
                questionCount++;
                setTimeout(newQuestion, 3000);
            }
        });
        var btn2 = $('<button/>', {
            text: questions[questionCount].choices[1][0],
            class: 'button2 choiceButtons'
        });
        $(".buttonArea").append(btn2);
        $(".buttonArea").append("<p>");
        $(".button2").click(function () {
            if ((questions[questionCount].choices[1]).length == 2) {
                clearInterval(intervalId);
                displayCorrectImage()
                questionCount++;
                setTimeout(newQuestion, 3000);
            }
            else {
                clearInterval(intervalId);
                displayWrongImage()
                questionCount++;
                setTimeout(newQuestion, 3000);
            }
        });

        var btn3 = $('<button/>', {
            text: questions[questionCount].choices[2][0],
            class: 'button3 choiceButtons'
        });
        $(".buttonArea").append(btn3);
        $(".buttonArea").append("<p>");
        $(".button3").click(function () {
            if ((questions[questionCount].choices[2]).length === 2) {
                clearInterval(intervalId);
                displayCorrectImage()
                questionCount++;
                setTimeout(newQuestion, 3000);
            }
            else {
                clearInterval(intervalId);
                displayWrongImage()
                questionCount++;
                setTimeout(newQuestion, 3000);
            }
        });
        var btn4 = $('<button/>', {
            text: questions[questionCount].choices[3][0],
            class: 'button4 choiceButtons'
        });
        $(".buttonArea").append(btn4);
        $(".buttonArea").append("<p>");
        $(".button4").click(function () {
            if ((questions[questionCount].choices[3]).length == 2) {
                clearInterval(intervalId);
                displayCorrectImage()
                questionCount++;
                setTimeout(newQuestion, 3000);

            }
            else {
                clearInterval(intervalId);
                displayWrongImage()
                questionCount++;
                setTimeout(newQuestion, 3000);
            }
        });
    }
    function displayCorrectImage() {
        $(".buttonArea").html("<img src = assets/images/69_chevy_side.jpg width='400px'>");
        wins++
        gameInSession = false;
    }

    function displayWrongImage() {
        $(".buttonArea").html("<img src = assets/images/clunker_camaro.jpg width='400px'>");
        losses++
        gameInSession = false;
    }

    function displayTimeUpImage() {
        $(".buttonArea").html("<img src = assets/images/times_up.jpg width='400px'>");
        losses++
    }







    function counting() {

        if (time > 0) {
            time--;
            $(".timerDisp").text("Time Remaining: 00:" + time);
        }
        else {
            questionCount++;
            displayTimeUpImage();
            clearInterval(intervalId);
            $(".timerDisp").empty();
            $(".timerDisp").text("Times Up!");
            gameInSession = false;
            setTimeout(newQuestion, 3000);

        }

        
    }












    newQuestion();

});