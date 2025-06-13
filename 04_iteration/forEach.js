const language=["js","c++","java","python"]

// language.forEach((val)=>{
//     console.log(val)
// })

// function reference(val){
//     console.log(val)
// }
// language.forEach(reference)

language.forEach((val,index,arr)=>{
    // console.log(val,index,arr)
})

const data =[
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

data.forEach((item,index)=>{
    // console.log(item.languageName)
    // console.log(item.languageFileName)
    // console.log(`${item.languageName} -> ${item.languageFileName}`)
    if(index===0){
        console.log(item.languageFileName)
    }
})
