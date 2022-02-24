let userNumber = Math.floor((Math.random() * 6) + 1);
console.log(userNumber);

let computerNumber = Math.floor((Math.random() * 6) + 1);
console.log(computerNumber);

if (userNumber > computerNumber) {
    console.log("The user won!");
} else if (userNumber < computerNumber) {
    console.log("The computer won!");
} else if (userNumber == computerNumber) {
    console.log("It's a draw!");
}