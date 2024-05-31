// async function greet(){
//     return 1+3;
// }
// greet()
// .then(()=>{
//     console.log("promise was resolve");
// })
// .catch((err)=>{
//     console.log("error occured in promise : ",err);
// })

function getNum() {
    return new Promise((resolve,reject)=>{
       setTimeout(() => {
        let randNum=Math.floor(Math.random()*10)+1;
        console.log(randNum);
        resolve();
       }, 1000);
       
    })
}

async function demo(){
   await getNum();
   await getNum();
   await getNum();
   await getNum();
}

demo();

let h1=document.querySelector("h1");

function colorChange(color,delay) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let randNum=Math.floor(Math.random()*10)+1;
            if(randNum<5){
                reject();
            }

            h1.style.color=color;
            console.log(color);
            resolve();
        }, delay);
    })
}

async function colors() {
    try{
        await colorChange("red",1000);
    await colorChange("blue",1000);
    await colorChange("green",1000);
    }
    catch(err){
        console.log("error caught");
        console.log(err);
    }
}
colors();
