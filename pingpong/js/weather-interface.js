var Weather = require('./../js/weather.js').weatherModule;

var displayHumidity = function(city, humidityData) {
  $('.showWeather').text("The humidity in " + city + " is " + humidityData + "%");
}

var displayTempK = function(city, tempK) {
  $('.showWeather').text("The temperature in " + city + " in Kelvin is " + tempK + "%");
}

$(document).ready(function() {
  var currentWeatherObject = new Weather();
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    currentWeatherObject.getHumidity(city, displayHumidity);
    currentWeatherObject.getTemp(city, displayTempK);
  });
});
