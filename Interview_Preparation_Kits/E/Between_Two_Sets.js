/*
There will be two arrays of integers. Determine all integers that satisfy the following two conditions:

1.The elements of the first array are all factors of the integer being considered
1.The integer being considered is a factor of all elements of the second array
These numbers are referred to as being between the two arrays. Determine how many such numbers exist.

Elements on array a[] must be multiplied by other numbers until they get to a max value of 100
Elements on array b[] must be divided into numbers that give as a remainder (%) a value of 0. 
Example: 16 % 8 = 0
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
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function getTotalX(a, b) {
    // Write your code here
    const timesToCheck = a.length + b.length; //Variable for the amount of times that the number has to be repeated inside of the array called chekingArray[].
    const checkingArray = [];//Variable to store the multiples of array a[], and divisors of array b[].
    let tempResult = 0;//Variable to store the result of the current multiplication between the value of the a[] index and i increaser.
    let tempValue = 0;//Variable to store the current divisor on the second if loop.

    //Looping through the array a[] numbers that have to be stored until they reach 100 as the maximum number.
    for(let i = 0; i < a.length; i++){
        for(let j = 1; j <= 100; j++){
            tempResult = a[i] * j;
            if(tempResult > 100){
                break; //Breaking the loop if the result of the multiplication is greater than 100, because we don't need to store those numbers.
            }
            checkingArray.push(tempResult);
        }
    }

    //Looping through the array b[] numbers that have to be stored if the remainder of the division equals 0.
    for(let i = 0; i < b.length; i++){
    //Storing the value of the numbers inside of b's array because we are going to use it as a limit on the next loop so we do not overdivide the numbers.
        tempValue = b[i];
        //console.log(tempValue);
        for(let j=1; j <= tempValue; j++){
          //Checking if the remainder of the number of the array b[] divided between the number of j increaser equals 0
            if(tempValue%j===0){
                console.log(`Dividing:${tempValue} between ${j}`);
                checkingArray.push(j);
            }
        }
    }

  //Function to count the duplicated numbers inside of an empty object
    function count_duplicate(a){
        let counter = 0;
        let counts = {}

        // Check if the current element 'a[i]' is already in the 'counts' object
        for(let i =0; i < a.length; i++){ 
            if (counts[a[i]]){
            // If yes, increment the count for that element
            counts[a[i]] += 1
            } else {
            // If no, initialize the count for that element to 1
            counts[a[i]] = 1
            }
        }  
        for (let prop in counts){
            if (counts[prop] === timesToCheck){
                counter++;
            }
        }
        //console.log(counter);
        return counter;
    }
    
    return count_duplicate(checkingArray);
}






function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const m = parseInt(firstMultipleInput[1], 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const brr = readLine().replace(/\s+$/g, '').split(' ').map(brrTemp => parseInt(brrTemp, 10));

    const total = getTotalX(arr, brr);

    ws.write(total + '\n');

    ws.end();
}
