

data("dubai")
var myDate= new Date()
var nextDay;
var nnextDay;
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var currentDay=days[myDate.getDay()];
if (myDate.getDay()==6)
{
     nextDay=days[0]
}
else
{
    nextDay=days[myDate.getDay()+1]
}

if(myDate.getDay()==6)
{
    nnextDay=days[1]
}
else if (myDate.getDay()==5)
{
    nnextDay=days[0]  
}
else
{
    nnextDay=days[myDate.getDay()+2]
}
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentMonth= monthNames [myDate.getMonth()];
var currentDate=myDate.getDate()
document.querySelector("#submit").addEventListener("click",search)
function search()
{
    let city=document.querySelector("#search").value
    data(city)
}
 async function data(city)
{
    getdata= await fetch(`http://api.weatherapi.com/v1/forecast.json?key=0e18003f49574829836131427232402&q=${city}&days=3&aqi=no&alerts=no`)
    getdata=await getdata.json()
    console.log(getdata)
    displaydata(getdata)
}
function displaydata(getdata)
{
    document.querySelector("#location").innerHTML=getdata.location.name
    document.querySelector("#degree").innerHTML=getdata.current.temp_c
    document.querySelector("#icon").innerHTML=`<img src="https:${getdata.current.condition.icon}" width="90" >`
    document.querySelector("#status").innerHTML=getdata.current.condition.text
    document.querySelector("#dayName").innerHTML=currentDay
    document.querySelector("#date").innerHTML=currentDate+currentMonth 
    document.querySelector("#nextDay").innerHTML=nextDay
    document.querySelector("#iconnextday").innerHTML=`<img src="https:${getdata.forecast.forecastday[1].day.condition.icon}" width="60" >`
    document.querySelector("#nextdaydegree").innerHTML=getdata.forecast.forecastday[1].day.maxtemp_c
    document.querySelector("#nextdaydegreemini").innerHTML=getdata.forecast.forecastday[1].day.mintemp_c
    document.querySelector("#status2").innerHTML=getdata.forecast.forecastday[1].day.condition.text
    document.querySelector("#nextDay2").innerHTML=nnextDay
    document.querySelector("#iconnextday2").innerHTML=`<img src="https:${getdata.forecast.forecastday[2].day.condition.icon}" width="60" >`
    document.querySelector("#nextdaydegree2").innerHTML=getdata.forecast.forecastday[2].day.maxtemp_c
    document.querySelector("#nextdaydegreemini2").innerHTML=getdata.forecast.forecastday[2].day.mintemp_c
    document.querySelector("#status3").innerHTML=getdata.forecast.forecastday[2].day.condition.text
}