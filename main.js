let x = getJSON("https://questionsjson.free.beeceptor.com");
(function () {
/*
const question = new Question(
    "Geografi",
    "Vilket är världens högsta berg?",
    "Mount Everest",
    [
        "Mount Everest",
        "K2",
        "Kilamanjaro"
    ]
);


questionArray = new Question(
    
);


// array som heter question 
// när jag laddar in mitt fråge objekt
// för varje entry, 
*/

//quiz.loadJsonQuestions(json)
let questionArray = [];
x.forEach((question) => {
    questionArray.push(new Question("", question.question, question.correctAnswer, question.options));
})
const quiz = new Quiz(
    questionArray
 );

 quiz.render();


})();

