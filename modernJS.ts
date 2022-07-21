// var and let
//var - local scope (not restricted), functional scope (restrict)
//let - local scope (restricted), functional scope (restricted)

//const - variable that never changes

// function sum(a: number, b: number) {
//     var variable;
//     variable = a + b;
//     return variable;
// }

// if (true) {
//     let localVariable = 3;
// }
// //able to access var, but not let
// console.log(localVariable);

// //different ways of writing arrow f in ts

// const callMessage = (message: string) => console.log(message);
// const callMessage2: (m: string) => void = message => console.log(message);

//mark this file as external module to avoid block variable declaration
// export { }




// rest parameter for function - for taking in unlimited parameters
const addNum = (...numbers: number[]){
    return numbers.reduce((ac, cv) => {
        return ac + cv
    }, 0)
}

//you can also limit no of parameters with tuple
const addNum2 = (...numbers: [number, number, number]){
    return numbers.reduce((ac, cv) => {
        return ac + cv
    }, 0)
}

let totalNum = addNum(1, 2, 3, 4);
console.log(totalNum);



//array and object destructing - break the structure of them and use individual element
const hobbies = ["walk", "sing", "boxing"];

//take out h1=hobbies[0], h2=hobbies[1], otherH=[...other Elements]
const [h1, h2, ...otherH] = hobbies;
console.log(h1, h2, otherH);

const person = {
    firstName: "Alex",
    age: 31
}

//take out values by keys, you can also use : to use new alias
const { firstName: userName, age } = person;
console.log(userName, age, person)

