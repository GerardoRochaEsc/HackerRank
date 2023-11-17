/*Complete the extraLongFactorials function in the editor below. It should print the result and return.

extraLongFactorials has the following parameter(s):

n: an integer]*/

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
 * Complete the 'extraLongFactorials' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function extraLongFactorials(n) {
    // Write your code here
    let result=BigInt(1);
    let nBigInt=BigInt(n);
    for(let i=0; i<n; i++){
        result*=nBigInt;
        nBigInt--;
    }
    console.log(result.toString());//Converting the BigInt number to a string so it doesn't prints the n at the end
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    extraLongFactorials(n);
}
