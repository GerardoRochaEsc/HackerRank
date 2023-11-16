//Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

//timeConversion has the following parameter(s):

//string s: a time in  hour format
//Returns

//string: the time in  hour format

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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    //I transformed the string indexes 0-1 to numbers 
    //, then I saved the value of the segmented array inside of
    // the hour variable
  let hour = parseInt(s.slice(0, 2));
  //checking if the PM/AM part matches with PM so we add 12 value to match
  //the 24 hours per day
  if (s.slice(8, 10) == "PM" && hour != 12) hour += 12;
  //checking if the PM/AM part matches with AM and equals 12 so I can set it to
  //0 (the start of the day)
  if (s.slice(8, 10) == "AM" && hour == 12) hour = 0;   
  //ternary expression to return the 24/hour time 
  return `${hour < 10 ? '0' : ''}${hour}:${s.slice(3, 5)}:${s.slice(6, 8)}`;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
