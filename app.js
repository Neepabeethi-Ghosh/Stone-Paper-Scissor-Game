let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let userscore = document.querySelector("#user-score");
let compscore = document.querySelector("#comp-score");
const genCompChoice = () => {
    let options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("Game was Draw");
    msg.innerText = "Game was Draw. Play Again";
    msg.style.backgroundColor = "#081b31"
}

const showWinner=(userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userscore.innerText = userScore;
        console.log("You Win");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compscore.innerText =  compScore;
        console.log("You Lose");
        msg.innerText = `You Lose, ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }

}
const playGame = (userChoice) => {
    console.log("User Choice = ",userChoice);
    const compChoice = genCompChoice();
    console.log("Computer Choice = ",compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else {
        let userWin = true;
        if(userChoice === "rock"){
            //scissors,paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper"){
            //rock,scissors
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
           userWin =  compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);

    }
};
choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        console.log("Choice was clicked",userChoice);
        playGame(userChoice)
    });
});



