function outer(){
    const name="dinesh"
    function inner(){
        const website="with Code"
        return name + " " + website;
    }
   inner()
    // console.log(inner());
    return name;

}
// console.log(outer())


if(true){
    const name="dinesh"
    if(name==="dinesh"){
        const website="with Code"
        // console.log(name + " " + website);
    }
    // console.log(website)//X
    // console.log(name)
}
// console.log(name)//X


/*Intresting Hosting */

// console.log(addone(5))
function addone(num){
    return num +1
}


// console.log(addTwo(5))//X function expression not allow hosting
const addTwo=function(num){
    return num+2
}

console.log(addTwo(5))