/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }


    /**
    * Display phrase on game board
    */
    addPhraseToDisplay(){
        const phraseElement = document.querySelector('#phrase ul');
        for (let i = 0; i < this.phrase.length; ++i){
            let createLetter = document.createElement('li');
            if (this.phrase[i] === ' ') {
                createLetter.className = 'space';
            }
            else {
                createLetter.className = `hide letter ${this.phrase[i]}`;
            }
            createLetter.innerHTML =  this.phrase[i];
            phraseElement.append(createLetter);
        }
    }

    /**
    * Remove phrase on game board
    */
     removePhrase() {
        const phraseList = document.querySelector('#phrase ul');
        const phraseListLetters = phraseList.children;
        [...phraseListLetters].forEach((letterElement, i) => {
          phraseList.removeChild(letterElement);
        });
      }

    /**
     * check to see if the letter selected by the player matches a letter in the phrase.
     */
    checkLetter(letter){
        return this.phrase.includes(letter);
    }


    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter){
        var letterDomElements = document.querySelectorAll(`.${letter}`);
        letterDomElements.forEach((letterDomElement,i) => {
            if (letterDomElement.classList.contains(letter)) {
                letterDomElement.classList.remove('hide');
                letterDomElement.classList.add('show');
            }
        });
    }


}