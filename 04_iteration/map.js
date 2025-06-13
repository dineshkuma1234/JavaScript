const numbers=[2,3,4,5,6,7,8,9,10,11,12,13,14,15]

const newNums=numbers.map((num)=>num+2)
                    .map((num)=>num+1)
                    .filter((num)=>num%2===0)
console.log(newNums)