//Complete the function in the editor. It has one parameter: an array, , of objects. 
//Each object in the array has two integer properties denoted by  and . 
//The function must return a count of all such objects  in array  that satisfy .

function getCount(objects) {
    let count=0;
    for(let obj in objects){
        if(objects[obj].x == objects[obj].y){
        count++;
    }
    }
    return count;
}

//Main
function main() {
    const n = +(readLine());
    let objects = [];
    
    for (let i = 0; i < n; i++) {
        const [a, b] = readLine().split(' ');
        
        objects.push({x: +(a), y: +(b)});
    }
    
    console.log(getCount(objects));
}
