$(document).ready(function () {

    var intervalId = 0;
    var time = 30;
    var questions = [
        {
            question: 'What name was Cheverolet considering before settling on the name "Camaro"?',
            choice_1: "The Cougar",
            choice_2: "The Bullet",
            choice_correct: "The Panther",
            choice_4: "The Arrow"
        },
        {
            question: "Before its debut, what other body style was Chevy considering for the Camaro but never made it to production?",
            choice_1: "Four Door Sedan",
            choice_correct: "Station Wagon",
            choice_3: "Coupé Utility Pickup Muscle car",
            choice_4: "Pickup Truck"
        },
       {
            question: "How many different engine options existed when the Camaro hit the market?",
            choice_1: "4",
            choice_2: "5",
            choice_3: "6",
            choice_correct: "7"
        },
        {
            question: "Of all the first generation model years, which had the most sales?",
            choice_1: "1966",
            choice_2: "1967",
            choice_3: "1968",
            choice_correct: "1969"
        },
         {
            question: "What was the base price of the very first Camaros released?",
            choice_1: "$1,987",
            choice_correct: "$2,572",
            choice_3: "$8,780",
            choice_4: "$12,980"
        },
        {
            question: "How many Z/28's were built in 1975?",
            choice_1: "75",
            choice_2: "250",
            choice_3: "700",
            choice_correct: "1"
        },
        {
            question: "What was the base price of the very first Camaros released?",
            choice_1: "$1,987",
            choice_correct: "$2,572",
            choice_3: "$8,780",
            choice_4: "$12,980"
        },
        {
            question: "Which car was the second generation Camaro based off of?",
            choice_correct: "Ferrari",
            choice_2: "Ford Mustang",
            choice_3: "Dodge Challenger",
            choice_4: "Volkswagen Karmann Ghia"
        },
    ]

    var gameInSession = false;
    var questionCount = 2 ;

    function newQuestion() {
        if (questionCount === questions.length) {
            return
        } else {
            $(".timerDisp").text("Time remaining: 00:30");
            var x = questions[questionCount].question;
            var currentQuest = x;
            console.log(typeof currentQuest);
            console.log(currentQuest);
            console.log(x);
            questionCount++;
            $(".questionArea").text(currentQuest);
            if (!gameInSession) {
                intervalId = setInterval(counting, 1000);
                gameInSession = true;
            }
        }
    }

    function counting() {

        if (time > 0) {
            time--;
            $(".timerDisp").text("Time Remaining: 00:" + time);
        }
        else {
            $(".timerDisp").text("Times Up!");
        }

    }












    newQuestion();

});