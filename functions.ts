

function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(num: number): void {
    console.log("result is " + num)
}


// let combineValues: Function;

//we can be more specific about the function shape
let combineValues: (a: number, b: number) => number;
combineValues = add;
//below will trigger error, because different function
// combineValues = printResult;

//error below combineValues is a function 
//combineValues = 5;
console.log(combineValues(2, 3))


// printResult(add(2, 3))


//call back function

function addAndCall(n1: number, n2: number, cb: (number) => void) {
    //above is set to be void, does not mean below we cannot return
    //it means that we are not using the returned value to do anything in this function
    const result = n1 + n2;
    cb(result);
}

addAndCall(10, 20, (result) => {
    console.log(result);
    //we return result, even though type is set to be void, void is able to accept this
    // return result;
})