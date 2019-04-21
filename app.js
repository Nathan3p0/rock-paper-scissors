let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

function letterToWord(letter) {
    if(letter === 'r') return 'Rock';
    if(letter === 'p') return 'Paper';
    else return 'Scissors';
}

function finalScore(){
    if(userScore === 5) {
        userScore = 0;
        computerScore = 0;
        return result_p.innerHTML = `Congrats you WON!!! Lets play again.`;

    }
    else if (computerScore === 5) {
        userScore = 0;
        computerScore = 0;
        return result_p.innerHTML = `Sorry you LOST!!! Lets play again.`;
    }
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${letterToWord(userChoice)} beats ${letterToWord(computerChoice)}. You win!`
    finalScore()
}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${letterToWord(userChoice)} doesn't beat ${letterToWord(computerChoice)}. You Lose!`;
    finalScore()
}

function draw(userChoice, computerChoice) {
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `You both chose ${letterToWord(userChoice)}. It's a draw!`;
    finalScore();
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'rs':
        case 'sp':
        case 'pr':
            win(userChoice, computerChoice);
            break;
        case 'sr':
        case 'ps':
        case 'rp':
            lose(userChoice, computerChoice);
            break;
        case 'ss':
        case 'pp':
        case 'rr':
            draw(userChoice, computerChoice);
            break;
    }
}


function main(){

    rock_div.addEventListener('click', function() {
        game('r');
    })

    paper_div.addEventListener('click', function() {
        game('p');
    })

    scissors_div.addEventListener('click', function() {
        game('s');
    })

}

main();