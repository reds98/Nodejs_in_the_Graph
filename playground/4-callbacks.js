// setTimeout(()=>{
//     console.log("Two seconds are up")
// },2000)
// const names=["Andrew","Jen","Jess"]
// const shorNames=names.filter((name)=>{return name.length<=4})
// console.log(shorNames)

// const geocode =(address,callback)=>{
//     setTimeout(()=>{
//         const data={
//             latitude:0,
//             longitude:0
//         }
//         callback (data)

//     },2000)



// }
// geocode("Costa rica",(data)=>{
//     console.log(data)
// })

// const add=(number1,number2,callback)=>{
//     setTimeout(()=>{
        
//         resultado=number1+number2
        
//         callback (resultado)

//     },2000)

// }
// add(1,76,(resultado)=>{
//     console.log(resultado)

// })
const doWorkCallback=(callback)=>{
    setTimeout(()=>{
        // callback("THis is my error", undefined)
        callback(undefined,[1,4,7])
    },2000)
}
doWorkCallback((error,result)=>{
    if(error){
        return console.log(error)
    }
    console.log(result)
})

