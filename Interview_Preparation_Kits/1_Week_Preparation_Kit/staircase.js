//Staircase detail

//This is a staircase of size (4):

//   #
//  ##
// ###
//####
//Its base and height are both equal to . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

//Write a program that prints a staircase of size .

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
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
    // Write your code here
  //Initializing the iterative with 1 so we can use it as the Hash(#) counter for the staircaise
     for (let i = 1; i <= n; i++) {
    let space = ' '.repeat((n - i));
    let step = '#'.repeat((i));
    console.log(space + step);
  }
}


function main() {
    const n = parseInt(readLine().trim(), 10);

    staircase(n);
}
