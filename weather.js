var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
apik = "9f1252a468511179d5660e2321afe452"
function convertion(val)
{
    return(val - 273).toFixed(3)
}
btn.addEventListener('click', function()
{
    fetch("https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}")
    .then(res => res.json())

    .then(data =>

        {
            var nameval = data['name']
            var descrip = data['weather']['0']['desription']
            var tempertature = data['main']['speed']
            var wndspeed = data['wind']['speed']

            city.innerHTML = 'Weather of <span>${nameval}<span>'
            temp.innerHTML = 'Temperature: <span>${convertion(temperature)} c</span>'
            description.innerHTML = 'Sky Conditions: <span>${descrip}<span>'
            wind.innerHTML = 'Wind Speed: <span>${windspeed} km/h<span>'

        }
    )
    .catch(err=> alert('You entered wrong city name'))
})