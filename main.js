let x = getJSON("https://questionnew.free.beeceptor.com");
(function () {
    let questionArray = [];
    x.forEach((question) => {
        questionArray.push(new Question("", question.question, question.correctAnswers, question.options));
})
const quiz = new Quiz(
    questionArray
 );

 quiz.render();
 
 
})();

