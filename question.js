class Question {
    constructor(category, question, correctAnswers, options) {
        this.category = category;
        this.question = question;
        this.options = options;
        this.correctAnswers = correctAnswers;
        this.userAnswer = null;
    }
    isCorrect(option) {
        if (this.correctAnswers.find(o => o === option)) {
            return true;
        }
        return false;
    }
}