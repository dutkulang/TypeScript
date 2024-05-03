// 


// let sum = (a: number, b: number) =>  {
//     console.log(a + b);
// }

// sum(2,3)
let boolOnly = [true, false]
let myStringArray: (string)[] = ['Dut', "Kulang", "Machour"];
let boolAndNumArray: (boolean | number)[] = [true, false, 42];
// console.log(myStringArray[0]);


// let keepOrder: (string | boolean)[] = [true,'TypeScript', false]

// let keepOrder: [Boolean, String, Boolean | number] = [true, 'TypeScript'];

type Student = {
    Name: string,
    // (string | boolean)
    age: number
}
const dut: Student = {
    Name : "Dut",
    age : 23
}
console.log(`${dut.Name.toLowerCase()}`)

let herName: string = "Ahok Biar"

console.log(herName.toLowerCase())