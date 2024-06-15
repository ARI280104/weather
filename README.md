# weather

<!DOCTYPE html>
<html lang="en">
    <head>
          <meta charset="UTF-8">
        <meta name="viewport" content="width=device width,initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible." content="ie=edge">
        <title>
            weather
        </title>
        <link rel="stylesheet"href="weather/weather.css">
        
    </head>
    <body>
        <div class="container">
            <section class="main">
                <section class="inputs">
                    <input type="text" placeholder="Enter a city name" id="cityinput">
                    <input type="submit" value="Submit" id="add">
                    <button placeholder="submit" id="add"></button>
                </section>
                <section class="display">
                    <div class="wrapper">
                        <h2 id="cityoutput"></h2>
                    <p id="description"></p>
                <p id="temp"></p>
                <p id="wind"></p>
                    </div>
                </section>
            </section>
        </div>
        <script src="weather/weather.js"></script>
    </body>
</html>

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body
{
    
  background-color: skyblue;
}
.container
{
    width: 600px;
    margin: 100px auto;
    padding: 40px;
}
.inputs
{
    padding: 2rem 0 2rem 0;
    text-align: center;
    justify-content: center;
    background: rgb(224, 190, 190);
    height: 150px;
}
.inputs input[type="text"]
{
    height: 4rem;
    width: 20rem;
    background: #21212121;
    font-weight: bold;
    font-size: 1rem;
    padding: 10px;
    border: none;
    background-color: transparent;
    border: 2px solid #473939;
    border-radius: 3px;
}
.inputs input[type="submit"]
{
    height: 3rem;
    width: 20rem;
    background: #6ceaab;
    border: none;
    border-radius: 4px;
}
.display
{
    text-align: center;
    width: 520px;
    color: #16a864;
}
.wrapper
{
    margin: 0 9rem;
    background-color: rgb(172, 189, 221);
    height: 45vh;
}
.wrapper h2{
    padding: 5px 0;
    text-align: center;
    background: #0548b5;
    color: white;
}
.wrapper p
{
    margin: 20px 50px;
    margin-right: 20px;
    text-align: left;
    color: #456eac;
    font-size: 23px;

}
.wrapper h2 span
{
    font-size: 26px;
    color: #9beefb;
}
.wrapper p span
{
    color: #5e0df4;
    font-size: 25px;
}

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



