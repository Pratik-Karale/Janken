const game_emojis={
    rock:"🪨",scissors:"✂️",paper:"📰"
}

const userMoveDisplay=document.querySelector(".user-move")
const compMoveDisplay=document.querySelector(".comp-move")
const userScoreDisplay=document.querySelector(".user-score")
const compScoreDisplay=document.querySelector(".comp-score")
const gameMsgBox=document.querySelector(".game-heading")
const rockBtn=document.querySelector("#rock-btn")
const paperBtn=document.querySelector("#paper-btn")
const scissorsBtn=document.querySelector("#scissors-btn")



console.log(scissorsBtn)
userOptions=[rockBtn,paperBtn,scissorsBtn]
userOptions.forEach(
    (btn)=>btn.addEventListener("click",playRound)
)

function computerPlay(){
    moves=["rock","paper","scissors"]
    return moves[parseInt(Math.random()*3)]
}

function strTitle(str){return str[0].toUpperCase()+str.slice(1)}

function getPlayerResult(userSelection,computerSelection){
    let userWon
    switch (userSelection) {
        case "rock":
            switch (computerSelection) {
                case "rock":
                    userWon=null
                    break;
                case "paper":
                    userWon=false
                    break;
                case "scissors":
                    userWon=true
                    break;
                default:
                    break;
            }
            break;
        case "paper":
            switch (computerSelection) {
                case "paper":
                    userWon=null
                    break;
                case "rock":
                    userWon=true
                    break;
                case "scissors":
                    userWon=false
                    break;
                default:
                    break;
            }
            break;
        case "scissors":
            switch (computerSelection) {
                case "scissors":
                    userWon=null
                    break;
                case "paper":
                    userWon=true
                    break;
                case "rock":
                    userWon=false
                    break;
                default:
                    break;
            }
            break;
    }
    if (userWon){
        msg=[`You Win!`,`${strTitle(userSelection)} beats ${strTitle(computerSelection)}`]
    }else if (userWon==null){
        msg=[`Its a Tie!`,``]
    }else{
        msg=[`You Lose!`,`${strTitle(computerSelection)} beats ${strTitle(userSelection)}`]
    }
    console.log([...msg,userWon])
    return [...msg,userWon]
}

function playRound(){
    if(gameMsgBox.textContent.includes("Won the match!")){
        userScoreDisplay.textContent=0;
        compScoreDisplay.textContent=0;
    }

    userMove=this.getAttribute("id").split("-")[0]
    compMove=computerPlay()
    changeMoveDisplay("comp",compMove)
    changeMoveDisplay("user",userMove)
  
    results=getPlayerResult(userMove,compMove)
    let [resultMsg,reasonMsg,userWon]=[...results]
    console.log(resultMsg)
    gameMsgBox.textContent=resultMsg
    gameMsgBox.setAttribute("title",reasonMsg)
    
    if(userWon){
        userScoreDisplay.textContent=+(userScoreDisplay.textContent)+1
    }else if(userWon===false){
        compScoreDisplay.textContent=+(compScoreDisplay.textContent)+1
    }

    if(+userScoreDisplay.textContent==5)
        gameMsgBox.textContent="User Won the match!";
    else if(+compScoreDisplay.textContent==5)
        gameMsgBox.textContent="Computer Won the match!";
}

function changeMoveDisplay(player,move){
    if(player=="user"){
        userMoveDisplay.textContent=game_emojis[move]
    }else if(player=="comp"){
        compMoveDisplay.textContent=game_emojis[move]
    }
}