/*
The function takes three parameters:

s: An array of integers representing the chocolate squares.
d: An integer representing Ron's birth day.
m: An integer representing the birth month.
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
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */

function birthday(s, d, m) {
    // Initialize a variable to store the count of valid subarrays
    let count = 0;
    // Run a loop to iterate over the array s
    for (let i = 0; i < s.length; i++) {
        // Extract a subarray of length 'm' starting from the current position 
        //'i'
        let arr = s.slice(i, m + i);

        // Check if the sum of elements in the subarray 'arr' is equal to 
        //the target 'd'
        if (arr.reduce((a, b) => a + b) === d) {
            // If the condition is true, increment the count
            count++;
        }
    }
    // Return the final count of valid subarrays
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const s = readLine().replace(/\s+$/g, '').split(' ').map(sTemp => parseInt(sTemp, 10));

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const d = parseInt(firstMultipleInput[0], 10);

    const m = parseInt(firstMultipleInput[1], 10);

    const result = birthday(s, d, m);

    ws.write(result + '\n');

    ws.end();
}
