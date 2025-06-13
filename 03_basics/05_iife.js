//Immedetly Invoked Function Execution

(function message(){
    //named IIFE
    console.log("Hello World")
})();

(()=>{
    //unamned IIFE
    console.log(" another message")
})();

((name)=>{
    //pass parameter 
    console.log(`${name} how are you`)
})("dinesh");