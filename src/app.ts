


const button = document.querySelector("button")!;

function sum(n1: number, n2: number) {
    if (n1 + n2 > 0) {
        return n1 + n2;
    }
    //no implicit return for number <0
}

function callMessage(message: string, useUsedParameter: number) {
    // declared but never used
    let unUsedLocals = "ABC";
    console.log(message)
}

//if you use bind, only provide this, not a string message, ts will complain
if (button) {
    button.addEventListener("click", callMessage.bind(this, "a message", 23))
}
