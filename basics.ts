//added boolean and string type
function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    if (showResult) {
        console.log(phrase + (n1 + n2))
    } else {
        return n1 + n2;
    }
}

const showResult = true;
const resultPhrase = "the result: ";
const result = add(2, 3, showResult, resultPhrase);


//type inference
// below type is number3: number
let number3 = 3;

//below type is number4:4 (strict const)
const number4 = 4;

//not a good practice to declare below, as ts already know it is a number
let number5: number = 5;
//so write let number5 = 5 instead