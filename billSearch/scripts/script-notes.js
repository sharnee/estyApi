//once we get the data lets see if we can get the data onto the screen mvc= model view data)



var houseUrl = "https://congress.api.sunlightfoundation.com/bills?apikey=149a2a8730aa4936bab76017c47d8dab&chamber=house"

var promise = $.getJSON(houseUrl)
var houseColNode = document.querySelector('.houseCol')
var senateColNode = document.qvciruerySelector('.senateCol')
var inputNode = document.querySelector('input')


var displayHouseInfo = function(apiResponse) {
	console.log(apiResponse.results)//leaving to pick through the content
	var billsArray = apiResponse.results
	var htmlString = '<h1> House Bills </h1>'
	for(var i =0; i<billsArray.length; i++) {
		console.log(billsArray[i])
		var billDetails = billsArray[i]
		//creating an if statement allows us not to have null or undefinded if there is no short title.
		if (billDetails.short_title){
			var title = billDetails.short_title
		}
		else {
			var title = billDetails.bill_id
		}
		//this below gives us a ugly block of text so we are going to start to wrap into html tags
		htmlString = htmlString + '<div class="bill"'
		htmlString = htmlString + '<h1>' +  billDetails.short_title +'</h1>' //you could also shorthand this by using htmlString+= billDetails.short_title
        htmlString = htmlString + '<h3>' + billDetails.official_title + '</h3>'
        htmlString = htmlString + '<h5>' + billDetails.sponsor.first_name + ' ' + billDetails.sponsor.Last_name + '</h5>'// this is a great example of chaining linking properties
        //we should build the full html string and then write to inner html only once if we do it "this" way (see below)
        //houseColNode.innerHTML += htmlString than we end up writing to html multi times which is a slow process
        htmlString = htmlString + '</div>'
       


	}
houseColNode.innerHTML = htmlString

}



promise.then(displayHouseInfo)

console.log("hi people")