$(function(){
    $('article').hide();
    // Adding handler for inputCityName button
    $('#btnGetWeather').click(function () {
        getWeatherByCity('en', dataReceived, showError, $('#inputCityName').val());
        $('article').show(); 
    });
    // Adding handler for 'Enter' key on keyboard
    $('#inputCityName').keypress(function(e) {
        var ENTER_KEY_CODE = 13;
        if ( e.which === ENTER_KEY_CODE ) 
        {
            $('#btnGetWeather').trigger('click');
            return false;
        }
    });    
    // This function is called when weather data received
    function dataReceived(data) {
        // Calc time difference from UTC, convert from min to milliseconds
        var offset = (new Date()).getTimezoneOffset()*60*1000; 
        var city = data.city.name;
        var country = data.city.country;
        $("#weatherTable tr:not(:first)").remove(); // Remove all rows except first
        // Next is the loop that goes on all elements in data.list array
        $.each(data.list, function(){
            // "this" holds weather object from this source: http://openweathermap.org/forecast16
            var localTime = new Date(this.dt*1000 - offset); // Convert time from UTC to local
            addWeather(
                this.weather[0].icon,
                moment(localTime).calendar(),	// Use moment.js for date format
                this.weather[0].description,
                Math.round(this.temp.day) + '&deg;C',
                this.humidity + '%',
                this.speed +' m/s'
            );
        });
        $('#location').html(city + ', <b>' + country + '</b>'); // Adding location
    }

    function addWeather(icon, day, condition, temp, humidity,speed){
        var markup = '<tr>'+
                '<td class="days">'+day + '</td>' +
                '<td class="images">'+'<img src="images/'+ icon +'.png" />' + '</td>' +
                '<td class="temperature">'+temp + '</td>'+
                '<td class="conditions">'+condition + '</td>'+
                '<td class="humid">'+ humidity + '</td>' + 
                '<td class="windspeed">'+speed + '</td>'+
                '</tr>';
        weatherTable.insertRow(-1).innerHTML = markup; // Adding table row
    }

    function showError(msg){
        $('#error').html('An error occured: ' + msg);
    }
});