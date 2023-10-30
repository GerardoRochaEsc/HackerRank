//Complete the isPositive function below. It has one integer parameter, . If the value of  is positive, it must return the string YES. Otherwise, it must throw an Error according to the following rules:

//If  is , throw an Error with  Zero Error.
//If  is negative, throw an Error with  Negative Error.

function isPositive(a) {
    if(a>0){
        return "YES";
    } else if (a===0){
        return "Zero Error";
    } else {
        return "Negative Error";
    }
}

//Main
function main() {
    const n = +(readLine());
    
    for (let i = 0; i < n; i++) {
        const a = +(readLine());
      
        try {
            console.log(isPositive(a));
        } catch (e) {
            console.log(e.message);
        }
    }
}
