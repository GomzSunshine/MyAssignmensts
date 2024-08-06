//Switch case

function getGrades(score) {
    let grade;
    switch (true) {
        case (score >= 90 && score <= 100):
            grade = 'A';
            break;

        case (score >= 80 && score <= 90):
            grade = 'B';
            break;

        case (score >= 70 && score <= 80):
            grade = 'C';
            break;

        case (score >= 60 && score <= 70):
            grade = 'D';
            break;
        
        case (score >= 0 && score <= 60):
            grade = 'F';
            break;
        
        default:
            grade = 'Invalid score';
            break;
    }
    return grade;

}
score = 85;
console.log(getGrades(score));
console.log(getGrades(95));
console.log(getGrades(55));