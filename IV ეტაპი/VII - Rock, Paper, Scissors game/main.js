const rps = document.querySelector(".rps")
const paper = document.querySelector(".paper-img");
const scissors = document.querySelector(".scissors-img");
const rock = document.querySelector(".rock-img");
const myChooseImg = document.querySelector(".my-choice img");
const opponentChooseImg = document.querySelector(".opponent-choice img");
const rps_select = document.querySelector(".rps-select");
const winnerText = document.querySelector(".winner-text");
const scoreNum = document.querySelector(".score-number");
const winner = document.querySelector(".winner");
const playAgain = document.querySelector(".play-again");
const rules = document.querySelector(".rules");
const close = document.querySelector(".close");
const container = document.querySelector(".container");
const button = document.querySelector(".button");


let myChoose = "";
let arr = ["rock", "paper", "scissors"];
let score = 0



function start(){
    paper.addEventListener("click", paper_func);
    scissors.addEventListener("click", scissors_func);
    rock.addEventListener("click", rock_func);
    playAgain.addEventListener("click", playAgain_func);
    close.addEventListener("click", close_func);
    button.addEventListener("click", button_func);
}

function button_func(){
    if(window.screen.width < 1440){
        container.style.display = "none";
        rules.style.display = "flex";
    }else{
        rules.style.display = "flex";
    }
}

function close_func() {
    container.style.opacity = 1;
    rules.style.display = "none";
    container.style.display = "flex"
}

function playAgain_func(){
    rps.style.display = "block";
    winner.style.display = "none";
    rps_select.style.display = "none";
    start()
}

function paper_func(){
    myChoose = "paper"
    const randomIndex = Math.floor(Math.random() * arr.length);
    const random = arr[randomIndex];
    myChooseImg.src = "./images/icon-paper.svg";
    rps.style.display = "none";
    winner.style.display = "flex";
    rps_select.style.display = "flex";
    if(random == "rock"){
        opponentChooseImg.src = "./images/icon-rock.svg";
    }else if(random == "paper"){
        opponentChooseImg.src = "./images/icon-paper.svg";
    }
    else{
        opponentChooseImg.src = "./images/icon-scissors.svg";
    }
    winnerText.innerHTML = whoIsWinner(myChoose, random);
}

function scissors_func(){
    myChoose = "scissors";
    const randomIndex = Math.floor(Math.random() * arr.length);
    const random = arr[randomIndex];
    myChooseImg.src = "./images/icon-scissors.svg";
    rps.style.display = "none";
    rps_select.style.display = "flex"
    winner.style.display = "flex";
    if(random == "rock"){
        opponentChooseImg.src = "./images/icon-rock.svg";
    }else if(random == "paper"){
        opponentChooseImg.src = "./images/icon-paper.svg";
    }
    else{
        opponentChooseImg.src = "./images/icon-scissors.svg";
    }
    winnerText.innerHTML = whoIsWinner(myChoose, random);
}

function rock_func(){
    myChoose = "rock";
    const randomIndex = Math.floor(Math.random() * arr.length);
    const random = arr[randomIndex];
    myChooseImg.src = "./images/icon-rock.svg";
    rps.style.display = "none";
    rps_select.style.display = "flex"
    winner.style.display = "flex";
    if(random == "rock"){
        opponentChooseImg.src = "./images/icon-rock.svg";
    }else if(random == "paper"){
        opponentChooseImg.src = "./images/icon-paper.svg";
    }
    else{
        opponentChooseImg.src = "./images/icon-scissors.svg";
    }
    winnerText.innerHTML = whoIsWinner(myChoose, random);
}







function whoIsWinner(me, opponent){
    if(me == "rock" && opponent=="paper"){
        score--;
        scoreNum.innerHTML = score;
        return "YOU LOSE";
    }else if(me == "rock" && opponent=="scissors"){
        score++;
        scoreNum.innerHTML = score;
        return "YOU WIN";
    }else if(me == "paper" && opponent=="scissors"){
        score--;
        scoreNum.innerHTML = score;
        return "YOU LOSE";
    }else if(me == "paper" && opponent=="rock"){
        score++;
        scoreNum.innerHTML = score;
        return "YOU WIN";
    }else if(me == "scissors" && opponent=="paper"){
        score++;
        scoreNum.innerHTML = score;
        return "YOU WIN";
    }else if(me == "scissors" && opponent=="rock"){
        score--;
        scoreNum.innerHTML = score;
        return "YOU LOSE";
    }else{
        return "draw"
    }
   
}




start()