var apiKey = "4309f99993444275baed8fc2fee56a75";

$(document).ready(function() {
  $('#weather-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
      // console.log(response);
      // console.log(JSON.stringify(response));
      $('.showWeather').text("The humidity in " + response.name + " is " + response.main.humidity + "%");
    });
  });
});
