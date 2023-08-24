let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let api_key = "9201434b322f1f762ae667cc341d4a85"
let diKelvin = 273.15

document.getElementById("botonBusqueda").addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadIngresada').value
    if (ciudad) {
        fetchDatosClima(ciudad)
    }
})

function fetchDatosClima(ciudad) {

    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
        .then(data => data.json())
        .then(data => mostrarDatosClima(data))
}
function mostrarDatosClima(data) {
    
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML = ''

    const ciudadNombre = data.name
    const temperaturaMax = data.main.temp_max
    const temperaturaMin = data.main.temp_min
    const paisNombre = data.sys.country
    const temperatura = data.main.temp
    const humedad = data.main.humidity
    const descripcion = data.weather[0].description
    const icono= data.weather[0].icon

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`

    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `La temperatura actual es de: ${parseInt(temperatura - diKelvin)}°C`

    const temperaturaMaxima = document.createElement('p')
    temperaturaMaxima.textContent = `Maxima de: ${parseInt(temperaturaMax-diKelvin)}°C`

    const temperaturaMinima = document.createElement('p')
    temperaturaMinima.textContent = `Minima de : ${parseInt(temperaturaMin - diKelvin)}°C `

    const humedadInfo = document.createElement('p')
    humedadInfo.textContent = `Humedad del ${humedad}%`

    const iconoImagen=document.createElement('img')
    iconoImagen.src=`https://openweathermap.org/img/wn/${icono}@2x.png`

    const descripcionInfo = document.createElement('p')
    descripcionInfo.textContent = ` Descripcion Metereologica es: ${descripcion} `

    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(temperaturaMaxima)
    divDatosClima.appendChild(temperaturaMinima)
    divDatosClima.appendChild(humedadInfo)
    divDatosClima.appendChild(iconoImagen)
    divDatosClima.appendChild(descripcionInfo)


}


