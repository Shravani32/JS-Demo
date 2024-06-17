//primitive data types:

//String ,number,Boolean,null,undefined,Symbol,BigInt

// const iD = Symbol('123');
// const iD2=Symbol('123')
// console.log(iD==iD2)

// const bigNum=843756169417494748n
// console.log(bigNum)

//Reference data types(non-primitive)

//Array , Objects , Functions

// const heros=["Shaktiman","Nagarjun","Doga"]

// let myObj={
//     name:"Shravani",
//     age:20,    
// }

// console.log(myObj)

// const myFunc=function (){
//      console.log("Hello World!!");
// }

// const func=myFunc()
// console.log(myFunc())

// console.log(typeof myFunc);
// console.log(typeof myObj)
// console.log(typeof heros)


//+++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) copy, Heap (Non-primitive) reference

// let myName="shravanijoshi.com" //primitive goes in stack
// let anotherName=myName
// console.log(anotherName);

let obj={
    name:"ssj",
    age:22
}                //non-primitive goes in heap


let user={
    email:"user@gmail.com",
    username:"ggg",
    password:"user@123"
}

let myObj=user;
// console.log(myObj);

myObj.email="ssj@gmail.com"

// myObj={
//     name:"ssj",
//     age:22
// }

console.log(user.email)
console.log(myObj.email)

