//Given a square matrix, calculate the absolute difference between the sums of its diagonals.

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
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    // Write your code here
  //Diagonal indexes are always the same ([0][0] => [1][1]...)
    const diagonalResult= a =>{
        let sum=0;
        for(let i=0;i<a.length;i++){
            sum+=a[i][i];
        }
        return sum;
    }
  //Math.abs to get the absolute value, using diagonalResult to get one diagonal sum and reversing the array 
  //to get the opposite diagonal sum
        return Math.abs(diagonalResult(arr) - diagonalResult(arr.reverse()));
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
