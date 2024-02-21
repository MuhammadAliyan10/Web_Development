const url_lahore = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lahore";
const options_lahore = {
method: "GET",
headers: {
"content-type": "application/octet-stream",
"X-RapidAPI-Key": "763c810bdfmshb9f4669b80c3925p18d818jsn3db5be365864",
"X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com"
}
};

fetch(url_lahore, options_lahore)
.then(response => response.json())
.then(response => {
    cloud_pct_lahore.innerHTML = response.cloud_pct
    temp_lahore.innerHTML = response.temp
    feels_like_lahore.innerHTML = response.feels_like
    humidity_lahore.innerHTML = response.humidity
    min_temp_lahore.innerHTML = response.min_temp
    max_temp_lahore.innerHTML = response.max_temp
    wind_speed_lahore.innerHTML = response.wind_speed
    wind_degrees_lahore.innerHTML = response.wind_degrees

 console.log(response)})
.catch(err => console.error(err));