
let  rockBtn =  document.querySelector('#rock'),
     paperBtn =  document.querySelector('#paper'),
     scissorsBtn = document.querySelector('#scissors');


// Listen for rock 
rockBtn.addEventListener('click', function() {
    let choiceOptions = ['rock', 'paper', 'scissors'];  
    let randomNum = Math.floor(Math.random() * 3);
    let computerChoice = choiceOptions[randomNum];
    
    if (computerChoice === 'paper'){
        console.log("Computer chose paper, you lose.")
    } else {
        console.log('you win!!');
    }
    
  });

// Listen for paper 
paperBtn.addEventListener('click', function() {
    let choiceOptions = ['rock', 'paper', 'scissors'];  
    let randomNum = Math.floor(Math.random() * 3);
    let computerChoice = choiceOptions[randomNum];
    
    if (computerChoice === 'scissors'){
        console.log("Computer chose scissors, you lose.")
    } else {
        console.log('you win!!');
    }
});

// Listen for scissors 
scissorsBtn.addEventListener('click', function() {
    let choiceOptions = ['rock', 'paper', 'scissors'];  
    let randomNum = Math.floor(Math.random() * 3);
    let computerChoice = choiceOptions[randomNum];
    
    if (computerChoice === 'rock'){
        console.log("Computer chose rock, you lose.")
    } else {
        console.log('you win!!');
    }
});