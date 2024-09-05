// let num=1000;
// if(num%10==0){
//     console.log('Good');
// }
// else{
//     console.log('Bad');
// }

// let name=prompt("Enter name:");
// let age=prompt("Enter age:");
// // let ans=name+=" is "+age+" years old";
// // console.log(ans);
// console.log(`${name} is ${age} years old`);


// let quarter=3;

// switch(quarter){
//     case 1:
//         console.log("January,February,March");
//         break;
//     case 2:
//         console.log("April,May,June");
//         break;
//     case 3:
//         console.log("July,August,September");
//         break;
//     case 4:
//         console.log("October,November,December");
//         break;
//     default:
//         console.log("Wrong Quarter");
// }

// let a=10;
// let b=20;
// let c=40;

// if(a>b && a>c){
//     console.log(a,"is the largest");
// }
// else if(b>a && b>c){
//     console.log(b,"is the largest");
// }
// else{
//     console.log(c,"is the largest");
// }

// let num1=1234321
// let num2=123

// if(num1%10== num2%10){
//     console.log("Equal");
// }
// else{
//     console.log("Not Equal");
// }

// let num=[1,2,3,5,2,4,5,1];
// let n=4;
// console.log(num.slice(0,4));
// console.log(num.slice(-n));
// console.log(num.slice(num.length-n));

// let str1='';
// //if(str.length==0)
// if(str1==''){  //or
//     console.log("Empty");
// }

// let str="  JsfASjs   ";
// let m=1;

// //if(str[m]>='a' && str[m]<='z')
// if(str[m]==str[m].toLowerCase()){       //or
//     console.log("Lower");
// }

// let num1=[1,2,4];
// if(num1.length>0){
//     console.log("Element(s) exists");
// }

// let a=2;
// if(num1.indexOf(a)!=-1){
//     console.log("Element exist");
// }

// console.log(str.trim());


//Favorite movie guess
// let fav="Avengers";
// let i=1;
// while(i<=10){
//     let guess=prompt(`Hello User! Guess my favorite movie. Chance count ${i}/10.`);
//     if(guess==fav){
//         alert(`Congrats! ${fav} is my favorite movie. You Guessed in ${i}/10 chance.`);
//         break;
//     }
//     if(guess=="quit"){
//         alert(`Thanks for playing :)`); 
//         break;
//     }
//     i++;
// }


//TO-DO list
// let todo=[];
// while(true){
//     let input=prompt("Enter your choice:");
//     if(input=="list"){
//         console.log("--------------------");
//         if(todo.length==0){
//             console.log("No task added! Please add a task.");
//         }
//         else{
//             i=1;
//             for(task of todo){
//                 console.log(i,task);
//                 i++;
//             }
//         }
//         console.log("--------------------");
//     }
//     else if(input=="add"){
//         while(true){
//             let add=prompt("Enter tasks you want to add or type 'done' to exit:");
//             if(add=="done"){
//                 break;
//             }
//             todo.push(add);
//             console.log(`${add} is added in your todo list!`);
//         }
//     }
//     else if(input=="delete"){
//         if(todo.length==0){
//             console.log("No task added! Please add a task.");
//         }
//         else{
//             console.log("--------------------");
//             let i=1;
//             console.log("Your current todo list:");
//             for(task of todo){
//                 console.log(i,task);
//                 i++;
//             }
//             console.log("--------------------");
//             let idx=prompt(`Please enter task (1 to ${todo.length}) number you want to delete`);
//             todo.splice(idx-1,1);
//             console.log("--------------------");
//             console.log("Your todo list after delete:");
//             i=1;
//             for(task of todo){
//                 console.log(i,task);
//                 i++;
//             }
//             console.log("--------------------");
//         }
//     }
//     else if(input=="quit"){
//         console.log("Thanks for using TO-DO app.");
//         break;
//     }
//     else{
//         console.log("Wrong input!!");
//     }
// }


//factorial of a number
// let n=170;
// let fact=1;
// for(i=1;i<=n;i++){
//     fact=fact*i;
// }
// console.log(fact);


//count number of digits
// let n=1000;
// let count=0;
// while(n>0){
//     count++;
//     n=Math.floor(n/10);
//     console.log(n);
// }
// console.log(count);


