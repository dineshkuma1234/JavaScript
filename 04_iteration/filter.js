const myArrays=[1,2,3,4,5,6,7,8,9,10]
const value=myArrays.forEach((num)=>num)
// console.log(value);//undefine (we cant store  this method into variables)

const myArray=[1,2,3,4,5,6,7,8,9,10]

// const newArray=myArray.filter( (num)=> num>5)
// console.log(newArray);

const newArray=[];
myArray.forEach((num)=>{
    if(num >5){
        newArray.push(num);
       
    }
} )
// console.log(newArray);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   const userBooks=books.filter((bk)=>bk.title==="Book One")
// const userBooks=books.filter((bk)=>bk.genre==="Science")

const userBooks=books.filter((bk)=>{
    if(bk.publish===2011 && bk.genre==="Science") {
     console.log(bk.title??"no book find")
     
    }
});

  console.log(userBooks);

  // return (bk.publish===2011 && bk.genre==="Science") ?
//   bk.title :books


// const number=[1,2,3,4,5,6,7,8,9,10]

// const evenNumber=number.filter((num)=>num%2===0)
// console.log(evenNumber)