const doWorkPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve([4,1,7])
        reject("Things went wrong ")
        resolve([1,2,3])
    },2000)
})

doWorkPromise.then((result)=>{
    console.log("Success",result)

}).catch((error)=>{
    console.log("Error",error)
})