//creating object literal for thread/twitter post
// const post={
//     username: "ritank_j",
//     content: "Hi, I am new on Thread.",
//     likes: 10,
//     reposts: 1,
//     tags: ["@chris","@niks"],
// };


// //random integer from 1 to 10
// let num1=Math.floor(Math.random()*10)+1;
// console.log(num1);

// //random integer from 0 to 10
// let num1_1=Math.floor(Math.random()*11);
// console.log(num1_1);

// //random integer from 1 to 100
// let num2=Math.floor(Math.random()*100)+1;
// console.log(num2);

// //random integer from 1 to 5
// let num3=Math.floor(Math.random()*10)+1;
// if(num3>5){
//     num3=num3-5;
// }
// console.log(num3);

// //random integer from 15 to 50
// let num4=Math.floor(Math.random()*100)+15;
// if(num4>50){
//     num4=num4-50;
//     if(num4>50){
//         num4=num4-15;
//     }
//     if(num4<15){
//         num4=num4+15;
//     }
// }       
// console.log(num4);

//best way/formula to generate random integers in range of min and max  [min,max]
// let min=10;
// let max=20;
// let rNum=Math.floor(Math.random()*(max-min+1))+min;
// console.log(rNum);

//dice 1-6
// let roll=Math.floor(Math.random()*6)+1;
// console.log(roll);


//Gussing the number
// alert("WELCOME TO GUESS THE NUMBER GAME")
// let min=parseInt(prompt("Enter min of the Range:"));
// let max=parseInt(prompt("Enter max of the Range:"));
// let rNum=Math.floor(Math.random()*(max-min+1))+min;
// while(true){
//     let guess=prompt(`Guess the Number from ${min} to ${max}:\nType "quit" to quit the game.`);
//     if(guess=="quit"){
//         alert(`You Quit.    [Ans-${rNum}]\nThanks for Playing :)`);
//         break;
//     }
//     else if(guess==rNum){
//         alert(`Congrats! You guessed Right. [Ans-${rNum}]\nThanks for Playing :)`);
//         break;
//     }
//     if(guess<rNum){
//         alert("Hint: Higher :)");
//     }
//     else{
//         alert("Hint: Lower :)");
//     }
// }


// function largerThan(arr,num){
//     let ans=[];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>num){
//             ans.push(arr[i]);
//         }
//     }
//     return ans;
// }
// let arr=[1,2,4,5,6,7,8];
// console.log(largerThan(arr,3));


// function uniqueChars(str){
//     // let ans=[];
//     // for(let i=0;i<str.length;i++){
//     //     let present=false;
//     //     for(let j=0;j<ans.length;j++){
//     //         if(str[i]==ans[j]){
//     //             present=true;
//     //         }
//     //     }
//     //     if(present==false){
//     //         ans.push(str[i]);
//     //     }
//     // }
//     // return ans.toString();

//     let ans="";
//     for(let i=0;i<str.length;i++){
//         if(ans.indexOf(str[i])==-1){
//             ans=ans+str[i];
//         }
//     }
//     return ans;     //better
// }

// str="aabcdcbdacbd";
// console.log(uniqueChars(str));


// function countVowels(str){
//     let count=0;
//     for(let i=0;i<str.length;i++){
//         if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u'){
//             count++;
//         }
//         if(str[i]=='A' || str[i]=='E' || str[i]=='I' || str[i]=='O' || str[i]=='U'){
//             count++;
//         }
//     }
//     return count;
// }

// let str="aeiouAEIOU";
// console.log(countVowels(str));


// let start=1;
// let end=6;
// function generateRandom(start,end){
//     let diff=end-start;
//     return Math.floor(Math.random()*diff)+start;
// }
// let ran=generateRandom(start,end);
// console.log(ran);


// function largestName(country){
//     let largest=-1;
//     for(let i=0;i<country.length;i++){
//         if(country[i].length>largest){
//             largest=country[i].length;
//             ans=country[i];
//         }
//     }
//     return ans;
// }
// country=["Australia","Germany","UnitedStatesofAmerica"];
// console.log(largestName(country));


//maximum using reduce method
// let nums=[2,4,3,12,53,25,78,34];
// let maxi=nums.reduce((acc,el)=>{
//     if(el>acc) return el;
//     else return acc;
// });



