

function Logger(logString: string) {
    console.log("Logger factory")
    return function (constructor: Function) {
        console.log(logString);
        console.log(constructor)
    }
}

function WithTemplate(template: string, hookId: string) {
    console.log("Template factory")
    //originalConstructor is T type
    //T type that accept any arg (because we are inserting new arg returned class) and return an obj with "name" key
    return function <T extends { new(...args: any[]): { name: string } }>(originalConstructor: T) {
        //return a new class extends f/constructor the same thing
        return class extends originalConstructor {
            //it is arg, but we do not use it , so write _ instead
            constructor(..._: any[]) {
                //calling original constructor with super, save original class
                super();
                //below extra logic when the class is instantiated
                console.log("creating template...")
                let hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    //this.name is to get instance of the class
                    document.querySelector("h1")!.textContent = this.name;
                }
            }
        }
    }

}
//run factory, logger, then withTemplate
//run deco f, withTemplate then Logger
@Logger("Logging...")
@WithTemplate("<h1>With Template</h1>", "app")
class PersonClass {
    name = "Max";

    constructor() {
        console.log("creating an object...")
    }
}

const pers = new PersonClass(); //calling constructor
console.log(pers);


/*
decorator using class when it is defined not when it is instantiated

Logging...
app.js:10 class PersonClass {
    constructor() {
        this.name = "Max";
        console.log("creating an object...");
    }
}
app.js:15 creating an object...
app.js:22 PersonClass {name: 'Max'}
*/



function Log(target: any, propertyName: string) {
    console.log("Property decorator")
    //target is the constructor, propertyName is "title"
    console.log(target, propertyName)

}

//decorator for accessor (protoType, name of the method, description of the property)
function Log2(target: any, name: string | symbol, descriptor: PropertyDescriptor) {
    console.log("accessor decorator")
    console.log(target);
    console.log(name);
    console.log(descriptor)
}

// accessor decorator
// app.js:62 price
// app.js:63 
// {get: undefined, enumerable: false, configurable: true, set: ƒ}
// configurable: true
// enumerable: false
// get: undefined
// set: ƒ price(val)
// [[Prototype]]: Object

function Log3(target: any, name: string | symbol, descriptor: PropertyDescriptor) {
    console.log("method decorator")
    console.log(target);
    console.log(name);
    console.log(descriptor)
}

// method decorator
// app.js:77 
// {constructor: ƒ, getFinalPrice: ƒ}
// constructor: class Product
// getFinalPrice: ƒ getFinalPrice(taxRate)
// set price: ƒ price(val)
// [[Prototype]]: Object
// app.js:78 getFinalPrice
// app.js:79 
// {writable: true, enumerable: false, configurable: true, value: ƒ}
// configurable: true
// enumerable: false
// value: ƒ getFinalPrice(taxRate)
// writable: true
// [[Prototype]]: Object

//parameter decorator(target, name of the method, position of the parameter=0)
function Log4(target: any, name: string | symbol, position: number) {
    console.log("parameter decorator")
    console.log(target);
    console.log(name);
    console.log(position)
}

class Product {
    @Log
    title: string;
    private _price: number;
    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }

    @Log2
    set price(val: number) {
        if (val > 0) {
            this._price = val;
        } else {
            throw new Error("val for price must be postive!")
        }
    }
    @Log3
    getFinalPrice(@Log4 taxRate: number) {
        return this.price * (1 * taxRate)
    }
}

// Property decorator
// app.js:57 
// {constructor: ƒ, getFinalPrice: ƒ}
// constructor: class Product
// getFinalPrice: ƒ getFinalPrice(taxRate)
// set price: ƒ price(val)
// [[Prototype]]: Object

function AutoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            //this here refers to the object calling get()
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    }
    //will override old descriptor
    return adjDescriptor;
}

class Printer {
    message = "this works";
    //decorator
    @AutoBind
    showMessage() {
        console.log(this.message);
    }
}

const p = new Printer();
const button = document.querySelector("button")!;
//below will not work, the "this" in the showMessage f refers to button in event listener
// button.addEventListener("click", p.showMessage)

//now we use showMessage f.bind(p object) - meaning to use p object
button.addEventListener("click", p.showMessage);



function Required() { };

function PositiveNumber() { };

function validate(obj: object) { }

class Course {
    @Required
    title: string;
    @PositiveNumber
    price: number;

    constructor(t: string, p: number) {
        this.title = t;
        this.price = p;
    }
}

const courseForm = document.querySelector("form")!;
courseForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const titleEl = document.getElementById("title") as HTMLInputElement;
    const priceEl = document.getElementById("price") as HTMLInputElement;
    const title = titleEl.value;
    const price = +priceEl.value;

    const createdCourse = new Course(title, price);
    if (!validate(createdCourse)) {
        alert("Invalid input, enter again");
        return;
    }
    console.log(createdCourse)
})