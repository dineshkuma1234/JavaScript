function add(a,b){
    // console.log(a+b);
    return `value: ${a+b}`
};

// console.log(add(2,3));//value:5

// const result=add(2,3);
// // console.log(result);///value:5


function isLoggedIn(username="shyam"){
  if(!username){
    console.log("please enter a username")
    return
  }
  return`${username} just logged in`
  
}

// console.log(isLoggedIn("dinesh"));
// console.log(isLoggedIn());

//***************pass multiple argument************/
function cart(...num){
    return num
}
// console.log(cart(12,2,3,4,5,6,7));

//*********pass object into function* */
const user={
    name:"dinesh",
    age:23
}

function handleObject(anyObject){
    console.log(`my name is ${anyObject.name} and my age is ${anyObject.age}`)
}

// handleObject(user);//my name is dinesh and my age is 23

handleObject({
    name:"rahul",
    age:24
})//my name is rahul and my age is 24

//****pass array into function**/

const myArray=[1,2,3,4,5,6,7,8,9]

function handleArray(anyArray){
   return anyArray[1]
}
console.log(handleArray(myArray));//2
console.log(handleArray([200,300,499,500]));//300