// let h1=document.querySelector("h1");

// function changeColor(color){
//     h1.style.color=color;
// }

// setTimeout(()=>changeColor("red"),1000);
// setTimeout(()=>changeColor("blue"),2000);
// setTimeout(()=>changeColor("green"),3000);

//or

// function changeColor(color,delay){
//     setTimeout(()=>{
//         h1.style.color=color;
//     },delay);
// }

// changeColor("red",1000);
// changeColor("blue",2000);
// changeColor("green",3000);


//callback hell

// function changeColor(color,delay,nextColor){
//     setTimeout(()=>{
//         h1.style.color=color;
//         if(nextColor) nextColor();
//     },delay);
// }

// changeColor("red",1000,()=>{
//     changeColor("blue",1000,()=>{
//         changeColor("green",1000,()=>{
//             changeColor("yellow",1000,()=>{
//                 changeColor("purple",1000,()=>{
//                     changeColor("orange",1000);
//                 });
//             });
//         });
//     });
// });


//using async and await

// let h1=document.querySelector("h1");

// function changeColor(color,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             h1.style.color=color;
//             console.log("Color Changed!");
//             resolve("Color Changed");
//         },delay);
//     });
// }

// async function colors(){
//     await changeColor("red",1000);
//     await changeColor("blue",1000);
//     await changeColor("green",1000);
//     await changeColor("grey",1000);
//     await changeColor("orange",1000);
//     await changeColor("violet",1000);
// }

// colors();


//recursion
// let body=document.querySelector("body");

// let colors=["red","blue","green","yellow","purple","orange","violet","indigo","pink","cyan","brown","grey"];

// function changeColor(color,delay){
//     let rand=Math.floor(Math.random()*12);
//     setTimeout(()=>{
//         body.style.backgroundColor=color;
//         console.log(rand);
//         changeColor(colors[rand],500);
//     },delay);
// }

// changeColor(colors[0],1000);

//random body color using recursion
// let body=document.querySelector("body");
// function changeColor(){
//     setTimeout(()=>{
//         let Rnum1=Math.floor(Math.random()*256);
//         let Rnum2=Math.floor(Math.random()*256);
//         let Rnum3=Math.floor(Math.random()*256);
//         body.style.backgroundColor=`rgb(${Rnum1},${Rnum2},${Rnum3})`;
//         console.log(`Color changed to rgb(${Rnum1},${Rnum2},${Rnum3})`);
//         changeColor();
//     },500);
// }

// changeColor();


//another callback hell

// let arr=[];

// function saveToDb(data,success,failure){
//     let internetSpeed=Math.floor(Math.random()*16);
//     if(internetSpeed>4){
//         console.log("Success! ",data," uploaded.");
//         arr.push(data);
//         success();
//     }
//     else{
//         failure();
//     }
// }

// saveToDb("Hello! ",
//     ()=>{
//     saveToDb("My ",
//         ()=>{
//         saveToDb("Name ",
//             ()=>{
//             saveToDb("is ",
//                 ()=>{
//                 saveToDb("Ritank",
//                     ()=>{
//                         console.log("DONE!");
//                     },
//                     ()=>{
//                         console.log("Failure4!");
//                     })
//                 },
//                 ()=>{
//                     console.log("Failure3!");
//                 })
//             },
//             ()=>{
//                 console.log("Failure3!");
//             })
//         },
//         ()=>{
//             console.log("Failure2!");
//         })
//     },
//     ()=>{
//     console.log("Failure1!");
// });

// console.log(arr);


//with Promise Chining
// let arr=[];

// function saveToDb(data){
//     return new Promise((resolve,reject)=>{
//         let internetSpeed=Math.floor(Math.random()*16);
//         if(internetSpeed>4){
//             arr.push(data);
//             resolve("Success: Data Saved");
//         }
//         else{
//             reject("Failure: Weak Connection");
//         }
//     })
// }

