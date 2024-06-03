const userOption = document.querySelectorAll('.user-option');
const movesLeft = document.querySelector('.movesleft');
const result = document.querySelector('.result');
const game =()=>{
    let playerScore = 0;
    let computerScore = 0;
    const computerOptions = ['rock','paper','scissor'];
    let moves = 0;
    

    const playGame =() =>{
        
        for(let i=0; i<userOption.length; i++){
            userOption[i].addEventListener('click', function(){
                console.log(userOption[i].textContent);
                const userSelection = userOption[i].textContent.toLowerCase();
                const index = Math.floor(Math.random()*3);
                const computerOption = computerOptions[index];
                console.log(computerOption);
                winner(userSelection,computerOption);
                moves++;
                const moveLeft = 10 - moves;  
                movesLeft.innerHTML = 'Move left: '+ moveLeft;
                if(moveLeft === 0){
                    gameOver(userOption,movesLeft);
                }
            
            });

        }
    };

        const winner = (userSelection,computerOption) =>{
            const playerCount = document.querySelector('.p-count');
            const computerCount = document.querySelector('.c-count');

            if(userSelection === computerOption){
                result.innerHTML = 'The game is a tie1';
            }
            else if(userSelection == 'rock'){

                if(computerOption == 'paper'){
                    computerScore++;
                    computerCount.innerHTML = computerScore;
                    result.innerHTML = 'Computer Won!';
                }
                else {

                     playerScore++;
                     playerCount.innerHTML = playerScore;
                     result.innerHTML = 'User won!';
                }
            }
            else if (userSelection == 'scissors') {
                if (computerOption == 'rock') {
                    result.textContent = 'Computer Won';
                    computerScore++;
                    computerCount.textContent = computerScore;
                } else {
                    result.textContent = 'Player Won';
                    playerScore++;
                    playerCount.textContent = playerScore;
                }
            }
            else if (userSelection == 'paper') {
                if (computerOption == 'scissors') {
                    result.textContent = 'Computer Won';
                    computerScore++;
                    computerCount.textContent = computerScore;
                } else {
                    result.textContent = 'Player Won';
                    playerScore++;
                    playerCount.textContent = playerScore;
                }
            }
        }

        const gameOver = (userOption,movesLeft) =>{
            for(let i=0;i<userOption;i++){
                userOption[i].style.display = 'none';
            }
            
            movesLeft.style.display = 'none';
            const reload = document.querySelector('.reload');
            const displayStatus = document.querySelector('.move');
            displayStatus.innerHTML ='Game Over!';

            if(playerScore == computerScore){
                result.innerHTML = 'The game is a tie!';
            }
            else if(playerScore > computerScore){
                result.innerHTML = 'You won the game!';
            }
            else{
                result.innerHTML = 'Computer won the game!';
            }
           
            reload.innerHTML ='Restart';
            reload.style.display = 'flex';
            reload.addEventListener('click',function(){
                window.location.reload();

            });
        
        }

    playGame();

}

game();