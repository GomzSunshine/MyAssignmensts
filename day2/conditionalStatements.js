//if else

function launchBrowser(browserName) {
    if(browserName === "chrome") {
        console.log("chrome browser");
    } else {
        console.log("Unsupported browser");
    }
}
let browserName = 'chrome';
launchBrowser(browserName);

//switch
function runTests(testType) {

    switch (testType) {
        case 'smoke':
            console.log("smoke");
            break;
        
        case 'sanity':
            console.log("sanity");
            break;
        
        case 'regression':
            console.log("regression");
            break;
    
        default:
            console.log("smoke");
            break;
    }

}
testType = 'smoke';
runTests(testType);