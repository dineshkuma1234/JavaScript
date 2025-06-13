// function my() {
//     const  name="diinesh"
//     console.log(this.name)
//     console.log(this)//gives u lots of values
// }
// my()//undefined becouse "this" not use in finction


// const my=function(){
//     const  name="diinesh"
//     // console.log(this.name)
//     // console.log(this)//gives u lots of values 
// }
// my()//undefined becouse "this" not use in finction


const add=(a,b)=>{
    return a+b;
    console.log(this)//in arrow function its not gives u anything
}

// const add=(a,b)=> a+b;

// const add=(a,b)=>( a+b);

// const add=(a,b)=> ({name:"dinesh"});

// console.log(add(2,3))//5



/*in Normal function:this is dynamically scoped based on how the function is called.
in Arrow function:this is lexically scoped based on the surrounding scope at the time the arrow function is defined. */