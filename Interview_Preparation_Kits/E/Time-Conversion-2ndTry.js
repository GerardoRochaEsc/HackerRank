/*Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):

string s: a time in 24 hour format*/

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
    let getTimeLapse, getHourInteger, getHour, toConcatenate;
    getTimeLapse=s.slice(8,);
    getHourInteger=parseInt(s.slice(0,2));
    getHour=(s.slice(0,2));
    toConcatenate=s.slice(2,8);
    if(getTimeLapse==="PM" && getHourInteger!=12){
        getHourInteger+=12;
    } else if(getTimeLapse==="AM" && getHourInteger==12){
        getHourInteger="00";
    } else{
        return `${getHour}${toConcatenate}`;
    }
    return `${getHourInteger}${toConcatenate}`;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
