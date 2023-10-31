//Find the median number of an odd array of integers and return the position where it is.

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
 * Complete the 'findMedian' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function findMedian(arr) {
    // Write your code here
    let index=0;
    //sort() method needs an arrow function like that to sort the integers in ascending order
    arr.sort((a,b) => a-b);
    //using Math.floor to round down the division of the size of the array / 2
    index=Math.floor(arr.length / 2)
    //returning the Median number index
    return arr[index];
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = findMedian(arr);

    ws.write(result + '\n');

    ws.end();
}
