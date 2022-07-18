
//below is redundant to declare its type
// let personA: {
//     name: string;
//     age: number
// } = {
//     name: "tom",
//     age: 33
// }



// let person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     // tuple format
//     role: [number, string]
// } = {
//     name: "jerry",
//     age: 23,
//     hobbies: ["run", "read"],
//     //we want role only has length of 2 with fixed types, first as number, second as string
//     //then we would use tuple here
//     role: [2, "admin"]
// }

//tuple can catch all errors except for push
// person.role.push("clerk");
//number cannot assign to string due to tuple type
// person.role[1] = 3;
//tuple only allow 2 elements
// person.role = [1, "admin", "boss"]



// const ADMIN = 0;
// const CLERK = 1;

//enum could rep above as human readable identifier
//ADMIN=0, CLERK=1;
enum Role { ADMIN, CLERK };

//you can also assign your own index to the enum, either number or string
// enum Role { ADMIN=101, CLERK="Clerk" };

let person = {
    name: "jerry",
    age: 23,
    hobbies: ["run", "read"],
    // you can use role. to access different role easily
    role: Role.ADMIN
}

// you can use Role to access different roles easily
if (person.role === Role.ADMIN) {
    console.log(person.role)
}


