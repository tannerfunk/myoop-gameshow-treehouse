/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/*const phrase = new Phrase();
const game = new Game();*/

/*const game = new Game();
game.phrases.forEach((phrase, index) => {
console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
});*/

/*
const logPhrase = (phrase) => {
    console.log(`Phrase - phrase: `, phrase.phrase);
    };
    const game = new Game();
    logPhrase(game.getRandomPhrase());
    logPhrase(game.getRandomPhrase());
    logPhrase(game.getRandomPhrase());
    logPhrase(game.getRandomPhrase());
    logPhrase(game.getRandomPhrase());
    */
/*
    const game = new Game();
    game.getRandomPhrase().addPhraseToDisplay();

    */
   /*
    const game = new Game();
    game.startGame();
    console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
    */


var game;
startButton = document.querySelector('#btn__reset');
startButton.addEventListener('click', function(){
    game = new Game;
    game.startGame();
});