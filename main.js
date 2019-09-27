(function () {

const question1 = new Question(
    "Geografi",
    "Vilket är världens högsta berg?",
    "Mount Everest",
    [
        "Mount Everest",
        "K2",
        "Kilamanjaro"
    ]
);
const question2 = new Question(
    "Biologi",
    "Vad är betecking för guld?",
    "AG",
    [
        "ZE",
        "AG",
        "kY"
    ]
);
const question3 = new Question(
    "Biologi2",
    "Vad är betecking för guld?",
    "AG",
    [
        "ZE",
        "AG",
        "kY"
    ]
);
const question4 = new Question(
    "Biologi3",
    "Vad är betecking för guld?",
    "AG",
    [
        "ZE",
        "AG",
        "kY"
    ]
);

const quiz = new Quiz([
    question1,
    question2,
    question3,
    question4
]);
//quiz.loadJsonQuestions(json)
quiz.render();

let x = getJSON("https://questions.free.beeceptor.com/");

console.log(x);





})();

