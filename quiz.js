//  Ibland kan ett alternativ vara rätt, ibland flera.
const filterInput = document.createElement("input");

class Quiz {
    constructor(questions) {
        this.username = null;
        this.questions = questions;
        this.correctAnswer = 0;
        this.falseAnswer = 0;
        this.currentQuestion = 0;
        this.setUsername;
        this.playMode = true;
    }
    render() {
        let final = this.questions[this.questions.length - 1]
        if (this.username === null) {
            this.renderInitView();
        }
        else if (this.playMode === true && this.correctAnswer + this.falseAnswer < this.questions.length) {
            this.renderPlayView();
        }
        
        else if (final === this.questions[this.currentQuestion]) {
            this.renderResultView();
        }
    }
    setUsername(username) {
        this.username = username.value;
    }
    filter(count) {
        if (parseInt(count.value) > this.questions.length) {
            this.questions;
            
        }
        this.questions = this.questions.slice(0, parseInt(count.value));
    }
    setAnswer(isCorrect) {
        if (isCorrect) { this.correctAnswer += 1; }
        else { this.falseAnswer += 1; }
    }
    checkAnswer(checkbox, answer) {
        const isChecked = checkbox.checked;
        if (isChecked) {
            const currentQuestion = this.questions[this.currentQuestion];
            currentQuestion.userAnswer = answer;
            const isCorrect = currentQuestion.isCorrect(answer)
            if (isCorrect) {
                this.correctAnswer += 1;
            }
            else {
                this.falseAnswer += 1;
            }
            this.toggleCheckbox(true, answer);
        }
        else {
            const currentQuestion = this.questions[this.currentQuestion];
           

            if (currentQuestion.correctAnswer === currentQuestion.userAnswer){
                this.correctAnswer -= 1;
            }
            else{
                this.falseAnswer -= 1;
            }
            this.toggleCheckbox(false, answer);
        }
        let final = this.questions[this.questions.length - 1]
        if (final === this.questions[this.currentQuestion]) {
            
            this.toggleCompleteButton(true);
        }
        else {
            this.toggleCompleteButton(false);
            
            
        }
    }
    toggleCheckbox(disable, answer) {
        let cbxs = document.querySelectorAll("input.checkbox");
        cbxs.forEach(function (cbx) {
            if (disable) {
                if (cbx.id !== answer) {
                    cbx.disabled = false;
                }
                else {
                    cbx.disabled = false;
                }
            }
            else {
                cbx.disabled = false;
            }
        });
    }


    toggleQuestion(prev) {
        const content = document.getElementById('content');
        content.innerHTML = "";
        if (prev) {
            if (this.currentQuestion >= 0) {

                this.currentQuestion -= 1;
            }
        }
        else {
            if (this.currentQuestion < this.questions.length) {
                this.currentQuestion += 1;
            }
        }


    }
    toggleCompleteButton(show) {
        const content = document.getElementById("content");
        const completeButton = document.getElementById('complete-quiz-button');
        if (show) {
           
            const completeButton = document.createElement('button');
            completeButton.id = 'complete-quiz-button';
            completeButton.innerHTML = "Complete"
            completeButton.classList.add('btn-success');
            completeButton.onclick = () => this.render();
            content.append(completeButton);
        } else {

            if (completeButton) {
                completeButton.remove();
            }
        }


    }
    nextQuestion() {
        const content = document.getElementById("content");
        content.innerHTML = "";

        const questionList = document.createElement("ul");
        questionList.id = "question-list";

        content.append(questionList);

        const question = this.questions[this.currentQuestion];

        const questionItem = document.createElement("li");
        questionItem.innerHTML = question.question;
        questionList.append(questionItem);

        question.options.map((o) => {
            const wrapper = document.createElement('div');
            wrapper.style.display = 'block';
            const label = document.createElement("label");
            //label.innerHTML = o;

            const p = document.createElement('span');
            p.innerHTML = o;

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = false;
            checkbox.id = o;
            checkbox.classList.add("checkbox");
            checkbox.onchange = () => this.checkAnswer(checkbox, o);

            wrapper.append(label);
            wrapper.append(checkbox);
            wrapper.append(p);
            questionList.append(wrapper);
        });

        if (question.userAnswer != null) {
            const answer = question.options.find(o => {
                return o === question.userAnswer;
            });
            const checkbox = document.getElementById(answer);
            checkbox.checked = true;
            this.checkAnswer(checkbox, answer);


        }
        this.renderStepButtons();


    }
    renderStepButtons() {
        const content = document.getElementById("content");
        const nextButton = document.createElement("button");
        nextButton.id = "nBtn"
        nextButton.innerHTML = "Nästa";
        nextButton.onclick = () => {
            this.toggleQuestion(false);
            this.nextQuestion();
        
        }
        const prevButton = document.createElement("button");
        prevButton.id = "pBtn"
        prevButton.innerHTML = "Back";
        prevButton.onclick = () => {
            this.toggleQuestion(true);
            this.nextQuestion();
        }

        if (this.currentQuestion === 0) {
            content.append(nextButton);
        }
        else if (this.currentQuestion > 0 && this.currentQuestion !== this.questions.length - 1) {
            
            content.append(prevButton);
            content.append(nextButton);
        }
        else {
            content.append(prevButton);

        }


    }
    startQuiz() {
        this.playMode = true;
        this.render();
    }
    renderInitView() {

        const content = document.getElementById("content");

        const usernameInput = document.createElement("input");
        usernameInput.id = "username";
        usernameInput.type = "text";
        usernameInput.placeholder = " Name";
        usernameInput.classList.add("form-control");
        usernameInput.onchange = () => this.setUsername(usernameInput);
        




        
        filterInput.id = "filter";
        filterInput.type = "number";
        filterInput.placeholder = " Select number of questions"
        filterInput.classList.add("form-control");
        filterInput.onchange = () => this.filter(filterInput);


        const playButton = document.createElement('button');
        playButton.id = 'play-button';
        playButton.innerHTML = 'Play';
        playButton.style.display = 'block';
        playButton.classList.add("btn.btn-primary");
        playButton.onclick = () => this.startQuiz();



        content.append(usernameInput);
        content.append(filterInput);
        content.append(playButton);
    }
    renderResultView() {
        const content = document.getElementById("content");
        content.innerHTML = "";
        
        console.log(this.correctAnswer + this.falseAnswer);
        let totalScore = this.correctAnswer + this.falseAnswer;
        const label = document.createElement('label');
        label.innerHTML = `Du fick ${this.correctAnswer} score av ${totalScore}`;
        label.id ="scoreLabel"
        score.append(label);
        
    }
    renderPlayView() {

        this.nextQuestion();
    }
    
}