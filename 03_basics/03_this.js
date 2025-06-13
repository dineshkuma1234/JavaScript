const userDetails={
    name:"dinesh",
    age:25,
    email:"dinesh@gmail.com",
    userLoggedin:function(){
       console.log(`${this.name}, is logged in and age is ${this.age}`);
       console.log(this)
    }
    
};
userDetails.userLoggedin()
userDetails.name="sam"
userDetails.age=32
userDetails.userLoggedin()

// console.log(this)//  if we globally do this it return {}


