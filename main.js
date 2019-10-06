let x = getJSON("https://latestquestion.free.beeceptor.com");
(function () {
    let questionArray = [];
    x.forEach((question) => {
        questionArray.push(new Question("", question.question, question.correctAnswer, question.options));
})
const quiz = new Quiz(
    questionArray
 );

 quiz.render();


})();

