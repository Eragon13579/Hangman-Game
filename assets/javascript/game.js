var wordList = ["ozzyosborne", "bonjovie", "queen", "metallica", "ac/dc", "vanhalen", "gunnroses", "defleppard",
"journey", "joanjett", "poison", ]

var chosenWord = "";
var letterInChosenWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var lettersGuessed = [];

var winCounter = 0;
var lossCounter = 1;
var numGuesses = 15;

function startGame(){
/*
1. computer chooses a word from word list
2. computer breaks down that random word as letters and replace them with
underscores _
3. add those underscores to the HTML to display to the player
4. numguesses always starts equal to 15, and blankandsuccess is an empty array, 
and letters guessed starts empty.
*/
lettersGuessed = [];
console.log("This is the letters we have guessed so far: ", lettersGuessed);
numGuesses = 15;
blanksAndSuccesses = [];


chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
lettersInChosenWord = chosenWord.split("");
numBlanks = lettersInChosenWord.length;
console.log(chosenWord);
console.log(numBlanks);

for(var i = 0; i < numBlanks; i++){
    blanksAndSuccesses.push("_");
}
console.log(blanksAndSuccesses);
document.getElementById('word-blank').innerHTML = blanksAndSuccesses.join(" ");
document.getElementById('guesses-left').innerHTML = numGuesses;



}


function checkLetters(letter){
    /*
    1. Compares to see if the letter the player picks matches any of the letters in the word
    2. I want a conditional statement to determine if the letter the player picked
    is in the word. If so, do something, if not, do something else
    3. If the user is wrong we want to decrease the numGuesses variable by one
    */

    var letterInWord = false;

    lettersGuessed.push(letter)

    for(var i = 0; i < numBlanks; i++){
    	
        if(chosenWord[i] == letter){
            letterInWord = true;
           
        }

    }

    if(letterInWord){
        for(i = 0; i < numBlanks; i++){
            if(chosenWord[i] == letter){
            blanksAndSuccesses[i] = letter;
            
        }
        
        }
    }
    else{
        numGuesses --;
        
    }

    


}


function roundComplete(){
    /*
    1. Its going to update the HTML with letters that are in the word
    2. Its going to update the HTML with guesses we have left
    3. Its going to update the HTML to show the letters we have guessed
    4. Its going to determine whether the player won the game or not
    */

    document.getElementById('word-blank').innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById('guesses-left').innerHTML = numGuesses;
    document.getElementById('letters-guessed').innerHTML = lettersGuessed.join(" ");


    
    console.log(lettersInChosenWord);
    console.log(blanksAndSuccesses);
    if(lettersInChosenWord.join(" ") === blanksAndSuccesses.join(" ")){
        winCounter++; 
        document.getElementById('winSound').play();
        alert("You win!");
       
        document.getElementById('win-counter').innerHTML = winCounter;
        startGame();
    }else if(numGuesses === 0){
        document.getElementById('loss-counter').innerHTML  = lossCounter ++;
        document.getElementById('letters-guessed').innerHTML = "";
        alert("You Lose!");        
        startGame();
    }
    else {

    }


}

document.onkeyup = function(event){
    /*
    1. its going to determine the letter that we type in
    2. its going to run it through the CheckLetter function 
    */
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    console.log("this is the letter we typed", letterGuessed)
    checkLetters(letterGuessed)
    roundComplete();


}