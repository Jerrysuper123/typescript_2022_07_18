"use strict";
var plus;
plus = function (a, b) {
    return a + b;
};
var Person = /** @class */ (function () {
    //optional parameter
    function Person(n) {
        this.name = n;
    }
    Person.prototype.greet = function (phrase) {
        //check if name existed, becos we have made it optional
        if (this.name) {
            console.log(phrase + this.name);
        }
        else {
            console.log("hi");
        }
    };
    return Person;
}());
var person1;
//name is readOnly restricted by interface
// person1.name = "Manu";
person1 = new Person();
person1.greet("Hello i am ");
