
//use type alias

type Combinable = number | string;
type ConversionDecsriptor = "as-number" | "as-text";

function combine(
    input1: Combinable,
    input2: Combinable,
    resultConversion: ConversionDecsriptor) {
    let result;

    if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === "as-number") {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combineAges = combine(3, 4, "as-number");
console.log(combineAges);

const combineStringAges = combine("3", "4", "as-number");
console.log(combineStringAges);

const combinedNames = combine("tom", "alex", "as-text");
console.log(combinedNames)