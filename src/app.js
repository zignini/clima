const form = document.querySelector('form')
const cityDataContainer = document.querySelector('.city-data')
const cityNameContainer = document.querySelector('[data-js="city-name"]')
const cityWeatherIcon = document.querySelector('[data-js="city-weather-icon"]')
const cityWeather = document.querySelector('[data-js="city-weather"]')
const cityTemperature = document.querySelector('[data-js="city-temperature"]')
const cityDayOrNight = document.querySelector('[data-js="city-day-or-night"]')

const addTextContent = (addTo, content) => addTo.textContent = content



const getAndAddContent = async cityName => {

    const { local_names: {pt : localizedName}, lat, lon } = await getCity(cityName) // alias to make variable self-explanatory

    const { main: {temp}, weather: [ {main : weatherName} ] } = await getCityWeather(lat, lon) // aliases to make variables self-explanatory

    addTextContent(cityNameContainer, localizedName)

    addTextContent(cityWeather, weatherName)

    addTextContent(cityTemperature, `${Math.floor(temp)} °C`)

    // TODO: implement logic to show if it's day or night in the given city because new API (Open Weather) includes only information about current time and sunset/sunrise.
}

form.addEventListener('submit', async event => {
    event.preventDefault()
    
    const inputValue = event.target.city.value

    getAndAddContent(inputValue)

    form.reset()

    cityDataContainer.classList.remove('d-none')
})

// 
