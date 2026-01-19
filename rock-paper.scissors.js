let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};
updateScoreElement();
function playGame(playermove) {
  computerMove = pickMove();
  if (playermove === "scissors") {
    if (result === "rock") {
      move = "lose.";
    } else if (result === "paper") {
      move = "win.";
    } else if (result === "Scissors") {
      move = "tie.";
    }
  } else if (playermove === "paper") {
    computerMove = pickMove();

    if (result === "rock") {
      move = "win.";
    } else if (result === "paper") {
      move = "tie.";
    } else if (result === "Scissors") {
      move = "lose.";
    }
  } else if (playGame === "rock") {
    computerMove = pickMove();

    if (result === "rock") {
      move = "tie.";
    } else if (result === "paper") {
      move = "lose.";
    } else if (result === "Scissors") {
      move = "win.";
    }
  }

  if (move === "win.") {
    score.wins += 1;
  } else if (move === "lose.") {
    score.losses += 1;
  } else if (move === "tie.") {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  updateScoreElement();

  document.querySelector(".js-result").innerHTML = `you ${move}`;
  document.querySelector(".js-moves").innerHTML = `
      <img src="images/${playermove}-emoji.png"  class="move-icon">
       <img src="images/${result}-emoji.png"  class="move-icon">`;
}
function pickMove() {
  let computerMove = Math.random();

  if (computerMove >= 0 && computerMove < 1 / 3) {
    result = "rock";
  } else if (computerMove >= 1 / 3 && computerMove < 2 / 3) {
    result = "paper";
  } else if (computerMove >= 2 / 3 && computerMove < 1) {
    result = "Scissors";
  }
  return computerMove;
}
function updateScoreElement() {
  document.querySelector(".js-score").innerHTML =
    ` wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`;
}
