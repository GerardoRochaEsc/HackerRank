/*Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. 
She tabulates the number of times she breaks her season record for most points and least points in a game. 
Points scored in the first game establish her record for the season, and she begins counting from there.*/

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
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores) {
    // Write your code here
    let maxPointsBreakCounter=0;//Storing maxPoints breaking records
    let minPointsBreakCounter=0;//Storing minPoints breaking records
    let maxPointsScored=scores[0];//Creating a variable that is going to score the maxPoint value, initializating with scored[0]
    let minPointsScored=scores[0];//Creating a variable that is going to score the minPoint value, initializating with scored[0]
    
        for(let i=1; i < scores.length; i++){ //Starting with i=1 because we already initialized the variables with index 0
            if(scores[i]>maxPointsScored){//Cheking if the maxPoints record has been broken
                maxPointsBreakCounter++;//Adding 1 to the counter of times that the record has been broken
                maxPointsScored=scores[i];//Saving the new record
            } 
            if(scores[i]<minPointsScored){//Cheking if the minPoints record has been broken
                minPointsBreakCounter++;//Adding 1 to the counter of times that the record has been broken
                minPointsScored=scores[i];//Saving the new record
            }
        }
        return [maxPointsBreakCounter, minPointsBreakCounter];//Returning the times that the records were broken by Maria.
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const scores = readLine().replace(/\s+$/g, '').split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const result = breakingRecords(scores);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
