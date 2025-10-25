let Score = 0;
const ScoreCounter = document.getElementById("Score")
const Button = document.getElementById("increaser")
const Button5 = document.getElementById("increaser5")

function increaseScore() {
    Score++;
    ScoreCounter.textContent = Score;
}

Button.addEventListener("click", increaseScore)
Button.addEventListener("click", increaseScore*5)