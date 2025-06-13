//objet literals
const mySym=Symbol("key1")

const jsUser={
    name:"Dinesh",
    "fullName":"Dinesh kumar",
    age:25,
    city:"Pune",
    email:"dinesh@gmail.com",
    workingDays:["Sun", "Mon", "Tue",],
    [mySym]:"myKey1",
    message:function(){
        console.log("Identification")
    }
    
};
// console.log(jsUser);
// console.log(jsUser.age);//25
// console.log(jsUser["age"]);//25
// console.log(jsUser["fullName"]);//dinesh kumar

// console.log(jsUser.workingDays);//[ 'Sun', 'Mon', 'Tue' ]

//  console.log(jsUser[mySym]);//myKey1

// //acce the message function
// jsUser.message()
// console.log(jsUser)

jsUser.greetings=function() {
    console.log("hello js users how are you");
}

// console.log(jsUser.greetings())

jsUser.greetingTwo=function() {
    console.log(`hello js user myName is ${this.fullName}`)
}

console.log(jsUser.greetingTwo());

jsUser.email="dineshjaipur22@gmail.com"
// console.log(jsUser);


Object.freeze(jsUser);
jsUser.email="dineshjaipur32@gmail.com"
console.log(jsUser);