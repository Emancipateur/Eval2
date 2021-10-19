const player1 = document.querySelector(".player1")
const player2 = document.querySelector(".player2")
const current1 = document.querySelector('.current1')
const current2 = document.querySelector('.current2')
const btn = document.querySelector(".rollDice")
const btnhold = document.querySelector('.hold')
const global1 = document.querySelector(".global1")
const global2 = document.querySelector(".global2")
const dice = document.querySelector(".dice")
const newGame = document.querySelector(".newGame")




let gameStart = true
let player1Global = 0;
let player2Global = 0;
let current = 0;
let addition = 0;
let total = 0;

player1.style.backgroundColor ="#a8e6cf";



/* Reloading game*/
newGame.addEventListener('click', ()=>{
    location.reload() 
})

/* Rolling dice and choose dice img*/
btn.addEventListener('click', ()=> {
    rolling(1,7);
    imgDice(result)
})


/* Hold the score and check if won*/
btnhold.addEventListener('click', ()=>{
  changePlayer();
  if (global1.innerHTML >= 0){
    winner()
}
})

/*Random dice */
function rolling(min, max) {
   
    result = (Math.floor(Math.random() * (max - min)) + min);
  
/* change player if dice == 1 */
    if(result == 1){
        total = 0;
        changePlayer();

/* add the score to current score*/
    }else{
        addition = current + result;
        total += addition + current;
            if(gameStart){
                current1.innerHTML = total
                
            }else{
                current2.innerHTML = total
     }
    }
}

/* switch the img dice */
function imgDice(dicen) {
    switch(dicen){
        case 1:
            dice.innerHTML = '<img  src="media/1.png" alt="dice">';
            break;
        case 2:
            dice.innerHTML = '<img  src="media/2.png" alt="dice">';
            break;
        case 3:
            dice.innerHTML = '<img  src="media/3.png" alt="dice">';
             break;
        case 4:
            dice.innerHTML = '<img  src="media/4.png" alt="dice">';
            break;
        case 5:
            dice.innerHTML = '<img src="media/5.png" alt="dice">';
             break;
        case 6:
            dice.innerHTML = '<img  src="media/6.png" alt="dice">';
             break;
        default:
            dice.innerHTML = "Le dé ne s'affiche pas";
        
    }
}

/* change player / change background player/ add current to global score / set score to 0 */
function changePlayer(){
    
    if(gameStart) {
        gameStart = false
        player2.style.backgroundColor ="#a8e6cf";
        player1.style.backgroundColor=""
        player1Global += total;
        global1.innerHTML = player1Global
        total = 0;
        current1.innerHTML = 0;

    }else{
        gameStart = true;
        player2.style.backgroundColor=""
        player1.style.backgroundColor ="#a8e6cf";
        player2Global += total;
        global2.innerHTML = player2Global
        total = 0;
        current2.innerHTML = 0;
    };

}

function winner(){
    if(global1.innerHTML >= 100){
alert(' Bravo  Player 1 !')
  location.reload() 
}
  else if(global2.innerHTML >= 100){
      alert(' Bravo  Player 2 !')
      location.reload() 
  }
}



