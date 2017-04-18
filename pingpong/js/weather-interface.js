var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#weather-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey)
     .then(function(response) {
      $('.showWeather').text("The humidity in " + response.name + " is " + response.main.humidity + "%");
      console.log(response);
    })
     .fail(function(error) {
       $('.showWeather').text(error.responseJSON.message);
       console.log(error);
     });
    console.log("Notice: The GET request has been made.");
  });
});
