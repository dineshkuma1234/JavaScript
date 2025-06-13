//**************NUMBERS*************
const score=100;
// console.log(score);//100
console.log(typeof score);//number


const balance =new Number(100);
console.log(typeof balance);//object (balance is an object created using the Number constructor.)
console.log(typeof Number);//function

// console.log(balance);//[Number:100]
// console.log(balance.toString());//100
// console.log(balance.toString().length);//3

// console.log(balance.toFixed(2));//100.00
// console.log(balance.toFixed(1));//100.0

//****************toPreciion****************
const anotherNum= 23.8900
// console.log(anotherNum.toPrecision(3));//23.9
// console.log(anotherNum.toPrecision(2));//24

const anotherNums= 123.8922
// console.log(anotherNums.toPrecision(3));//124
// console.log(anotherNums.toPrecision(2));//1.2e+2

//****tolocaleString     *
const hundreads =10000000
// console.log(hundreads.toLocaleString('en-IN'));//1,00,00,000


//+++++++++++++++++ Maths ****************
// console.log(Math);
// console.log(Math.abs(-4));//4
// console.log(Math.round(4.6));//5
// console.log(Math.ceil(4.2));//5
// console.log(Math.floor(4.9));//4
// console.log(Math.sqrt(25));//5
// console.log(Math.max(2,3,4,5));//5
// console.log(Math.min(2,3,4,5));//2
// console.log(Math.pow(10,2));//100 (10^2)


//-----Math.random()--------------------------------
console.log(Math);//Object [Math] {}

console.log(Math.random());
console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1)

const min=10;
const max=20;

console.log(Math.floor(Math.random()*(max-min+1))+min);