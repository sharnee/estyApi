//first you want to get the data and crate a varible
//then you want to establish your promise that makes the request for the data
// before establishing your function tell the promise that when your promise comes back with the data then run your function 
// within your function console.log the results
// then you want to create a function using getJSON that tells your promse what do do with the data 

//circle

//why and how did we create this base url? why can't we just use 'all'
var baseUrl = 'https:restcountries.eu/rest/v1/name',
	
	//create an inputnode to be able to control information inside the input box by writing code into the node
	inputNode = document.querySelector("input")
	domeNode = document.querySelector("")

var gottenData = function (countriesArray){
	countryObj = countriesArray[0],
	domeNode.innerHTML = '<p id="demonym">' + countryObj.demonym +
}
//why do we create countries data and run the promse inside of this function 
var get countriesData = function (countryInput){
		var fullUrl = baseUrl + countryInput,
			promise = $.getJSON(fullUrl),

			promise.then(gottenData)

}


}
var inputHandler = function (keyEvent){
	if (keyEvent.keyCode === 13){
		//extract the country name entered by the user
		//the .target is regerencing any node that we are referecing 
		var inputNode = keyEvent.target,
			countryName = inputNode.value
			//countryName represents whatever the user typed in before pressing enter
			
	}
}

inputNode.addEventListener('keydown', inputHandler)

