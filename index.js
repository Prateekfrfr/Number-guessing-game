let min = 1;
let max = 100;
let button = document.getElementById("button");
let resetButton = document.getElementById("resetButton");
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");

let randomNum;
let guesses = []; 
let turnCount = 0; 
const maxTurns = 10;

function startNewGame() {
    randomNum = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(randomNum);
    
    guesses = [];
    turnCount = 0;
    p1.innerHTML = "";
    p2.innerHTML = "Previous guesses: ";
    p3.innerHTML = `Turns remaining: ${maxTurns}`;
    
    button.disabled = false;
    resetButton.style.display = "none"; 
}

button.addEventListener("click", () => {
    let input = document.getElementById("box").value;
    input = Number(input); 
    
    if (input < min || input > max) {
        window.alert("Please enter a valid number between 1 and 100!");
        return;
    }
    
    turnCount++; 
    
    if (turnCount > maxTurns) {
        p1.innerHTML = "Game Over! You've used all your turns.";
        button.disabled = true; 
        resetButton.style.display = "block"; 
        return;
    }
    
    guesses.push(input); 
    
    if (input === randomNum) {
        p1.innerHTML = "Congratulations! Your guess was correct.";
        button.disabled = true; 
        resetButton.style.display = "block"; 
    } else if (input > randomNum) {
        p1.innerHTML = "Wrong! Previous guess was too high.";
    } else {
        p1.innerHTML = "Wrong! Previous guess was too low.";
    }
    
    
    p2.innerHTML = "Previous guesses: " + guesses.join(", ");
    p3.innerHTML = `Turns remaining: ${maxTurns - turnCount}`;
});

resetButton.addEventListener("click", startNewGame);


startNewGame();
