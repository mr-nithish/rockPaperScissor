let playerscore=0;
let computerscore=0;

random = () => 
{
    return (Math.floor(Math.random()*(3)));
}


let value=["rock","paper","scissor"];


computerplay = () =>{
    return value[random()];
}

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissor = document.getElementById("sicssor");
let playerselection = document.getElementById("playerselection");
let computerselection = document.getElementById("computerselection");
let playerscores = document.getElementById("playerscore");
let computerscores = document.getElementById("computerscore");
let statuss = document.getElementById("status");

play = (playerselections,computerselections) => {

    if(playerselections===computerselections)
    {
        statuss.textContent = "It's draw";
    }
    else if(playerselections==='rock')
    {
        if(computerselections==='paper')
        {
            computerscore++;
            statuss.textContent = "Player defeated";
        }
        else
        {
            playerscore++;
            statuss.textContent = "Computer defeated";
        }
    }
    else if(playerselections==='paper')
    {
        if(computerselections==='scissor')
        {
            computerscore++;
            statuss.textContent = "Player defeated";
        }
        else
        {
            playerscore++;
            statuss.textContent = "Computer defeated";
        }
    }
    else if(playerselections==='scissor')
    {
        if(computerselections==='Rock')
        {
            computerscore++;
            statuss.textContent = "Player defeated";
        }
        else
        {
            playerscore++;
            statuss.textContent = "Computer defeated";
        }
    }
}



rock.addEventListener("click",function(){
    let playerselections = "rock";
    playerselection.textContent = playerselections;
    let computerselections = computerplay();
    computerselection.textContent = computerselections;

    play(playerselections,computerselections);
    playerscores.textContent = playerscore;
    computerscores.textContent = computerscore;
});

paper.addEventListener("click",function(){
    let playerselections = "paper";
    playerselection.textContent = playerselections;
    let computerselections = computerplay();
    computerselection.textContent = computerselections;

    play(playerselections,computerselections);
    playerscores.textContent = playerscore;
    computerscores.textContent = computerscore;
});

scissor.addEventListener("click",function(){
    let playerselections = "scissor";
    playerselection.textContent = playerselections;
    let computerselections = computerplay();
    computerselection.textContent = computerselections;

    play(playerselections,computerselections);
    playerscores.textContent = playerscore;
    computerscores.textContent = computerscore;
});

reset.addEventListener("click",function(){
    playerscore=0;
    computerscore=0;
    computerselection.textContent = "NULL";
    playerselection.textContent = "NULL";
    playerscores.textContent = playerscore;
    computerscores.textContent = computerscore;
    statuss.textContent = "Choose an option!..";
});