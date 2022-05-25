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
}