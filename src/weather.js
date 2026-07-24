const apiKey = 'ead133e02ea32340e8ab826c63f73fa2'
const baseUrl = 'https://api.openweathermap.org/'

const getCityUrl = cityName => `${baseUrl}geo/1.0/direct?q=${encodeURIComponent(cityName)}&limit=1&appid=${apiKey}`

const getCityWeatherUrl = (latitude, longitude) => `${baseUrl}data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`

const getCity = async cityName => {
    const response = await fetch(getCityUrl(cityName))
    const [city] = await response.json()
    return city
}

const getCityWeather = async (latitude, longitude) => {
    const url = getCityWeatherUrl(latitude, longitude)
    const response = await fetch(url)
    const weatherInformation = await response.json()
    return weatherInformation
}

