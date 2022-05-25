/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor(){
        this.missed = 0;
        this.phrases = [new Phrase('Nothing but net'), new Phrase("All I will ever be"), new Phrase("I love Allyse"), new Phrase("Those are your thoughts get owned"), new Phrase("aaaaa by kingston")];
        this.activePhrase = null;
    }
    
    
    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        let randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
        return randomPhrase;
    };

    /**
     * Starts game by selecting a random phrase and displaying it to the user.
     */
    startGame(){
        document.querySelector('#overlay').style.display = 'none';
        var phirstFrase = this.getRandomPhrase();
        phirstFrase.addPhraseToDisplay();
        this.activePhrase = phirstFrase;
    }

    handleInteraction(){

    }

    

}