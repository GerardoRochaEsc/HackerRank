//Two friends Anna and Brian, are deciding how to split the bill at a dinner. Each will only pay for the items they consume. 
//Brian gets the check and calculates Anna's portion. You must determine if his calculation is correct.

//For example, assume the bill has the following prices: bill[2,4,6] . 
//Anna declines to eat item k=bill[2] which costs 6. 
//If Brian calculates the bill correctly, Anna will pay (2+4)/2=3. If he includes the cost of bill[2]=6, he will calculate (2+4+6)/2. 
//In the second case, he should refund 3 to Anna.

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
 * Complete the 'bonAppetit' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY bill
 *  2. INTEGER k
 *  3. INTEGER b
 */

function bonAppetit(bill, k, b) {
    // Write your code here
  //Declaring a sum variable=total of prices without the one that Anna didnt consume
  //counter of 1 to use it as a condition to break the discard of prices
  //Why did I do that, because if the price is repeated and I compare the value that Anna gave in a 
  //longer array, values are gonna repeat so if I decrease the counter it will not take this value out of the sum again.
    let sum=0, counter=1;
    let half=0;
    for(let i=0;i<bill.length;i++){
        if(bill[i]===bill[k] && counter===1){
            counter--;
            continue;
        }
        sum+=bill[i];
    }
  //Saving the value of the half that every persona has to pay, without the meat that Anna didnt eat.
    half=sum/2;
  //If the price that every persona has to pay is equal to what Anna gave him already, we print Bont Appetit
    if(half === b){
        console.log("Bon Appetit");
    } else { 
  //However if it isn't we just rest the ammount that Anna payed to the quantity that every person has to pay and thats what 
  //Brian has to refund to Anna.
        console.log(b-half);
    } 
}

function main() {
    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const k = parseInt(firstMultipleInput[1], 10);

    const bill = readLine().replace(/\s+$/g, '').split(' ').map(billTemp => parseInt(billTemp, 10));

    const b = parseInt(readLine().trim(), 10);

    bonAppetit(bill, k, b);
}
