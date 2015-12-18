function getWeatherByCity(lang, fnOK, cityName) {
  $.getJSON(
        'http://api.openweathermap.org/data/2.5/forecast/daily?q=' 
        + cityName + '&APPID=93423cd537d8b5132f4cff5001224210&cnt=16&units=metric' + '&lang=' + 'eng' + '&callback=?', 
        function (data) {
            fnOK.call(this, data);
        }
    );
}