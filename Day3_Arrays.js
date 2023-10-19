
/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    let firstHighestNumber= nums[0];
    let secondHighestNumber= nums[0];
    for(let i=0;i<=nums.length; i++){
        if(nums[i]>firstHighestNumber){
            secondHighestNumber = firstHighestNumber;
            firstHighestNumber = nums[i];
        }
         if(nums[i] > secondHighestNumber && nums[i] < firstHighestNumber){
        secondHighestNumber = nums[i];    
        }
    }
    return secondHighestNumber;
}


function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);
    
    console.log(getSecondLargest(nums));
}
