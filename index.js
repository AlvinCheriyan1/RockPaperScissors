
let humanScore = 0
let computerScore = 0

function getComputerChoice(){
    let randomNum = Math.random() * 100
    if(randomNum < 33){
        return "rock"
    }else if (randomNum < 66){
        return "scissors"
    }else{
        return "paper"
    }
}

function getHumanChoice(){
    let choice = prompt("Type eithe rock, paper, or scissors: ")
    return choice.toLowerCase()
    
}


function disableButtons() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        displayResult("Tie! Play again")
        displayScore()
        return
    }
    if(humanChoice === "rock" && computerChoice === "paper"){
        displayResult("You loose!")
        displayScore()
        computerScore++
    }
    if(humanChoice === "rock" && computerChoice === "scissors"){
        displayResult("You win!")
        displayScore()
        humanScore++
    }
    if(humanChoice === "paper" && computerChoice === "rock"){
        displayResult("You win!")
        displayScore()
        humanScore++
    }
    if(humanChoice === "paper" && computerChoice === "scissors"){
        displayResult("You loose!")
        displayScore()
        computerScore++
    }
    if(humanChoice === "scissors" && computerChoice === "rock"){
        displayResult("You loose!")
        displayScore()
        computerScore++
    }
    if(humanChoice === "scissors" && computerChoice === "paper"){
        displayResult("You win!")
        displayScore()
        humanScore++
    }
    if(humanScore === 5){
        displayResult("You win against the computer")
        displayScore()
        disableButtons()
    }
    if(computerScore === 5){
        displayResult("you loose against the computer")
        displayScore()
        disableButtons()
    }
}


function playGame(){
    

    // for(let i = 0; i < 5; i++){
    //     const humanMove = getHumanChoice()
    //     const computerMove = getComputerChoice()
    //     let tie = playRound(humanMove, computerMove)
    //     if(tie === "Tie"){
    //         i--
    //     }
    // }
    // if(humanScore > computerScore){
    //     console.log("You win against the computer!")
    // }else if(humanScore < computerScore){
    //     console.log("You lost against the computer")
    // }

}


const rockBtn = document.querySelector("#rock")
const paperBtn = document.querySelector("#paper")
const scissorsBtn = document.querySelector("#scissors")

rockBtn.addEventListener("click", () =>{
    playRound("rock",getComputerChoice())
})
paperBtn.addEventListener("click", () =>{
    playRound("paper",getComputerChoice())
})
scissorsBtn.addEventListener("click", () =>{
    playRound("scissors",getComputerChoice())
})


function displayResult(message){
    const container = document.querySelector("#display-result")
    const content = document.createElement("p")
    content.textContent = `${message}`
    
    const existChild = container.firstElementChild

    if(existChild){
        container.replaceChild(content, existChild)
    }else{
        container.appendChild(content)
    }
}

function displayScore(){
    const container = document.querySelector("#score")
    const content = document.createElement("p")
    content.textContent = `${humanScore}-${computerScore}`

    const existChild = container.firstElementChild

    if(existChild){
        container.replaceChild(content, existChild)
    }else{
        container.appendChild(content)
    }
}