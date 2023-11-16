/*HackerLand Enterprise is adopting a new viral advertising strategy. 
When they launch a new product, they advertise it to exactly 5 people on social media.

On the first day, half of those 5 people (i.e.,floor(5/2)=2) like the advertisement and each shares it with  of their friends. 
At the beginning of the second day, floor(5/2)x3=2x3=6 people receive the advertisement.

Each day, floor(recipients/2) of the recipients like the advertisement and will share it with 3 friends on the following day. 
Assuming nobody receives the advertisement twice, determine how many people have liked the ad by the end of a given day, beginning with launch day as day 1.*/

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
 * Complete the 'viralAdvertising' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function viralAdvertising(n) {
    // Write your code here
    let cummulativeLikes=0;//Variable that accumulates the likes from each day 
    let peopleContacted=5;//Defining the default people that was contacted
    let actualLikes=0;//Defining a variable that is gonna save the people that shared the commercial that day
        for(let i=0; i<n; i++){
            cummulativeLikes+=Math.floor(peopleContacted/2);//Suming the division between 2 the people and saving it
            actualLikes=Math.floor(peopleContacted/2);//Dividing the people that was contacted to get the new sharers
            peopleContacted=actualLikes*3;//Multiplying the sharers per 3 cause every one is gonna show the commercial to 3 more people
        }
    return cummulativeLikes;//Returning the accumulation of likes 
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const result = viralAdvertising(n);

    ws.write(result + '\n');

    ws.end();
}
