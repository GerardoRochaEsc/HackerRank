//Function Description

//Complete the function birthdayCakeCandles in the editor below.

//birthdayCakeCandles has the following parameter(s):

//int candles[n]: the candle heights
//Returns

//int: the number of candles that are tallest

//Example

//candles=[4,4,1,3]
//The maximum height candles are 4 units high. There are 2 of them, so return 2.

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
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles) {
    // Write your code here
    const highestCandle=Math.max(...candles);
    let CandleCounter=0;
    for(let i=0; i<candles.length;i++){
        if(candles[i] === highestCandle){
            CandleCounter++;
        }
    }
    return CandleCounter;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const candlesCount = parseInt(readLine().trim(), 10);

    const candles = readLine().replace(/\s+$/g, '').split(' ').map(candlesTemp => parseInt(candlesTemp, 10));

    const result = birthdayCakeCandles(candles);

    ws.write(result + '\n');

    ws.end();
}
