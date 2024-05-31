let level=0;
let started=true;
let h2=document.querySelector("h2");
let colorBtns=["ArrowLeft","ArrowUp","ArrowDown","ArrowRight"];
let allBtns=document.querySelectorAll(".btn");
let userSeq=[];
let gameSeq=[];
let highScore=0;
let body=document.querySelector("body");
document.addEventListener("keyup",function (event) {
    if(event.code=="KeyS"){
       if(started==true){
        levelUp();
        started=false;
       }  
    }
})

function levelUp() {
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`
    let randInx=Math.floor(Math.random()*colorBtns.length);
    let randBtn=colorBtns[randInx];
    gameSeq.push(randBtn);
    console.log(gameSeq);
    let btn=document.querySelector(`.${randBtn}`);
    flashBtn(btn);
}

function flashBtn(btn){
    btn.classList.add("gameFlash");
    setTimeout(() => {
     btn.classList.remove("gameFlash");
    }, 300);
}

document.addEventListener("keyup",function (event) {
       if(colorBtns.includes(event.code)){
            let userBtn=event.code;
            let btn=document.querySelector(`.${userBtn}`);
            let btnId=  btn.getAttribute("id");
            userSeq.push(btnId);
            console.log(userSeq);
            userPress(btn);
            checkAns(userSeq.length-1);
       }
 });

 function userPress(btn) {
    btn.classList.add("userFlash");
    setTimeout(() => {
     btn.classList.remove("userFlash");
    }, 300);
 }

 function checkAns(idx) {
    if(gameSeq[idx]===userSeq[idx]){
        if(gameSeq.length==userSeq.length){
            setTimeout(() => {
                levelUp();
            }, 400);
        }
    }
    else{
        h2.innerText=`Game over ! press S to start the game Your score was ${level}`;
        highestScore()
        body.style.backgroundColor="red";
        setTimeout(() => {
            body.style.backgroundColor="white"
        }, 300);
        reset();
    }
 }

 function highestScore() {
    if(highScore<gameSeq.length){
        highScore=gameSeq.length;
        let h3=document.querySelector("h3");
        h3.innerText=`Highest Score ${highScore}`
    }
 }
 function reset() {
    gameSeq=[];
    started=true;
    level=0;
 }

