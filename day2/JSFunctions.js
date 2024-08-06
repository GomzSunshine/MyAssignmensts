//Function declaration
console.log("--------Function declaration---------");

console.log(userProfile("Priya"));

function userProfile(name) {
 return `Hello,<${name}>!`;
}

//Arrow Function
console.log("--------Arrow Function---------");
let double = (num) => num*num;
console.log(double(2));


//Anonymous Function  
console.log("--------Anonymous Function ---------"); 
setTimeout(function(){
    console.log("This message is delayed by 2 seconds");},2000);


//Callback Function
setTimeout(function(){
    getUserData(displayName);},3000);


function getUserData(callback){
    const prompt=require("prompt-sync")({sigint:true}); 
    console.log("--------Callback Function ---------");
    let nameAndAge = prompt("Please enter your name and age");
    callback(nameAndAge);  
}

function displayName(nameAndAge) {
    setTimeout(function(){
        console.log(`Hello ${nameAndAge}`);},3000);  
    //console.log("Hello " + nameAndAge );
}


