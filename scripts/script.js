$(function() {
   $.getJSON(
        'http://api.openweathermap.org/data/2.5/forecast/daily?q=' 
        + 'Lviv' + '&APPID=93423cd537d8b5132f4cff5001224210&cnt=3&units=metric' + '&lang=' + 'eng' + '&callback=?', 
        function(data) {
            $('#tempToday').html(Math.round(data.list[0].temp.day)+' &deg;C');
            $('#tempTomorrow').html(Math.round(data.list[1].temp.day)+' &deg;C');
            $('#tempAfterTomorrow').html(Math.round(data.list[2].temp.day)+' &deg;C');
            $('#pressureToday').html(data.list[0].pressure);
            $('#pressureTomorrow').html(data.list[1].pressure);
            $('#pressureAfterTomorrow').html(data.list[2].pressure);
            $('#iconToday').html('<img src="images/'+ data.list[0].weather[0].icon + '.png" alt="Weather icon">');
            $('#iconTomorrow').html('<img src="images/'+ data.list[1].weather[0].icon + '.png" alt="Weather icon">');
            $('#iconAfterTomorrow').html('<img src="images/'+ data.list[2].weather[0].icon + '.png" alt="Weather icon">');
        }
    );
});