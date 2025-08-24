let Score = 0;
const ScoreCounter = document.getElementById("Score")
const Button = document.getElementById("increaser")

function increaseScore() {
    Score++;
    ScoreCounter.textContent = Score;
}

Button.addEventListener("click", increaseScore)

