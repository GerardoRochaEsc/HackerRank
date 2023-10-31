//Given an array of integers, calculate the ratios of its elements that are positive, negative,
//and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    //Counters
    let positiveIntegersCount=0;
    let negativeIntegersCount=0;
    let zeroIntegersCount=0;
    //printed values with 6 decimals
    let printedPositiveInteger=0;
    let printedNegativeInteger=0;
    let printedZeroInteger=0;
    
    for(let i=0;i<arr.length;i++){
     if(arr[i]>0){
         positiveIntegersCount++;
     } else if(arr[i]<0){
         negativeIntegersCount++;
     } else if(arr[i]===0){
         zeroIntegersCount++;
     }
    }
    //Dividing our counters with the total size(length) of the array so I can get 
    //a fraction, then I am using the .toFix(6) method to get the ammount of 
    //decimals that we want.
    printedPositiveInteger = positiveIntegersCount / arr.length;
    printedPositiveInteger = printedPositiveInteger.toFixed(6);
    
    printedNegativeInteger = negativeIntegersCount / arr.length;
    printedNegativeInteger = printedNegativeInteger.toFixed(6);
    
    printedZeroInteger = zeroIntegersCount / arr.length;
    printedZeroInteger = printedZeroInteger.toFixed(6);
    
    console.log(printedPositiveInteger);
    console.log(printedNegativeInteger);
    console.log(printedZeroInteger);
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
