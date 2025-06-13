const myDate = new Date();

// console.log(typeof myDate);//object

// console.log(myDate);//2024-07-27T06:28:49.990Z
// console.log(myDate.toString());//Sat Jul 27 2024 11:53:18 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());//Sat Jul 27 2024
// console.log(myDate.toLocaleDateString());//27/7/2024
// console.log(myDate.toISOString());//2024-07-27T06:23:18.264Z
// console.log(myDate.toTimeString());//11:53:18 GMT+0530 (India Standard Time)
// console.log(myDate.toUTCString());//Sat, 27 Jul 2024 06:23:18 GMT
//console.log(myDate.toLocaleString());//27/7/2024, 12:20:07 pm

//const createdDate=new Date(2023,8,9);//9/9/2023, 12:00:00 am
//let createdDate=new Date(2023,8,9,13,4,23);//9/9/2023, 1:04:23 pm
//const createdDate=new Date("2023-08-23")//23/8/2023, 5:30:00 am
//const createdDate=new Date("01-03-2024")//3/1/2024, 12:00:00 am

// console.log(createdDate.toLocaleString());

let myTimeStamp= Date.now();
// console.log(myTimeStamp);//gives u the current time in  milliseconds from 1970 to now

//**convert milli to second */
// console.log(myTimeStamp/1000);//values in decimal 
// console.log(Math.round(myTimeStamp/1000));//values not in decimal

// **convert milli to hours */
// let millToHours=1000*60*60;
// console.log(Math.round(myTimeStamp/millToHours));
// console.log(Math.round(myTimeStamp/(1000*60*60)))


// let todayDateTime=new Date("07-27-2024");
// console.log(todayDateTime.getTime());//gives u the time between jan-1-1970 to 07-26-2024 in milliseconds


let newDate=new Date();
// console.log(newDate.getDate());//27
// console.log(newDate.getMonth());//6 start from 0
// console.log(newDate.getDay());//6 start from saturday=1
// console.log(newDate.getFullYear());//2024
// console.log(newDate.getHours());//13 todays hours 

let hey= newDate.toLocaleString('default',{
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

console.log(hey);//Saturday 27 July, 2024