
function combine(input1: number | string, input2: number | string) {
    let result;
    //ts does not know if you want to combine string or numbers, so be specific
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }

    return result;
}

const combineAges = combine(3, 4);
console.log(combineAges);

const combinedNames = combine("tom", "alex");
console.log(combinedNames)