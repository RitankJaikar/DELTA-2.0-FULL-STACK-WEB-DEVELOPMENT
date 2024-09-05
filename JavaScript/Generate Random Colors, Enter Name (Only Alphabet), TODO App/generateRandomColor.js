//Random Color
let btn=document.querySelector("button");
let box=document.querySelector(".RandomColor");

//using on click
// btn.onclick= function() {
//     let Rnum1=Math.floor(Math.random()*256);
//     let Rnum2=Math.floor(Math.random()*256);
//     let Rnum3=Math.floor(Math.random()*256);
//     box.style.backgroundColor=`rgb(${Rnum1},${Rnum2},${Rnum3})`;
//     console.log(`Color changed to rgb(${Rnum1},${Rnum2},${Rnum3})`);
// };

//uning addEventListener, click
btn.addEventListener("click", function() {
    let Rnum1=Math.floor(Math.random()*256);
    let Rnum2=Math.floor(Math.random()*256);
    let Rnum3=Math.floor(Math.random()*256);
    box.style.backgroundColor=`rgb(${Rnum1},${Rnum2},${Rnum3})`;
    console.log(`Color changed to rgb(${Rnum1},${Rnum2},${Rnum3})`);
});




//Enter Your Name (Only Alphabets)
let h3=document.createElement("h3");
h3.innerText="Enter Your Name (Only Alphabets)"
let input=document.createElement("input");
input.placeholder="Enter Your Name"

let div=document.querySelector("div");
div.insertAdjacentElement("afterend",h3);
div.insertAdjacentElement("afterend",input);

input.addEventListener("input", function(event){
    let str=this.value;
    if((str[str.length-1]>='a' && str[str.length-1]<='z') || (str[str.length-1]>='A' && str[str.length-1]<='Z')){
        console.log("Valid");
        h3.innerText=`${str}`;
    }
    else{
        console.log("InValid");
        this.value="";
        alert("Invalid Input! Please Try Again.");
        h3.innerText="Invalid Input! Please Try Again."
    }
});




//TODO list
//add
let task=document.querySelector("#task");
let add=document.querySelector("#add");

add.addEventListener("click",function(event){
    let str=task.value; //Entered Task
    let li=document.createElement("li");
    li.innerHTML=`${str} &nbsp;&nbsp;&nbsp;&nbsp;`; 
    let addHere=document.querySelector("#addHere");
    addHere.insertAdjacentElement("beforeend",li);
    task.value="";
    // delete button
    let delBtn=document.createElement("button");
    delBtn.innerText="Del";
    li.append(delBtn);
    // delBtn.classList.add("delete");              //both not working since we are
    // //delBtn.setAttribute("class","delete");     //giving class to new button created
});

// //delete: works for only default tasks, not working for new button elements added
// let dels=document.querySelectorAll(".delete");
// for(let i=0;i<dels.length;i++){
//     dels[i].addEventListener("click",function(){
//         let par=this.parentElement;
//         par.remove();
//     });
// }

//delete: using Event Delegation Method
let ul=document.querySelector("#addHere");
ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let par=event.target.parentElement;
        par.remove();
    }
});

//remove
let rTask=document.querySelector("#removeTask");
let remove=document.querySelector("#remove");

remove.addEventListener("click",function(event){
    let str1=rTask.value; //Entered Task to Remove
    let lis=document.querySelectorAll("li");
    let found=false;
    for(li of lis){
        let str2=li.innerText;
        let str3=str2.slice(0,str1.length);
        if(str1==str3){
            li.remove();
            found=true;
        }
    }
    if(found==true){
        console.log("Task found and successfully deleted!");
    }
    else{
        console.log("Task not found!");
    }
    rTask.value="";
});