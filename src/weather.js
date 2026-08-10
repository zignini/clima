const apiKey = 'ead133e02ea32340e8ab826c63f73fa2'
const baseUrl = 'https://api.openweathermap.org/'

const getCityUrl = cityName => `${baseUrl}geo/1.0/direct?q=${encodeURIComponent(cityName)}&appid=${apiKey}`

const getCityWeatherUrl = (latitude, longitude) => `${baseUrl}data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`

const getCity = async cityName => {
    if (cityName === null) {
        throw new Error("Informe o nome da cidade")
    }
    const [city] = await getData(getCityUrl(cityName))
    if (city === undefined) {
        throw new Error("Cidade não encontrada, tente outro nome")
    }
    return city
}

const getCityWeather = async (latitude, longitude) => {
    const cityWeather = await getData(getCityWeatherUrl(latitude, longitude))
    return cityWeather
}

const getData = async url => {
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error("Erro ao buscar as informações")
    }
    return response.json()
}