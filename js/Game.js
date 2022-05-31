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

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin(){
        var hidersLeft = document.querySelectorAll('li.hide');
        if (hidersLeft.length === 0) {
            return true;
        } else {
            return false;
        }
    };


    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        this.missed = this.missed + 1;
        const yourHearts = document.querySelector('.tries img[src="images/liveHeart.png"]');
        yourHearts.src = "images/lostHeart.png";
        if (this.missed === 5){
            this.gameOver(false);
        }
    };

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        const overlay = document.querySelector('#overlay');
        overlay.style.display = "block";
        overlay.classList.remove("start");
        const gameOverMessage = document.querySelector('#game-over-message');

        if (gameWon){
            overlay.classList.remove("lose");
            overlay.classList.add("win");
            gameOverMessage.innerHTML = "What a win! Nice going!"
        } else {
            overlay.classList.remove("win");
            overlay.classList.add("lose");
            gameOverMessage.innerHTML = "That's a tough loss. Chin up guy."
        }
    };

    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(letter) {
        if(letter.tagName === "BUTTON") {
            letter.disabled = true;
            if(!this.activePhrase.checkLetter(letter.textContent)){
                letter.classList.add('wrong');
                this.removeLife();
            } else {
                this.activePhrase.showMatchedLetter(letter.textContent);
                letter.classList.add('chosen');
                if(this.checkForWin()) {
                    this.gameOver(true);
                }
            }
        }
    };


    resetALL(){
        let heartsToReset = document.querySelectorAll('.tries img[src="images/lostHeart.png"]').length;
        for (var i = 0; i < heartsToReset; ++i){
            document.querySelector('.tries img[src="images/lostHeart.png"]').src = "images/liveHeart.png";
        }
        this.missed = 0;

        const usedKeys = [...document.querySelectorAll('.key.chosen'), ...document.querySelectorAll('.key.wrong')];
        usedKeys.forEach((key, i) => {
            if (key.classList.contains('chosen')){
                key.classList.remove('chosen');
            }
            else if (key.classList.contains('wrong')){
                key.classList.remove('wrong');
            }
            key.disabled = false;
        });

        this.activePhrase.removePhrase();
    }

}