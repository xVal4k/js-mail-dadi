let userNumber = document.querySelector(".user-number");
let computerNumber = document.querySelector(".computer-number");
let winner = document.querySelector(".winner");
let resetButton = document.querySelector(".reset-button")

resetButton.addEventListener("click", function() {
    userNumber.innerHTML = Math.floor((Math.random() * 6) + 1);
    computerNumber.innerHTML = Math.floor((Math.random() * 6) + 1);

    if (userNumber.innerHTML > computerNumber.innerHTML) {
        winner.innerHTML = "The user won!";
    } else if (userNumber.innerHTML < computerNumber.innerHTML) {
        winner.innerHTML ="The computer won!";
    } else if (userNumber.innerHTML == computerNumber.innerHTML) {
        winner.innerHTML ="It's a draw!";
    }
});
