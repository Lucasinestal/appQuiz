class Option {
    constructor(text) {
        this.text = text;
        this.answered = false
    }
    setState (isChecked){
        if(isChecked === true){
            this.answered = true;
        }
        else{
            this.answered = false
        }
    }
    
    
}