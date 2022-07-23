// // const names: string[] = [];
// const names: Array<string> = []
// names[0].split(" ");


// //<string> tell the promise return a string
// const promise: Promise<string> = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("Success")
//     },2000)
// })

// //then to process the return data
// promise.then((data)=>{
//     data.split(" ");
// })

// function merge0(objA: object, objB: object) {
//     return Object.assign(objA, objB);
// }

// const mergeName0 = merge0({ name: "max" }, { age: 33 })
// //ts does not know mergeName has a name prop, because we did not inform its type
// console.log(mergeName0.name)


//just like class, U extends to object must have the prop of an object
function merge1<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

//so 33 is not a valid parameter of U
const mergeName1 = merge1({ name: "max", hobbies: ["run"] }, 33)
console.log(mergeName1.name);


//generic function

//an object that has length prop so that ts allows element.length
interface Lengthy {
    length: number
}

//T must have length prop
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = "Got no text";
    if (element.length === 1) {
        descriptionText = "got 1 text";
    } else { element.length > 1 } {
        descriptionText = "got " + element.length + " text";
    }

    return [element, descriptionText]
}

console.log(countAndDescribe(["hi", "there"]))

//keyof - indiciate 1 type is the keyof another generic type
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key];
}
//ts will complain name does not exist in object T
extractAndConvert({ age: 20 }, "age")


//union type is flexible to be any data type, and array can be a mixtuer of number, string, boolean
class DataStorage2 {
    private data: (string | number | boolean)[] = [];
}

//generic type lock in the type when you create the instance, it has be either an array of number, string or boolean
class DataStorage<T extends string | number | boolean>{
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item)
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) === -1) return;
        this.data.splice(this.data.indexOf(item), 1); //indexOf return -1 if did not find
    }

    getItems() {
        return [...this.data]
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Max")
textStorage.addItem("violet")
textStorage.removeItem("violet")
console.log(textStorage.getItems())

const numberStorage = new DataStorage<number>();

//do not use above class for obj
// const objStorage = new DataStorage<object>();
// let referObj = { name: "max" };
// objStorage.addItem(referObj);
// objStorage.addItem({ name: "manu" });
// //cannot remove {name: "max"} because obj is an reference
// objStorage.removeItem(referObj);
// console.log(objStorage.getItems())

//built in utility partial type
interface CourseGoal {
    title: string;
    description: string;
}

function createCourse(title: string, description: string): CourseGoal {
    // return { title: title, description: description }
    //use generics with partial keyword
    let course: Partial<CourseGoal> = {};
    course.title = title;
    course.description = description;
    return course as CourseGoal;
}

const names: Readonly<string[]> = ["tom", "jerry"];
//below cannot push because it is a read only array
// names.push("max");
