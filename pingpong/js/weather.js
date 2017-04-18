var apiKey = require('./../.env').apiKey;

Weather = function(){
}

Weather.prototype.getHumidity = function(city, displayHumidity) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey)
   .then(function(response) {
     displayHumidity(response.name, response.main.humidity);
     console.log(response);
  })
   .fail(function(error) {
     $('.showWeather').text(error.responseJSON.message);
   });
}

Weather.prototype.getTemp = function(city, displayTempK) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey)
   .then(function(response) {
     displayTempK(response.name, response.main.temp);
  })
   .fail(function(error) {
     $('.showWeather').text(error.responseJSON.message);
   });
}

exports.weatherModule = Weather;
