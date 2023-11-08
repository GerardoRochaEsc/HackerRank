//Sam is a professor at the university and likes to round each student's grade according to these rules:

//If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5.
//If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.

//Complete the function gradingStudents in the editor below.

//gradingStudents has the following parameter(s):

//int grades[n]: the grades before rounding
//Returns

//int[n]: the grades after rounding as appropriate



'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
    // Write your code here
  //Array with the remainder of every qualification divided by 5
    let storedValue=[];
  //Array with the qualifications that I am going to return
    let resGrades=[];
  //Looping through all the qualifications
    for(let i=0; i<grades.length; i++){
      //Checking if the value is higher or equal than 38, if it isnt I can just save the value how it was entered
    if(grades[i]>=38){
      //Storing the remainder of the value
       storedValue[i] = grades[i]%5;
      //If the remainder is smaller than 2, it means that the valie is not gonna be rounded and we cant save it like that
       if(storedValue[i]<=2){
           resGrades[i]=grades[i];
       } else { //if the remainder is bigger than 2 it means tha it has to be rounded so you have to rest it to the value and add 5 
           resGrades[i]=grades[i]-storedValue[i]+5; 
       }
       } else {
           resGrades[i]=grades[i];
       }
    }
    return resGrades; //Returning the results
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const gradesCount = parseInt(readLine().trim(), 10);

    let grades = [];

    for (let i = 0; i < gradesCount; i++) {
        const gradesItem = parseInt(readLine().trim(), 10);
        grades.push(gradesItem);
    }

    const result = gradingStudents(grades);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
