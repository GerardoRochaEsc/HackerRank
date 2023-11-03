//Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type.
//If more than 1 type has been spotted that maximum amount, return the smallest of their ids.

//Example
//arr = [1, 1, 2, 2, 3];

//There are two each of types  and , and one sighting of type . Pick the lower of the two types seen twice: type .

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
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
    // Write your code here
    //Sorting the array
    let sorted = arr.sort();
    //Selecting the first value as a default 
    //in order to follow the rule that you have to chose the 
    //lowest id id more number are repeated the same amount of times,
    //the logic is that if I am checking the array since the lowest to the
    //highest value, I am never gonna be able to replace the ans variable with a 
    //higher value if its repeated the same ammount of times, because the counter
    //has to be greater than the maxOccur variable to get into the if statement
    //(counter>maxOccur)
    let ans = sorted[0];
    let maxOccur = 1,
        counter = 0;
    
    //Ternary expression to reset(counter=0) of increment(counter++ if true) 
    //our counter
    for (let i = 0; i < sorted.length; i++) {
        counter = (sorted[i] === sorted[i-1]) ? counter + 1 : 0;
        if (counter > maxOccur) {
            ans = sorted[i];
            maxOccur = counter;
        }
    }
    return ans;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}
