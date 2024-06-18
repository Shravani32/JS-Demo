// for of 

const arr=[1,2,3,4,5]

// for (const i of arr) {
    // console.log(i)
// }

// const greetings="Hello World"

// for(const greet of greetings){
//     if(greet==' '){
//         continue;
//     }
//     console.log(`Each char is ${greet}`)
// }

//maps : only stores unique values
// const map=new Map()
// map.set('In',"India")
// map.set('USA',"United States of america")

// console.log(map)

// for (const [key,value] of map) {
//     console.log(key , '->', value)
// }

//object is not iterable using forof loop


//for in loop for iterating object

const myObject={
   js:"Javascript",
   cpp:"c++",
   rb:"ruby",
   swift:"swift by apple"
}

for(const key in myObject){
//    console.log(`${key} -> ${myObject[key]}`)
}

// const programming =["c","cpp","python","java","ruby","js"]

// for (const i in programming)
//     console.log(programming[i])


// const map=new Map()
// map.set('In',"India")
// map.set('USA',"United States of america")

// for (const key in map)
//     console.log(key)

//for each loop
const programming =["c","cpp","python","java","ruby","js"]

// programming.forEach(function (item){
//     console.log(item)
// })

// function printMe(item){
    // console.log(item)
// }

// programming.forEach(printMe)

// programming.forEach((item,index,arr)=>{
//     console.log(item,index,arr)
// })

// const myCoding=[
//     {
//         languageName:"Js",
//         languageFileName:".js"
//     },

//     {
//         languageName:"Java",
//         languageFileName:".java"
//     },

//     {
//         languageName:"Python",
//         languageFileName:".py"
//     }
// ]

// myCoding.forEach((item)=>{
//     console.log(item.languageName)
// })

// const coding=["Js","c++","Java","Python"]

// const values = coding.forEach((item)=>{
// //    console.log(item)
//    return item
// })

// console.log(values)


// const myNums=[1,2,3,4,5,6,7,8,9,10]

//when you open scope you have to return otherwise automatically it returns
// const newNums=myNums.filter((num)=>{
//     return num>4
// })
// console.log(newNums)


// const newNums=[]

// myNums.forEach( (num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// })

// console.log(newNums)

const mynums=[1,2,3,4,5,6,7,8,9,10]

const newNums=mynums.map((num) =>{return num+10})
console.log(newNums)

