const myObject={
    name:"dinesh",
    age:25,
    }

    for (const key in myObject) {
        if(key == "name"){
         myObject[key] ="nikhil";
        }
        // console.log(`${key} is ${myObject[key]}`)
        
    }

    const myArray=["a", "b", "c", "d", "e"]
    for (const key in myArray) {
        console.log(key)
        console.log(myArray[key])
    }