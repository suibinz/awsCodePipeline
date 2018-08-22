var time = require('time');
var weather = require('weather-js');

exports.handler = (event, context, callback) => {
    var currentTime = new time.Date();
	var currentWeather = [];
    currentTime.setTimezone("America/Los_Angeles");
	weather.find({search: 'San Francisco, CA', degreeType: 'F'}, function(err, result){
			if (err) console.log(err);
			currentWeather = result;
			//console.log(JSON.stringify(result, null, 2));
	});
			//console.log(JSON.stringify(currentWeather, null, 2));
	var weatherStr = JSON.stringify(currentWeather[0], null, 2);
	console.log("Weather String: " + weatherStr);
	console.log(JSON.stringify(currentWeather, null, 2));
    
	callback(null, {
        statusCode: 200,
        body: 'The time in Redwood City is: ' + currentTime.toString() + "\n" + 'The weather in Redwood City is: ' + JSON.stringify(currentWeather, null, 2)
    });
};
