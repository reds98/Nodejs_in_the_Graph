const request = require("request");
const geocode = require("./utils/geocode")
const forecast = require("./utils/forecast");
const { Console } = require("console");



let myArgs = process.argv.slice(2);
console.log(myArgs);
if (myArgs.length===0) {
    console.log("PLease insert the name for looking the weather")
} else {
    geocode(myArgs[0],(error,{latitude,longitude,location}={})=>{
        
        if(error){
            return console.log(error)
        }
        forecast(latitude,longitude,(error,forecastdata)=>{
            if(error){
                return console.log(error)
    
            }
            console.log(location)
            console.log(forecastdata)
        
        })
    
    })
    
}