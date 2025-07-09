let userScore=0;
let computerScore=0;

const choices= document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara= document.querySelector("#user-score");
const computerScorePara= document.querySelector("#computer-score");

const genComputerChoice=()=>{
    const options =["rock","paper", "scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame=()=>{
    console.log("oh Its a draw. wanna play again?");
    msg.innerText="oh Its a draw. Wanna play again?";
     msg.style.backgroundColor="grey";
};

const showWinnwer=(userWin, userChoice, ComputerChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you win!");
        msg.innerText=`you win! your ${userChoice} beats ${ComputerChoice}`;
        msg.style.backgroundColor="green";
    }else{
        computerScore++;
          computerScorePara.innerText=computerScore;
        console.log("ew!! you lose to a computer hahah");
         msg.innerText="ew!! you lose to a computer hahah";
          msg.style.backgroundColor="red";
    }
};

const playGame=(userChoice)=>{
     console.log("user choice=", userChoice);
     const ComputerChoice=genComputerChoice();
     console.log("computer choice=",ComputerChoice);

     if(userChoice===ComputerChoice){
        //draw game
        drawGame();
     }else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissors, paper
            userWin=ComputerChoice==="paper" ?  false: true;
         }else if(userChoice==="paper"){
              //rock, scissors
             userWin= ComputerChoice==="scissors"? false:true;
         }else{
            //rock,paper
           userWin= ComputerChoice==="rock"?false:true;
         }
         showWinnwer(userWin, userChoice,ComputerChoice);
     }
};


choices.forEach((choice)=> {
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)

    });
});