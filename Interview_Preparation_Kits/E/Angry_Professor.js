//A Discrete Mathematics professor has a class of students. 
//Frustrated with their lack of discipline, the professor decides to cancel class if 
//fewer than some number of students are present when class starts. 
//Arrival times go from on time () to arrived late ().

//Given the arrival time of each student and a threshhold number of attendees, determine if the class is cancelled.

//Function Description

//Complete the angryProfessor function in the editor below. It must return YES if class is cancelled, or NO otherwise.

//angryProfessor has the following parameter(s):

//int k: the threshold number of students
//int a[n]: the arrival times of the  students

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
 * Complete the 'angryProfessor' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY a
 */

function angryProfessor(k, a) {
    // Write your code here
  //Declaring a counter for every alumn that arrives on time (a[i]<=0)
    let counter=0;
  //Looping through our main array of students on time and off time
    for(const student of a){
        if(student<=0){
            counter++;
        };
    };
  //Checking if the amount of students(counter) on time (a[i]<=0) is greater than the minimum requiered(k).
    if(counter>=k){
        return "NO";
    } else {
        return "YES";
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

        const n = parseInt(firstMultipleInput[0], 10);

        const k = parseInt(firstMultipleInput[1], 10);

        const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

        const result = angryProfessor(k, a);

        ws.write(result + '\n');
    }

    ws.end();
}
