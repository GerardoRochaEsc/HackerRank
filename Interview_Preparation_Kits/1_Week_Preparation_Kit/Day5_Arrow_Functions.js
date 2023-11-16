//Complete the function in the editor. It has one parameter: an array, . It must iterate through the array performing one of the following actions on each element:

//If the element is even, multiply the element by .
//If the element is odd, multiply the element by .
//The function must then return the modified array.

function modifyArray(nums) {
    let finalArray=[];
    for(let i=0;i<nums.length;i++){
        if(nums[i] % 2 == 0){
            finalArray[i]=nums[i]*2;
        }else{
            finalArray[i]=nums[i]*3;
        }
    }
    return finalArray;
}