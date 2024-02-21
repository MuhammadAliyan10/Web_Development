const url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow";
const options = {
    method: "GET",
    headers: {
        "content-type": "application/octet-stream",
        "X-RapidAPI-Key": "390d3da771msh870980f8383f55fp1838b9jsneee6cb7540d9",
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};


const get_weather = async (city) => {
    cityName.innerHTML = city;
    await fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city, options)
        .then(response => response.json())
        .then(response => {

            cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunset.innerHTML = response.sunset

        })
        .catch(err => console.error(err));
}
submit.addEventListener("click", (e) => {
    e.preventDefault();
    get_weather(city.value)
})
get_weather('Sillanwali')

// -------------------------------------------------------------------------------------------------


