let Score = 0;
const ScoreCounter = document.getElementById("Score")
const Button = document.getElementById("increaser")
const Button5 = document.getElementById("increaser5")
const Buy5 = document.getElementById("buy5")

Button5.disabled = true;

function increaseScore(increase) {
    Score += increase;
    ScoreCounter.textContent = Score;
}

function buy() {
    if (Score >= 50) {
        Score -= 50;
        Button5.disabled = false;
        ScoreCounter.textContent = Score;
    }
}



Button.addEventListener("click", () => increaseScore(1))
Buy5.addEventListener("click", () => buy())
Button5.addEventListener("click", () => increaseScore(5))