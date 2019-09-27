class Question {
    constructor(category, question, correctAnswer, options) {
        this.category = category;
        this.question = question;
        this.options = options;
        this.correctAnswer = correctAnswer;
        this.userAnswer = null;
    }
    isCorrect(option) {
        if (option === this.correctAnswer) {
            return true;
        }
        return false;
    }
}