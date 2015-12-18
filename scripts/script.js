$(function() {
     // Adding handler for inputCityName button
    $('#btnGetWeather').click(function () {
        getWeatherByCity('eng', dataReceived, $('#inputCityName').val());
        // Adding handler for 'Enter' key on keyboard
    $('#inputCityName').keypress(function(e) {
        var ENTER_KEY_CODE = 13;
        if ( e.which === ENTER_KEY_CODE ) 
        {
            $('#btnGetWeather').trigger('click');
            return false;
        }
    });
        function dataReceived(data) {
            var offset = (new Date()).getTimezoneOffset()*60*1000;
            var city = data.city.name;
            var country = data.city.country;
            $('#location').html(city + ', <b>' + country + '</b>'); // Adding location
            $('#day1').html(moment(new Date(data.list[0].dt*1000 - offset)).calendar());
            $('#day2').html(moment(new Date(data.list[1].dt*1000 - offset)).calendar());
            $('#day3').html(moment(new Date(data.list[2].dt*1000 - offset)).calendar());
            $('#day4').html(moment(new Date(data.list[3].dt*1000 - offset)).calendar());
            $('#day5').html(moment(new Date(data.list[4].dt*1000 - offset)).calendar());
            $('#tempToday').html(Math.round(data.list[0].temp.day)+' &deg;C');
            $('#tempTomorrow').html(Math.round(data.list[1].temp.day)+' &deg;C');
            $('#tempAfterTomorrow').html(Math.round(data.list[2].temp.day)+' &deg;C');
            $('#tempAfter').html(Math.round(data.list[3].temp.day)+' &deg;C');
            $('#tempAfterAfter').html(Math.round(data.list[4].temp.day)+' &deg;C');
            $('#temptoNight').html(Math.round(data.list[0].temp.night)+' &deg;C');
            $('#temptomNight').html(Math.round(data.list[1].temp.night)+' &deg;C');
            $('#tempaftertomNight').html(Math.round(data.list[2].temp.night)+' &deg;C');
            $('#tempafterafterNight').html(Math.round(data.list[3].temp.night)+' &deg;C');
            $('#temp2afterNight').html(Math.round(data.list[4].temp.night)+' &deg;C');
            $('#pressureToday').html(data.list[0].pressure);
            $('#pressureTomorrow').html(data.list[1].pressure);
            $('#pressureAfterTomorrow').html(data.list[2].pressure);
            $('#pressureAfter').html(data.list[3].pressure);
            $('#pressureAfterAfter').html(data.list[4].pressure);
            $('#icon1').html('<img src="images/'+ data.list[0].weather[0].icon + '.png" alt="Weather icon">');
            $('#icon2').html('<img src="images/'+ data.list[1].weather[0].icon + '.png" alt="Weather icon">');
            $('#icon3').html('<img src="images/'+ data.list[2].weather[0].icon + '.png" alt="Weather icon">');
            $('#icon4').html('<img src="images/'+ data.list[3].weather[0].icon + '.png" alt="Weather icon">');
            $('#icon5').html('<img src="images/'+ data.list[4].weather[0].icon + '.png" alt="Weather icon">');
        }
});