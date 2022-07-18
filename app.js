function combine(input1, input2) {
    //ts does not know if you want to combine string or numbers, so be specific
    var result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combineAges = combine(3, 4);
console.log(combineAges);
var combinedNames = combine("tom", "alex");
console.log(combinedNames);
