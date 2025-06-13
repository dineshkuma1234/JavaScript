console.log(2>1);//true
console.log("2">1);//true
console.log("02">1);//true

//In JavaScript, when comparing null with a number using the > operator, null is treated as 0. 
console.log(null>0);//false
console.log(null==0);//false
console.log(null>=0);//true


console.log("2"=== 2)//false
console.log(2==2);//true