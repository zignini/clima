const apiKey = 'ead133e02ea32340e8ab826c63f73fa2'
const baseUrl = 'https://api.openweathermap.org/'

const getCityUrl = cityName => `${baseUrl}geo/1.0/direct?q=${encodeURIComponent(cityName)}&limit=1&appid=${apiKey}`

const getCityWeatherUrl = (latitude, longitude) => `${baseUrl}data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`

const getCity = async cityName => {
    const [city] = await getData(getCityUrl(cityName))
    return city
}

const getCityWeather = async (latitude, longitude) => {
    const cityWeather = await getData(getCityWeatherUrl(latitude, longitude))
    return cityWeather
}

const getData = async url => {

    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error ("Erro ao buscar as informações")
        }

        return response.json() 

    } catch ( { name, message } ) {
        alert(`${name}: ${message}`)
    }
    
}