//singleton :  when we create object using literals singleton is not created but when object is created by constructor singleton is created

//object literals :

// const mySym=Symbol("Key1")


// const JsUser={
//     name:"Shravani",
//     age:20,
//     "full-name":"Shravani Joshi",
//     mySym:"mykey1",
//     location:"Sangli",
//     email:"@gmail.com",
//     isLoggedIn:["Monday","Saturday"]
// }

// console.log(JsUser.email)
// console.log(JsUser["full-name"])
// console.log(JsUser.mySym)
// console.log(typeof JsUser[mySym])

// JsUser.email="fij@gmail.com"
// Object.freeze(JsUser)   //after this changes are freezed and no further changes are accepted
// JsUser.email="fij@gmail.com"
// console.log(JsUser.email)
// console.log(JsUser)

// JsUser.greeting=function(){
//     console.log("Hello JS user");
// }

// JsUser.greetingTwo=function(){
//     console.log(`Hello Js User, ${this.name}`)
// }

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());


//object creatation using constructor

// const tinderUser= new Object()  //singleton
// const tinderUser={}  //non-singleton
// tinderUser.id="444"
// tinderUser.name="nenvn"
// tinderUser.isLoggedIn=false


// // console.log(tinderUser);

// const regularUser={
//     email : "mfem$%$%",
//     fullname: {
//         userfullname:{
//             firstname:"Shravani",
//             lastname:"Joshi"
//         }
//     }
// }

// // console.log(regularUser.fullname.userfullname.lastname);

// const obj1={
//     1:"a",
//     2:"b"
// }

// const obj2={
//     3:"c",
//     4:"d"
// }

// const obj4={
//     5:"e",
//     6:"f"
// }

// // const obj3={obj1,obj2}

// // const obj3=Object.assign({},obj1,obj2,obj4)

// const obj3={...obj1,...obj2}
// // console.log(obj3);

// const users=[
// {
//     id:1,
//     email:"h@gmail.com"
// },

// {
//     id:2,
//     email:"g@gmail.com"
// },

// {
//     id:3,
//     email:"i@gmail.com"
// },

// {
//     id:4,
//     email:"j@gmail.com"
// }

// ]

// console.log(users[1].email)

// console.log(tinderUser)

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))


//destructuring of objects
const course={
    courseName:"JS",
    price:"999",
    courseInstructor:"hitesh"

}

//course.courseInstructor

// const {courseInstructor}=course
// console.log(courseInstructor)


//object without name is json format

//json

// {
//     "name":"SSJ"
//     "course":"JS"
//     "price":"fee"
// }


