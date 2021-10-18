const player1 = document.querySelector(".player1")
const player2 = document.querySelector(".player2")
const current1 = document.querySelector('.current1')
const current2 = document.querySelector('.current2')
const btn = document.getElementById("rollDice")
const btnhold = document.getElementById('hold')
const global1 = document.querySelector(".global1")
const global2 = document.querySelector(".global2")
const dice = document.querySelector(".dice")



let gameStart = true
let player1Global = 0;
let player2Global = 0;
let current = 0;
let addition = 0;
let total = 0;



function rolling(min, max) {
   
    result = (Math.floor(Math.random() * (max - min)) + min);
    dice.innerHTML = result

    if(result == 1){
        total = -1
        changePlayer();

    }
    addition = current + result;
    total += addition + current
    if(gameStart){
    current1.innerHTML = total
    }else{
        current2.innerHTML = total
    }

}


 
function changePlayer(){
    if(gameStart) {
        gameStart = false
        player2.classList.add('active')
        player1.classList.remove('active')
        current1.innerHTML = 0

    }else
    {
        gameStart = true;
        player1.classList.add('active')
        player2.classList.remove('active')
        current2.innerHTML = 0
    };

}


btn.addEventListener('click', ()=> {
    rolling(1,7);
})

btnhold.addEventListener('click', ()=>{
  changePlayer();
    if(!gameStart){
    player1Global += total;
    global1.innerHTML = player1Global
    total = 0;
    current1.innerHTML = 0;
  
    }else
    {
        player2Global += total;
        global2.innerHTML = player2Global
        total = 0;
        current2.innerHTML = 0;
    }

})



