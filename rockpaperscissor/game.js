let possibility = confirm("Do you want to play.");

if (possibility) {
  let user = prompt("You have to choose between ROCK, PAPER, SCISSOR.");
  let userChoice = user.trim().toLowerCase().toString();
  if (
    userChoice === "rock" ||
    userChoice === "paper" ||
    userChoice === "scissor"
  ) {
    let random = Math.floor(Math.random() * 3 + 1);
    let computerChoice =
      random === 1 ? "rock" : random === 2 ? "paper" : "scissor";
    let result =
      userChoice === computerChoice
        ? `You chose ${userChoice}\n Computer chose ${computerChoice}\n RESULT = MATCH TIED`
        : userChoice === "rock" && computerChoice === "paper"
        ? `You chose ${userChoice}\n Computer chose ${computerChoice}\n RESULT = COMPUTER WON`
        : userChoice === "paper" && computerChoice === "scissor"
        ? `You chose ${userChoice}\n Computer chose ${computerChoice}\n RESULT = COMPUTER WON`
        : userChoice === "scissor" && computerChoice === "rock"
        ? `You chose ${userChoice}\n Computer chose ${computerChoice}\n RESULT = COMPUTER WON`
        : `You chose ${userChoice}\n Computer chose ${computerChoice}\n RESULT = YOU WON`;
    alert(result);
    let playAgain = confirm("Play Again");
    playAgain ? location.reload() : alert("OK, Thanks for playing.");
  } else {
    alert("Please enter correct value.");
    location.reload();
  }
} else {
  alert("Thanks, may be next time.");
}
