// for(let i=1; i<=10; i++) {
    
//     console.log(i);
// }

// for(let i=1; i<=10; i++) {
//     if(i==5){
//         console.log("5 is the best number")
//     }
//     console.log(i);
// }

// for(let i=1; i<=10; i++) {
//     console.log(i*2);
// }

// for (let i=1; i<=10; i++) {
//     console.log(`Table of ${i}`);
//     for(let j=1; j<=10; j++) {
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
// }

// const myArray=["dinesh","nitesh","rahul","vishnu","mahendra"];

// for (let i=0 ;i<myArray.length;i++){
 
//     console.log(myArray[i]);
// }

for(let i=1; i<=10; i++) {
    if(i==2){
        console.log("2 is detected")
        break
    }
    console.log(i);
}
for(let i=1; i<=10; i++) {
    if(i==2){
        console.log("2 is detected")
        continue
    }
    console.log(i);
}