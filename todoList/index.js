let inp=document.querySelector("input");

let btn=document.querySelector("#add");
let ul=document.querySelector("ul");
btn.addEventListener("click",()=>{
    if(inp.value!==""){
        let li= document.createElement("li");
        li.innerText=inp.value;
        let delBtns=document.createElement("button");
        delBtns.classList.add("delete")
        delBtns.innerText="Delete";
        li.append(delBtns)
        ul.appendChild(li);
    }
    inp.value="";
});

//if we select the delete btns and add the event listener on it . it deletes the 
//existing list only it does not delete the newly created list 

ul.addEventListener("click",function (event) {
    if(event.target.nodeName==="BUTTON"){
        let deltask=event.target.parentElement;
        deltask.remove();
    }
})