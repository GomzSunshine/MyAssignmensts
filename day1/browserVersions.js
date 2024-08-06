//Practise let var const

//Create a function by name getBrowserVersion
function getBrowserVersion() {
    var browserVersion="chrome";

    //Create if condition inside function to check if browser is chrome, then
    if (browserVersion == "chrome") {
        // Declare a local variable (browserVersion) 
        let browserVersion;// = "chrome126";
        console.log("Using let - block scoped : Browserversion of chrome is : " +browserVersion);

    }
    else{
        console.log("Browser name not supported"); 
    }
    //and print that variable inside function (outside block)
    console.log("Using var - function scoped : Browserversion of chrome is : " +browserVersion);
}


const browserVersion="chrome"; //declared a const named as browserVersion(global) and assigned value as chrome
console.log("Using const - block scoped : Browserversion of chrome is : " +browserVersion);

//Call that function from the javascript
getBrowserVersion();