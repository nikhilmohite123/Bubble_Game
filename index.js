const ting=new Audio('ting.mp3');
const wrong=new Audio('gameover.mp3');
const timerSound=new Audio('timer.mp3');
let score=0;
let hit=0;
function makeBubble(){
    let cluteer='';
    for(let i=1; i<=192; i++){
        let val=Math.floor(Math.random()*10);
        cluteer += `<div class="bubble">${val}</div>`;
    }
    document.querySelector('.pbottom').innerHTML=cluteer;
}
function newHit(){
   
    hit=Math.floor(Math.random()*10);
    document.querySelector('.hit').textContent=hit;

}

function time(){
    let timer=60;
    const id=setInterval(()=>{
        if(timer>0){
            timerSound.play();
            timer--;
            document.querySelector('.time').textContent=timer;
        }
        else{
            timerSound.pause();
      clearInterval(id);
      document.querySelector('.hit').textContent=0;
      document.querySelector('.score').textContent=0;
      pbottom.innerHTML=`<h4 class="over" >Score is ${score}</h4>  `;
        }
    
    },1000)
}
function scoreIncrement(){
score+=10;
document.querySelector('.score').textContent=score;
}


function scoreDecrment(){
    if(score!=0){
        score-=10;
    document.querySelector('.score').textContent=score;
    }
    
    }


const pbottom=document.querySelector('.pbottom');
pbottom.addEventListener('click',(e)=>{
   
    let hitval=Number(e.target.textContent);
    if(hitval===hit){
        ting.play();
        scoreIncrement();
        makeBubble();
        newHit();
    }
    else{
        if(score!=0){
            wrong.play();
            scoreDecrment();
        }
    }

})
makeBubble();
newHit();
time();
