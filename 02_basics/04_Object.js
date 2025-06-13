// const user=new Object();//singleton Object Declaration

const user={
    name:"dinesh",
    email:"dinesh@gmail.com",
    age:25,
    isLoggedIn:false,
    userName:{
        fullName:{
            firstName:"dinesh",
            lastName:"kumar"
        }
    }
}
//console.log(user)

// console.log(user.userName);//{ fullName: { firstName: 'dinesh', lastName: 'kumar' } }

//  console.log(user.userName.fullName.firstName);//dinesh

// console.log(user.userName && user.userName.fullName && user.userName.fullName.hasOwnProperty("lastName"));//true
// console.log(user.userName.fullName.hasOwnProperty("lastName"));//true

// console.log(Object.keys(user));//[ 'name', 'email', 'age', 'isLoggedIn', 'userName' ]

/*console.log(Object.values(user));/*[
    'dinesh',
    'dinesh@gmail.com',
    25,
    false,
    { fullName: { firstName: 'dinesh', lastName: 'kumar' } }
]*/

/*console.log(Object.entries(user));
 [
  [ 'name', 'dinesh' ],
  [ 'email', 'dinesh@gmail.com' ],
  [ 'age', 25 ],
  [ 'isLoggedIn', false ],
  [ 'userName', { fullName: [Object] } ]
]*/

const obj1={1:"a",2:"b",3:"c",4:"d"}
const obj2={5:"e",6:"f",7:"g"}
const obj3={8:"w",9:"r"}

// const obj4=Object.assign(obj1,obj2,obj3);
// console.log(obj4===obj1)
// console.log(obj1)//obje1 is channged and all the obj values arecopied in obj1  ***To avoid This**
const obj4=Object.assign({},obj1,obj2,obj3);
// console.log(obj4);

//***values from DataBase  Comes in Array of Object formate*/

const data=[
    {
        id:1,
        name:"John",
        email:"john@gmail.com"
    },
    {
        id:2,
        name:"Janvi",
        email:"janvi@gmail.com"
    }
]
// console.log(data[1].name)//janvi

//**Object Destructuring */
const course={
    book:"JavaScript",
    prize:999,
    CourseInstructor:"Shyam"
}
const {CourseInstructor:instructor}=course;
console.log(course);//{ book: 'JavaScript', prize: 999, CourseInstructor: 'Shyam' }
console.log(instructor);//shyam
