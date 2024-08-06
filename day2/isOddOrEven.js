//determine whether the given number is odd or even

//Create a function named `isOddOrEven` that takes a number as a parameter 
function isOddOrEven(num) {
   
    // re-initialize the variable
    num="11";

    //Use a conditional statement to check if the number is divisible by 2
    if (num%2==0) {
        console.log(`Number is even, ${num}`);

    }
    else{
        console.log(`Number is odd, ${num}`); 
    }
    
}

let num=12;

//Call that function from the javascript
isOddOrEven(num);
