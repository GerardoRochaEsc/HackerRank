/*
An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly  steps, 
for every step it was noted if it was an uphill, , or a downhill,  step. Hikes always start and end at sea level, 
and each step up or down represents a  unit change in altitude.

Function Description

Complete the countingValleys function in the editor below.

countingValleys has the following parameter(s):

int steps: the number of steps on the hike
string path: a string describing the path
*/

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
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
    // Write your code here
    const OCEAN="OCEAN"; //Global String Variables of the function
    const UP="UP";
    const DOWN="DOWN";
    let stepCounter=0; //Height counter
    let valleysCounter=0; //Valleys counter
    let hikingState=OCEAN; //Hiking state, set to OCEAN that equals ocean level (0 height)
    for(let i = 0; i < path.length; i++){
        if(path[i]=="U"){
            stepCounter++;
        }else if(path[i]=="D"){
            stepCounter--;
        } //Here we add an unit if we are going up(U) or substracting(D) if we are going down
    let tempSign= Math.sign(stepCounter); //Setting to a temporal sign variable to know if we are at a positive, negative or 0 height
        if(hikingState==OCEAN && tempSign==1){ //Checking if we are going UP so we set the state to UP
            hikingState=UP;
        } else if(hikingState==OCEAN && tempSign==-1){ //Checking if we are going DOWN so we set the state to DOWN
            hikingState=DOWN;
            valleysCounter++; //Adding 1 valley to the total ValleysCounter
        } else if(hikingState==UP && tempSign==0){ //Checking if we were going up but now we are at ocean level (0 height)
            hikingState=OCEAN; //Setting to ocean level  
        } else if(hikingState==DOWN && tempSign==0){ //Checking if we were going down but now we are at ocean level 
            hikingState=OCEAN; //Setting to ocean level
        }  
    }
     return valleysCounter; //Returning total sum of valleys travelled
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const steps = parseInt(readLine().trim(), 10);

    const path = readLine();

    const result = countingValleys(steps, path);

    ws.write(result + '\n');

    ws.end();
}
