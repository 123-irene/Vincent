let computerMove = ' ';

function playGame(){
  const randomNumber = Math.random();

if (randomNumber>0 && randomNumber< 1/2){
computerMove ='head';
}else if (randomNumber >1/2 && randomNumber<1){
computerMove = 'tail';
}
return computerMove ;
}

let   result= ' ';
const  score=   {
wins:0,
loss:0
};
function updateScore(){
    document.querySelector('.js-score').innerHTML = `Wins:${score.wins}, Loss:${score.loss}`
}

function playerMove(guess){
if(guess==='head'){ if (computerMove==='head'){
result = 'You win';

} if (computerMove==='tail'){
result = 'You lose';
}}
else  if(guess==='tail'){if (computerMove==='head'){
result = 'You lose';
} if (computerMove==='tail'){
result = 'You win';
}}


if(result ==='You win'){
score.wins+=1;

}

if(result==='You lose'){
score.loss+=1;
}
console.log(score.wins)
console.log(score.loss)
localStorage.setItem('score' ,JSON.stringify(score));

document.querySelector('.moves').innerHTML = `You  chose ${guess} ,Computer chose ${computerMove}. `;

updateScore();
document.querySelector('.js-result').innerHTML = `${result}`;


}
