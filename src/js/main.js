// let div = document.createElement("div");
// let textTag = document.getElementById("text");
// let btnTag = document.getElementById("btn");
// let pTag = document.getElementById("paragraph")

// btnTag.addEventListener("click", btnTagFunction);

// function btnTagFunction(){
// // pTag = textTag.value;
// pTag.innerHTML ="för lite";
// }


// document.body.appendChild(div)
// ;





class Tasks{
    constructor(task,done){
        this.task = task;
        this.done = done;
 
    }
}

let userList = [
new Tasks("träna", false), 
new Tasks("jobba", false), 
new Tasks("sova", false),

];


console.log(userList);

function list(){



for (let i= 0; i<userList.length; i++){
    let ulTag = document.getElementById("firstUl");
    let liTag = document.createElement("li");
    liTag.innerHTML = userList[i].task;
    ulTag.appendChild(liTag);

    let checkRuta = document.createElement("input");
    checkRuta.type = "checkbox";
    checkRuta.addEventListener("click", () =>{
        if(checkRuta.checked === true){
            userList[i].done = true;
            liTag.classList.add("li-style");
            console.log(userList);
        }
        else{
            userList[i].done = false;
            console.log(userList);
            liTag.classList.remove("li-style");
        }
    });
    liTag.appendChild(checkRuta);
}
    //detta är för användarens input i loppen

let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");




addToDoButton.addEventListener("click", () =>{
let ulUser = document.getElementById("firstUl")
let li = document.createElement("li")
li.innerHTML = inputField.value;
let checkRuta = document.createElement("input");
checkRuta.setAttribute("type", "checkbox");
li.appendChild(checkRuta);
ulUser.appendChild(li);
let inputText = inputField.value;

let userInput = new Tasks(inputText, false);

if(inputText !== " "){
    userList.push(userInput);
}



checkRuta.addEventListener("click", () =>{
    if(checkRuta.checked === true){
        li.style.textDecoration = "line-through";
    }
    else{
        li.style.textDecoration = "none";
    }

});

});


}



list();