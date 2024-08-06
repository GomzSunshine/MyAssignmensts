//determine whether the given number is odd or even

//Create a function named `isOddOrEven` that takes a number as a parameter 
function categorizeNumber(num) {
   
    //Use a conditional statement to check if the number is divisible by 2
    if (num>0) {
       return "positive";

    }else if(num<0){
        return "negative";
    }
    else{
        return "zero"; 
    }
    
}

const num=12;

//Call that function
console.log(categorizeNumber(num));
console.log(categorizeNumber("-11"));
console.log(categorizeNumber("0"));