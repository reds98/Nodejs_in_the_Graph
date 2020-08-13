const http=require("http")
const url=`http://api.weatherstack.com/current?access_key=83968cabf2717a43db10b16b50e11c71&query=40,-75&units=f`;
const request =http.request(url,(response)=>{
    let data=""
    response.on("data",(chunk)=>{
        data=data+chunk.toString()
        // console.log(chunk)


    })
    response.on("end",()=>{
        const body=JSON.parse(data)
        console.log(body)

    })
})
request.on("error",(error)=>{
    console.log("Ah error",error)
})
request.end()   