// saveToDb("Hello! ")
//     .then((result)=>{
//         console.log("Data1 saved");
//         console.log("Result- ",result);
//         return saveToDb("My ");
//     })
//     .then((result)=>{
//         console.log("Data2 saved");
//         console.log("Result- ",result);
//         return saveToDb("name ");
//     })
//     .then((result)=>{
//         console.log("Data3 saved");
//         console.log("Result- ",result);
//         return saveToDb("My ");
//     })
//     .then((result)=>{
//         console.log("Data4 saved");
//         console.log("Result- ",result);
//         return saveToDb("is ");
//     })
//     .then((result)=>{
//         console.log("Data5 saved");
//         console.log("Result- ",result);
//         return saveToDb("Ritank.");
//     })
//     .catch((error)=>{
//         console.log("Promise was rejected");
//         console.log("ERROR- ",error);
//     });


//API call using fetch() - using Promise chaining   //random cat facts
// let url="https://catfact.ninja/fact";

// fetch(url)
//     .then((res)=>{
//         console.log(res);
//         //console.log(res.json());
//         return res.json();
//     })
//     .then((data)=>{
//         console.log(data);
//         console.log(data.fact);
//         return fetch(url);
//     })
//     .then((res)=>{
//         return res.json();
//     })
//     .then((data)=>{
//         console.log(data.fact);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })

//API call using fetch() - using async and await    //random cat facts
// async function getFacts(){
//     try{
//         let res1= await fetch(url);
//         let data1= await res1.json();
//         console.log(data1.fact);
//         let res2= await fetch(url);
//         let data2= await res2.json();
//         console.log(data2.fact);
//     }
//     catch(err){
//         console.log(err);
//     }
// }

//API call using fetch() - using axios  //random cat facts
// let url="https://catfact.ninja/fact";

// async function getFacts(){
//     try{
//         let res= await axios.get(url);
//         return res.data.fact;
//     }
//     catch(err){
//         console.log(err);
//     }
// }

// let btn=document.querySelector("button");
// btn.addEventListener("click",async () =>{
//     let fact = await getFacts();
//     let p=document.querySelector("p");
//     p.innerText=fact;
// });

//API call using fetch() - using axios      //random dog image
// let url="https://dog.ceo/api/breeds/image/random";

// async function randomDog(){
//     try{
//         let res= await axios.get(url);
//         return res.data.message;
//     }
//     catch(err){
//         console.log(err);
//     }
// }

// let btn=document.querySelector("button");
// btn.addEventListener("click",async () =>{
//     let link = await randomDog();
//     let img=document.querySelector("img");
//     img.setAttribute("src",`${link}`);
// });


//Search For Universities By Country by updating query strings
// let url="http://universities.hipolabs.com/search?country=";

// async function universities(country){
//     try{
//         let res= await axios.get(url+country);
//         return res.data;
//     }
//     catch(err){
//         console.log(err);
//         return [];
//     }
// }

// let btn=document.querySelector("button");
// btn.addEventListener("click",async () =>{
//     let country=document.querySelector("input").value;
//     let cllgs = await universities(country);
//     showCllg(cllgs);
// });

// function showCllg(cllgs){
//     let ul=document.querySelector("ul");
//     ul.innerText=""
//     for(let cllg of cllgs){
//         let li=document.createElement("li");
//         li.innerText=cllg.name;
//         ul.append(li);
//     }
// }

//Search For Indian Universities By State
// let url2="http://universities.hipolabs.com/search?country=india";

// async function universities(){
//     try{
//         let res= await axios.get(url2);
//         return res.data;
//     }
//     catch(err){
//         console.log(err);
//         return [];
//     }
// }

// let p=document.querySelector("p");
// async function displayStates(){
//     let cllgs = await universities();
//     let states=[];
//     for(let cllg of cllgs){
//         let state=cllg["state-province"];
//         if(states.indexOf(state)==-1){
//             states.push(cllg["state-province"]);
//         }
//     }
//     p.innerText=`${p.innerText} ${states}`
// }
// displayStates();

// let btn=document.querySelector("button");
// btn.addEventListener("click",async () =>{
//     let cllgs = await universities();
//     let ul=document.querySelector("ul");
//     ul.innerText=""
//     for(let cllg of cllgs){
//         let li=document.createElement("li");
//         let state=document.querySelector("input").value;
//         if(cllg["state-province"]==state){
//             li.innerText=cllg.name;
//             ul.append(li);
//         }
//     }
// });