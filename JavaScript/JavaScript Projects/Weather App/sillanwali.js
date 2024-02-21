const url_sillanwali = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Sillanwali";
const options_sillanwali = {
method: "GET",
headers: {
"content-type": "application/octet-stream",
"X-RapidAPI-Key": "763c810bdfmshb9f4669b80c3925p18d818jsn3db5be365864",
"X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com"
}
};

fetch(url_sillanwali, options_islamabad)
.then(response => response.json())
.then(response => {
    cloud_pct_sillanwali.innerHTML = response.cloud_pct
    temp_sillanwali.innerHTML = response.temp
    feels_like_sillanwali.innerHTML = response.feels_like
    humidity_sillanwali.innerHTML = response.humidity
    min_temp_sillanwali.innerHTML = response.min_temp
    max_temp_sillanwali.innerHTML = response.max_temp
    wind_speed_sillanwali.innerHTML = response.wind_speed
    wind_degrees_sillanwali.innerHTML = response.wind_degrees

 console.log(response)})
.catch(err => console.error(err));