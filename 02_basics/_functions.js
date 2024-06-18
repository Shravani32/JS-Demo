function myName(){
    console.log("Shravani Joshi");
}

// myName()

function sum(a,b){
    return a+b
}

// console.log(sum(4,null))

//rest operator

function print(...num1){
   return num1
}

// console.log(print(1,2,3))


const user={
    username:"shravani32",
    prices:199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)

handleObject(
    {
        username:"shravani32",
        prices:199
    }
)


const myNewArray=[100,200,300,500]

function handleArray(getArray){
    return getArray[2];
}

console.log(handleArray(myNewArray))