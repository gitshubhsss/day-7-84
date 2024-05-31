let started=true;
let level=0;
let h2=document.querySelector("h2");
let colorBtns=["ArrowLeft","ArrowUp","ArrowDown","ArrowRight"];
let gameSeq=[];
let userSeq=[];
let highScore=0;
let h3=document.querySelector("h3");
let body=document.querySelector("body");
document.addEventListener("keyup",function(event){
    if(event.code=="KeyS"){
       if(started==true){
        levelUp();
        started=false;
       }
    }
});

function levelUp() {
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`
    let randInx=Math.floor(Math.random()*colorBtns.length);
    let randColor=colorBtns[randInx];
    gameSeq.push(randColor);
    console.log(gameSeq);
    let btn=document.querySelector(`.${randColor}`);
    gameFlash(btn);
  
}
function gameFlash(btn) {
    btn.classList.add("gameFlash");
    setTimeout(() => {
        btn.classList.remove("gameFlash");
    }, 300);
}


document.addEventListener("keyup",function (event) {
    if(colorBtns.includes(event.code)){
        let userBtn=event.code;
        let btn=document.querySelector(`.${userBtn}`);
        userflash(btn);
        let btnId=btn.getAttribute("id");
        userSeq.push(btnId);
        console.log(userSeq);
        checkAns(userSeq.length-1);
    }
})

function userflash(btn) {
    btn.classList.add("userFlash");
    setTimeout(() => {
        btn.classList.remove("userFlash");
    }, 300);
}
//here we are checking the answer

function checkAns(idx) {
    if(gameSeq[idx]===userSeq[idx]){
       if(gameSeq.length==userSeq.length){
        setTimeout(() => {
            levelUp();
        }, 500);
       }
    }
    else{
        h2.innerText=`Game over ! press S to start the game`;
        highestScore()
        body.style.backgroundColor="red";
        setTimeout(() => {
            body.style.backgroundColor="white";
        }, 500);
        reset()
    }
}
function highestScore() {
    if(highScore<gameSeq.length){
        highScore=gameSeq.length;
        h3.innerText=`HighScore ${highScore}`
    }
}
function reset() {
    level=0;
    started=true;
    gameSeq=[];
    userSeq=[];
}