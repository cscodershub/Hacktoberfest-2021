const http= require("http");
const fs= require("fs");
var requests= require("requests");

const homeFile= fs.readFileSync("weather.html","utf-8");


const replaceVal= (tempVal,orgVal)=>{
    let temperature= tempVal.replace("{%tempVal%}",orgVal.current.temperature);
     
     temperature= temperature.replace("{%statusicon%}",orgVal.current.weather_icons[0]);
     temperature= temperature.replace("{%location%}",orgVal.location.name);
     temperature= temperature.replace("{%country%}",orgVal.location.country);
     temperature=temperature.replace("{%tempstatus%}",orgVal.current.weather_descriptions[0]);
     temperature=temperature.replace("{%feelslike%}",orgVal.current.feelslike);
     temperature= temperature.replace("{%wind%}",orgVal.current.wind_speed);
     temperature= temperature.replace("{%humidity%}",orgVal.current.humidity);
     temperature= temperature.replace("{%pressure%}",orgVal.current.pressure); 
    console.log(temperature);
    return temperature;

}

const place= process.argv[2];
const url=`http://api.weatherstack.com/current?access_key=111c1c95a960e965f16d4e03a751a104&query=${place}`;
console.log(place);

const server= http.createServer((req,res)=>{
    if(req.url=="/"){
        requests( url,)
.on("data", (chunk) =>{
    const objData= JSON.parse(chunk);
    const arrData= [objData];
    
    const realTimeData= arrData.map((val) => replaceVal(homeFile,val)).join("");
    res.write(realTimeData);
 
})
.on("end",  (err) =>{
  if (err) return console.log('connection closed due to errors', err);
    res.end();
  console.log('end');
});   
    }
});
server.listen(8000,"127.0.0.1");
