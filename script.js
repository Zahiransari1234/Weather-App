<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather App</title>
    <link rel="stylesheet" href="index.css" />
</head>
<body>
    <div class="container">
        <div class="weather">
            <div class="weather1">17°C
                <span></span>
            </div>
            <div class="weather2">
                <p>Location</p>
                <span>11:00 pm - Monday 2024-02-07</span>
            </div>
            <div class="weather3">
                <p><img src="" alt="condition"></p>
                <span>condition</span>
            </div>
            <div class="weather4">89
                <!-- <span>humidity</span> -->
            </div>
            <div class="weather5">75</div>
            <!-- <button onclick="generateRandomNumber()">pH value</button> -->
            <button id="randomButton">pH value</button>
        </div>
    </div>
</body>

<nav>
    <form>
        <input type="text"  placeholder="SEARCH HERE" class="searchField">
        <button type="submit">search</button>
    </form>
</nav>
<script src="./script.js"></script>
</html>
