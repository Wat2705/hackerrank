function gradingStudents(grades) {
    // Write your code here
    for(let i = 0; i < grades.length; i++){
        if(grades[i] > 37){
            let lastDigit = grades[i] % 10;
            if(10 - lastDigit <= 2 && 10 - lastDigit > 0){
                grades[i] += 10 - lastDigit;
            } else if(5 - lastDigit <= 2 && 5 - lastDigit > 0){
                grades[i] += 5 - lastDigit;
            }
        }
    }
    return grades;
}

console.log(gradingStudents([73, 67, 38, 33]));