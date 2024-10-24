let userScore=0;
let compScore=0;
let msg=document.querySelector("#msg");
const choices=document.querySelectorAll(".choice");
const userScoreAccess=document.querySelector("#user-score");
const compScoreAccess=document.querySelector("#comp-score");
const newGameBtn=document.querySelector(".newGame");
const showWinnerBtn=document.querySelector(".showWinner");
const startNewGame = () =>{
    userScore=0;
    compScore=0;
    userScoreAccess.innerText=0;
    compScoreAccess.innerText=0;
    msg.innerText="Pick Your Move";
    msg.style.backgroundColor="#690087";
}

const finalWinner = () =>{
    if(userScore>compScore){
        msg.innerText="You won the Game";
        msg.style.backgroundColor="#0b5345";
        msg.style.color="white";
    }
    else if(userScore==compScore){
        msg.innerText="Your Scores were Equal, It was a Draw";
        msg.style.backgroundColor="#0b5345";
        msg.style.color="white";
    }
    else{
        msg.innerText="You lost, Try Again..";
        msg.style.backgroundColor="#0b5345";
        msg.style.color="white";
    }
}

const generateChoice = () => {
    let arr=["rock", "paper", "scissor"];
    const randNum=Math.floor(Math.random()*3);
    return arr[randNum];
}

const drawGame =()=>{
    msg.innerText="Game was a Draw, Try Again..";
    msg.style.background="Yellow";
    msg.style.color="Green";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScoreAccess.innerText = userScore;
        msg.innerText=`You Win!! Your move ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="Green";
        msg.style.color="White";
    }
    else{
        compScore++;
        compScoreAccess.innerText = compScore;
        msg.innerText=`Try Again.. ${compChoice} beats your move ${userChoice}`;
        msg.style.backgroundColor= "#690087";
        msg.style.color="White";
    }
}

const playGame = (userChoice) =>{
    //Generating Computer Choice
    const compChoice = generateChoice();
    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice === "rock"){
            userWin = compChoice ==="paper"?false:true;
        }
        else if(userChoice ==="paper"){
            userWin =compChoice ==="scissor"?false:true;
        }
        else{
            userWin = compChoice ==="rock"?false:true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});

showWinnerBtn.addEventListener("click", finalWinner);
newGameBtn.addEventListener("click", startNewGame);