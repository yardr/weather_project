$(function() {
    $.getJSON('http://api.openweathermap.org/data/2.5/forecast/daily?q=Melbourne' + 
              '&units=metric&cnt=3&appid=2de143494c0b295cca9337e1e96b00e0', 
        function(data) {
            $('#tempToday').html(data.list[0].temp.day);
            $('#tempTomorrow').html(data.list[1].temp.day);
            $('#tempAfterTomorrow').html(data.list[2].temp.day);
            $('#pressureToday').html(data.list[0].pressure);
            $('#pressureTomorrow').html(data.list[1].pressure);
            $('#pressureAfterTomorrow').html(data.list[2].pressure);
            $('#iconToday').html('<img src="/icons/'+ data.list[0].weather[0].icon + '.png" alt="Weather icon">');
            $('#iconTomorrow').html('<img src="/icons/'+ data.list[1].weather[0].icon + '.png" alt="Weather icon">');
            $('#iconAfterTomorrow').html('<img src="/icons/'+ data.list[2].weather[0].icon + '.png" alt="Weather icon">');
        }
    );
});