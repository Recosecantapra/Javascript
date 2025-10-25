let Score = 0;
const ScoreCounter = document.getElementById("Score")
const Button = document.getElementById("increaser")
const Button5 = document.getElementById("increaser5")

function increaseScore(increase) {
    Score += increase;
    ScoreCounter.textContent = Score;
}


Button.addEventListener("click", () => increaseScore(1))
Button5.addEventListener("click", () => increaseScore(5))