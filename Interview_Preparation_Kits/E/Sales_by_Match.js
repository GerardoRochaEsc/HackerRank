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
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
    // Write your code here

    const counts = {};   // Initialize an empty object to store counts for each element
    let resultingPairs = 0; //Initialize a counter for the pairs
    
   // Iterate over each element (x) in the array (ar)
    ar.forEach((x) => {
        // If counts[x] is defined, use its current value; otherwise, use 0
        // Increment the count for the current element (x) by 1
    counts[x] = (counts[x] || 0) + 1;

       // Check if the count for the current element is even, indicating a pair
    if(counts[x]%2 === 0){
        resultingPairs++;
    }
    });
    return resultingPairs;
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result = sockMerchant(n, ar);

    ws.write(result + '\n');

    ws.end();
}
