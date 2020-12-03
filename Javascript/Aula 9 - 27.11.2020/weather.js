const axios = require('axios')

const apikey = '5d0b33a3adaa365fb1561a27d2baade8'

async function getData(city = 'Madrid'){
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric&lang=pt_br`

const response = await axios.get(url)

const {main, weather: [info] } = response.data

console.log(info)

const text = `
Cidade: ${city}
Descrição: ${info.description}
Temperatura: ${main.temp} C
Min Temp: ${main.temp_min} C
Max Temp: ${main.temp_max} C
`
 console.log(text)
}

getData()

//console.log('TExto depois da chamada da funcao')