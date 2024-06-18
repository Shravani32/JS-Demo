const user={
    username:"hitesh",
    price:99,

    welcomeMessage : function()  {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
    
}

// user.welcomeMessage()
// user.username="Sam"
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     let username="Hitesh"
//     console.log(this.username)
// }

// chai()


const chai =()=>{
    let username="Hitesh"
    console.log(this)
}

chai()


