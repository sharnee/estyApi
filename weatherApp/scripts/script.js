// secure the url
var url = 'https://api.darksky.net/forecast/4174a6d26b08fa5562d0b33a95bbd0cc/29.735107312454563,-95.3906190845218'
var baseUrl = 'https://api.darksky.net/forecast/4174a6d26b08fa5562d0b33a95bbd0cc/'
//promise is just the request for the data. 
var promise = $.getJSON(baseUrl)
//promise.then will return the data and it then sends the data into the responseHandler
promise.then(responseHandler)


//this is where the data goes to get handled.
var responseHandler = function(inputObj){
	var handledResponse = inputObj.currently.temperature
	console.log(handledResponse)

}




promise.then(responseHandler)


//MODELS

var WeatherModel = Backbone.Model.extend({
	url: function(){
		return 'https://api.darksky.net/forecast/4174a6d26b08fa5562d0b33a95bbd0cc/'
			this._lat + this._long
	},

	_lat: '',
	_long: ''
})






navigator.geolocation.getCurrentPosition(function(position) {
  console.log(position.coords.latitude, position.coords.longitude);
});


// var Controller = Backbone.Router.extend {

// }


// // I can pull the api to get the current location and I can get the location. I'm not sure how to put the two together
  




// navigator.geolocation.getCurrentPosition(successFunction)
