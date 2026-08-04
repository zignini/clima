const form = document.querySelector('form')
const cityDataContainer = document.querySelector('.city-data')
const cityNameContainer = document.querySelector('[data-js="city-name"]')
const cityWeatherIcon = document.querySelector('[data-js="city-weather-icon"]')
const cityWeather = document.querySelector('[data-js="city-weather"]')
const cityTemperature = document.querySelector('[data-js="city-temperature"]')
const cityDayOrNight = document.querySelector('[data-js="city-day-or-night"]')

const weatherNameMapEnPt = new Map(
    [
        ["Clear", "Ensolarado"],
        ["Clouds", "Nublado"],
        ["Drizzle", "Garoa"],
        ["Rain", "Chuva"],
        ["Thunderstorm", "Tempestade"],
        ["Fog", "Neblina"],
        ["Mist", "Névoa"],
        ["Haze", "Névoa fina"],
        ["Squall", "Rajadas de vento"],
        ["Snow", "Nevasca"],
        ["Smoke", "Fumaça"],
        ["Dust", "Poeira"],
        ["Sand", "Tempestade de areia"],
        ["Tornado", "Tornado"]
    ]
)

const addTextContent = (addTo, content) => addTo.textContent = content

const getAndAddContent = async cityName => {

    const { name, lat, lon } = await getCity(cityName) 

    const { main: {temp}, weather: [ {main : weatherName} ] } = await getCityWeather(lat, lon) // aliases to make variables self-explanatory

    addTextContent(cityNameContainer, name)

    addTextContent(cityWeather, weatherNameMapEnPt.get(weatherName))

    addTextContent(cityTemperature, `${Math.floor(temp)} °C`)

    cityDataContainer.classList.remove('d-none')

    // TODO: include weather icons (including if it's day or night time)
}

form.addEventListener('submit', async event => {
    event.preventDefault()
    
    const inputValue = event.target.city.value

    await getAndAddContent(inputValue)

    form.reset()

})

// 
