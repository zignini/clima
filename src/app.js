const form = document.querySelector('form')
const cityDataContainer = document.querySelector('.city-data')
const cityNameContainer = document.querySelector('[data-js="city-name"]')
const cityWeatherIcon = document.querySelector('[data-js="city-weather-icon"]')
const cityWeather = document.querySelector('[data-js="city-weather"]')
const cityTemperature = document.querySelector('[data-js="city-temperature"]')
const cityDayOrNight = document.querySelector('[data-js="city-day-or-night"]')

const addTextContent = (addTo, content) => addTo.textContent = content

const getAndAddContent = async cityName => {
    const {Key, LocalizedName} = await getCity(cityName)

    const { IsDayTime, Temperature, WeatherIcon, WeatherText } = await getCityWeather(Key)

    addTextContent(cityNameContainer, LocalizedName)

    cityWeatherIcon.src = `./images/${WeatherIcon}.png`

    addTextContent(cityWeather, WeatherText)

    addTextContent(cityTemperature, `${Temperature.Metric.Value} °C`)

    cityDayOrNight.textContent = IsDayTime 
        ? `Está de dia nessa cidade.` 
        : `Está de noite na cidade.`
}

form.addEventListener('submit', async event => {
    event.preventDefault()

    const input = event.target.city.value

    getAndAddContent(input)

    cityDataContainer.classList.remove('d-none')

    form.reset()
})