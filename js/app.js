/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */




var game;
var gameCount = 1;
startButton = document.querySelector('#btn__reset');
//only resets if there is something to be reset! To avoid errors of resetting null properties.
startButton.addEventListener('click', function(){
    if(firstGame()){
        game = new Game;
        game.startGame();
        gameCount = gameCount + 1;
        
    }
    if(!firstGame()){
        game.resetALL();
        game = new Game;
        game.startGame();
    }
});



uiKeyboard = document.querySelector('#qwerty');
//listening for the uiKeyboard clicks!
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


    
    
  
 