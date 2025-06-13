//Stack (where we get an copy so it doesn't affect the origional value)
let id="dineshjaipur22";

let anotherId=id;
console.log(anotherId);//dineshjaipur22


anotherId="dineshjaipur23";
console.log(anotherId);//dineshjaipur23

console.log(id);//dineshjaipur22

//***Heap(where we get an reference so its affect the  original value when we make change it  the refernces)
let userOne={
    email:"dineshjaipur22@gmail.com",
    Upi:"dinesh@yble"
}   

let userTwo=userOne;

userTwo.email="kushal@gmail.com";
console.log(userTwo.email);//kushal@gmail.com
console.log(userOne.email);//kushal@gmail.com
