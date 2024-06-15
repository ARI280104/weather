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

