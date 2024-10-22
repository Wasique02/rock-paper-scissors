let userScore = 0;
let comScore = 0;

let choices = document.querySelectorAll("button");
let msgPara = document.querySelector("#msg");
let userScorepara = document.querySelector("#user");
let comScorepara = document.querySelector("#computer");


const playGame = (userChoice) => {
    // console.log("user choice", userChoice);
    let comChoice = genComChoice();
    // console.log("computer choice", comChoice);
    if(userChoice === comChoice){
        draw();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = comChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = comChoice === "scissors" ? false : true;
        }
        else{
            userWin = comChoice === "rock" ? false : true;
        }
        showWinner(userWin,comChoice,userChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})
let genComChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}
const draw= ()=>{
    msgPara.innerText = "It's a Draw";
    msgPara.style.color = "blue";
}
const showWinner=(userWin,userChoice,comChoice)=>{
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        msgPara.innerText = `You Win! Your ${userChoice} beats ${comChoice}`;
        msgPara.style.color = "green";
    }
    else{
        comScore++;
        comScorepara.innerText = comScore;
        msgPara.innerText = `You Lose ${comChoice} beats your ${userChoice}`;
        msgPara.style.color = "red";
    }
}

