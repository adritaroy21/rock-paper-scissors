//Choosing a random choice
let choices = ['Rock', 'Paper', 'Scissors'];
let computerChoice = choices[Math.floor(Math.random() * 3)];

let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');

let playagain = document.getElementById('play-again');

rock.addEventListener('click', checkResult.bind(this,'Rock'));
paper.addEventListener('click', checkResult.bind(this,'Paper'));
scissors.addEventListener('click', checkResult.bind(this,'Scissors'));

playagain.addEventListener('click',repeat);

//Computing result
function checkResult(playerChoice){
    //Disabling the buttons
    rock.classList = 'btn btn-block btn-dark square disabled';
    paper.classList = 'btn btn-block btn-dark square disabled';
    scissors.classList = 'btn btn-block btn-dark square disabled';

    //Displaying computer's choice
    document.getElementById('opponent').innerHTML = `Computer chose ${computerChoice}`;

    if(computerChoice == playerChoice){
        document.getElementById('message').innerHTML = 'It\'s a Tie';
    }
    else{
        if(playerChoice == 'Rock'){
            if(computerChoice == 'Paper')
                document.getElementById('message').innerHTML = 'You Lose'; 
            else
                document.getElementById('message').innerHTML = 'You Win'; 
        }

        if(playerChoice == 'Paper'){
            if(computerChoice == 'Scissors')
                document.getElementById('message').innerHTML = 'You Lose'; 
            else
                document.getElementById('message').innerHTML = 'You Win'; 
        }

        if(playerChoice == 'Scissors'){
            if(computerChoice == 'Rock')
                document.getElementById('message').innerHTML = 'You Lose'; 
            else
                document.getElementById('message').innerHTML = 'You Win'; 
        }
    }
    
    playagain.classList = 'btn btn-dark btn-lg';
}

function repeat(){
    location.reload();
}


