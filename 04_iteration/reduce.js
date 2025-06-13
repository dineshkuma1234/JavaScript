const value=[1,2,3,4,4,6,6,7,8,99]

// const total=value.reduce(function (acc,curr){
//     return acc+curr
// },0)

// const total= value.reduce((acc,curr)=>acc+curr,0)

// console.log(total)
// const addOne=total+1
// console.log(addOne)


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalPrice=shoppingCart.reduce((acc,item)=>acc+item.price,0)

console.log(totalPrice)