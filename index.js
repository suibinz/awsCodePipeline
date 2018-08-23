var time = require('time');
var weather = require('weather-js');

exports.handler = (event, context, callback) => {
    var currentTime = new time.Date();
	var currentWeather = [];
	var weatherStr;
    currentTime.setTimezone("America/Los_Angeles");
	weather.find({search: 'Redwood City, CA', degreeType: 'F'}, function(err, result){
		if (err) console.log(err);
    	
		callback(null, {
        	statusCode: 200,
        	body: 'The time in Redwood City is: ' + currentTime.toString() + "\n" + 'The weather in Redwood City is: ' + JSON.stringify(result, null, 2) });
	});
	console.log("run compleded")
};
