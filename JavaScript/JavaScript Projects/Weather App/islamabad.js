const url_islamabad = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Islamabad";
const options_islamabad = {
method: "GET",
headers: {
"content-type": "application/octet-stream",
"X-RapidAPI-Key": "763c810bdfmshb9f4669b80c3925p18d818jsn3db5be365864",
"X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com"
}
};

fetch(url_islamabad, options_islamabad)
.then(response => response.json())
.then(response => {
    cloud_pct_islamabad.innerHTML = response.cloud_pct
    temp_islamabad.innerHTML = response.temp
    feels_like_islamabad.innerHTML = response.feels_like
    humidity_islamabad.innerHTML = response.humidity
    min_temp_islamabad.innerHTML = response.min_temp
    max_temp_islamabad.innerHTML = response.max_temp
    wind_speed_islamabad.innerHTML = response.wind_speed
    wind_degrees_islamabad.innerHTML = response.wind_degrees

 console.log(response)})
.catch(err => console.error(err));