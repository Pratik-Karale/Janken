function computerPlay(){
    moves=["rock","paper","scissors"]
    return moves[parseInt(Math.random()*3)]
}

strTitle=str=>str[0].toUpperCase()+str.slice(1)

function playJanken(playerSelection,computerSelection){
    let playerWon
    switch (playerSelection) {
        case "rock":
            switch (computerSelection) {
                case "rock":
                    playerWon=null
                    break;
                case "paper":
                    playerWon=false
                    break;
                case "scissors":
                    playerWon=true
                    break;
                default:
                    break;
            }
            break;
        case "paper":
            switch (computerSelection) {
                case "paper":
                    playerWon=null
                    break;
                case "rock":
                    playerWon=true
                    break;
                case "scissors":
                    playerWon=false
                    break;
                default:
                    break;
            }
            break;
        case "scissors":
            switch (computerSelection) {
                case "scissors":
                    playerWon=null
                    break;
                case "paper":
                    playerWon=true
                    break;
                case "rock":
                    playerWon=false
                    break;
                default:
                    break;
            }
            break;
    }
    if (playerWon){
        msg=`You Win! ${strTitle(playerSelection)} beats ${strTitle(computerSelection)}`
    }else if (playerWon==null){
        msg=`Its a Tie!`
    }else{
        msg=`You Lose! ${strTitle(computerSelection)} beats ${strTitle(playerSelection)}`
    }

    return [`User Played: ${playerSelection}\nComputer Played: ${computerSelection}\n\n${msg}`,playerWon]
}

function askMove(){
    return prompt("Enter rock/paper/scissors:").toLowerCase()
}
roundsWon=0
for(let i=0;i<5;i++){
    results=playJanken(askMove(),computerPlay())
    // results is an arr with a boolean playerWon as 2nd elem 
    console.log(results[0])
    roundsWon+=results[1]
}
console.log(`\n\n------------------\nYou won ${roundsWon} out of 5 rounds!`)
