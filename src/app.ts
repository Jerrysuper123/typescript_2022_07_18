


type Admin = {
    name: string;
    privilege: string[]
}

type Employee = {
    name: string;
    startDate: Date
}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: "Max",
    privilege: ["free medical"],
    startDate: new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;


//similar to Java constructor overload, we can overload our functions in ts as well
function addNumber(a: number, b: number): number;
function addNumber(a: string, b: string): string;
function addNumber(a: number, b: string): string;
function addNumber(a: string, b: number): string;
function addNumber(a: Combinable, b: Combinable) {
    //type check below is called type guard
    //we give union type flexibility but alway guard our type
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}


const result = addNumber("Max", " Manu");
//without function overload, ts cannot infer it as string to use split method
result.split(" ")

//optional chaining using ?, if existed, then go on
const fetchUserData = {
    id: "u1",
    name: "max",
    job: {
        title: "CEO",
        description: "My own company"
    }
}

//if job existed, then do sth
// console.log(fetchUserData.job && fetchUserData.job.title)
console.log(fetchUserData?.job?.title)

//nullish coalescing - deal with undefined and null only
const userInput = "";
//below way all undefined, null, empty string, will store default value
// const storeData = userInput || "DEFAULT";

//double "??" will only check undefine and null
const storeData = userInput ?? "DEFAULT";
console.log(storeData);


// type UnknowEmp = Admin | Employee;

// function printEmpInfo(emp: UnknowEmp) {
//     console.log(emp.name);
//     //type guard - if a key is in an object
//     if ("privilege" in emp) {
//         console.log("privilege: ", emp.privilege);
//     }
//     if ("startDate" in emp) {
//         console.log("startDate: ", emp.startDate)
//     }
// }

// printEmpInfo(e1);
// printEmpInfo({ name: "Tom", startDate: new Date() })

// //use type guard for class

// class Car {
//     drive() {
//         console.log("car is driving")
//     }
// }

// class Truck {
//     drive() {
//         console.log("truck is driving")
//     };

//     loadCargo(amount: number) {
//         console.log("Loading cargo..." + amount)
//     };
// }

// let v1 = new Car();
// let v2 = new Truck();

// //vehicle is class Car or Truck
// type Vehicle = Car | Truck;

// function useVehicle(vehicle: Vehicle) {
//     vehicle.drive();
//     //below is type guard, class is actually an object in js (key in a class)
//     // if ("loadCargo" in vehicle) {
//     if (vehicle instanceof Truck) {
//         //option + up arrow
//         vehicle.loadCargo(3000);
//     }
// }

// useVehicle(v1)
// useVehicle(v2)


// //discriminating/differentiate union (we can identify exactly what type it is)

// interface Bird {
//     //use type as Bird to differentiate
//     type: "bird";
//     flyingSpeed: number;
// }

// interface Horse {
//     type: "horse";
//     runningSpeed: number;
// }

// //animal is a union type, but it would be hard for us to discriminate/recognize
// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//     //auto access the type created thru interface
//     switch (animal.type) {
//         case "bird":
//             console.log(animal.flyingSpeed);
//             break
//         case "horse":
//             console.log(animal.runningSpeed)
//     }
// }

// moveAnimal({ type: "bird", flyingSpeed: 1000 })


// //type casting on dom elements, as TS does not read our html files

// //1. ts only know it is a htmlElement, does not know if it is an input, you need to tell ts
// //2. use "!" to tell ts it is definitely not a null
// const htmlInputElement = <HTMLInputElement>document.getElementById("text-input")!;
// htmlInputElement.value = "Hi there";

// //alternative way
// // const htmlInputElement2 = document.getElementById("text-input2")! as HTMLInputElement;
// // htmlInputElement2.value = "Hi there2";

// const htmlInputElement2 = document.getElementById("text-input2");
// if (htmlInputElement2) {
//     (htmlInputElement2 as HTMLInputElement).value = "Hi there2";
// }

// //index properties - we do not know how many prop, and we do not know the exact prop name
// interface ErrorContainer {
//     // id: number, [will not work if using number]
//     [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//     email: "invalid email",
//     username: "invalid username"
// }