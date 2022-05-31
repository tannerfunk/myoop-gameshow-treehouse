/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */




var game;
var gameCount = 1;
startButton = document.querySelector('#btn__reset');
startButton.addEventListener('click', function(){
    if(firstGame()){
        console.log("what's up")
        game = new Game;
        game.startGame();
        gameCount = gameCount + 1;
        
    }
    if(!firstGame()){
        console.log("with pluto")
        game.resetALL();
        game = new Game;
        game.startGame();
    }
});



uiKeyboard = document.querySelector('#qwerty');

uiKeyboard.addEventListener('click', (e)  => {
    if(e.target.tagName === 'BUTTON') {
    game.handleInteraction(e.target);
    }
  });


/**
* checks to see if it's the first game or not
* @return {Boolean}
*/
function firstGame() {
    return gameCount === 1;
  }


    
    
  
 