//Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
//Then print the respective minimum and maximum values as a single line of two space-separated long integers.

'use strict';

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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    //Declaring and initializating our main result variables
    let minSumResult=0;
    let maxSumResult=0;

    //Sorting parameter arr[] of integers
    let temporalArr=arr.sort();

    //Looping through all the indexes except the last one 
    //(temporalArr.length-1)
    for(let i=0;i<temporalArr.length-1;i++){
        minSumResult+=temporalArr[i];
    }
    //Looping through all the indexes except the first one 
    //(j=1)
    for(let j=1;j<temporalArr.length;j++){
        maxSumResult+=temporalArr[j];
    }
    
    //printing the results
    console.log(minSumResult + " " + maxSumResult);  
}

//Main
function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
