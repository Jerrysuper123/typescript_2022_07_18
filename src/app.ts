
interface PlusFn {
    (a: number, b: number): number
}
let plus: PlusFn;
plus = (a: number, b: number) => {
    return a + b;
}

//properties in interface and class can be optional
//function parameter also can be optional using ?
interface Named {
    //option interface properties
    readonly name?: string;
    outputName?: string;
}
interface Greetable extends Named {
    greet(phrase: string): void;
}


class Person implements Greetable {
    //optional class properties
    name?: string;
    //optional parameter
    constructor(n?: string) {
        this.name = n;
    }
    greet(phrase: string): void {
        //check if name existed, becos we have made it optional
        if (this.name) {
            console.log(phrase + this.name)
        } else {
            console.log("hi")
        }

    }
}


let person1: Greetable;
//name is readOnly restricted by interface
// person1.name = "Manu";

person1 = new Person();

person1.greet("Hello i am ");