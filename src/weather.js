const apiKey = 'Ir8b1ysviDKkFFRpQn4AaiKGxGunJBB4'

const getCityUrl = cityName => `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${cityName}&language=pt-br&details=true`

const getCityWeatherUrl = cityKey => `https://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${apiKey}&language=pt-br&details=true`

const getCity = async cityName => {
    const response = await fetch(getCityUrl(cityName))
    const [object] = await response.json()
    return object
}

const getCityWeather = async Key => {
    // const { Key } = await getCity(cityName)
    const url = getCityWeatherUrl(Key)
    const response = await fetch(url)
    const [object] = await response.json()
    return object
}
