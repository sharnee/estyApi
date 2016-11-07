//the this is alway sensative to its contex, so we have to be mindful about what the contex is we discuss this in

// cb is a function passed into a function to be run at a later time. ***review

var NYT_API_KEY = "a30a58a6e722476eb77532b42ca43c9b", // Your api code here to be used in URL
	containerNode = document.querySelector(".news-container") // Select container div

// //helper functions  - SAMPLE CODE ONLY, NOT USED IN PROJECT
// var makeParamString = function(inputObj){
// 	var paramString = '?'
// 	for(var key in inputObj){
// 		paramString += key + '='
// 		paramString += inputObj[key] + '&'  
// 	}
// 	paramString = paramString.slice(0,-1)
// 	return paramString
// }

// var makeUrl = function(object){
// 	return baseUrl + makeParamString(object)
// }
// END SAMPLE CODE

//MODELS
// create a Backbone Collection Constructor (First letter Capitilized - ex. ArticleCollection).
var ArticleCollection = Backbone.Collection.extend({  // Use this exact syntax. Accesses "Collection" Constructor specific to Backbone and uses extend method from Collection constructor
	url: "https://api.nytimes.com/svc/search/v2/articlesearch.json", // URL is a property on the Collection Constructor (which is an object) so use : not =
	parse: function(rawResponse){ // the parse method is specific to Backbone and creates a direct link to the nested property on our fetched object where our main data can be found
		var parsedResponse = rawResponse.response.docs // for example our desired array of data can be found on the docs property of the response property of the rawResponse object
		return parsedResponse; // returns the specified data location
	}
})

//VIEWS

// the view is a constructor in backbone. 
var HomeView = Backbone.View.extend({
	el: document.querySelector(".news-container"),
	_render: function(){
		// assume that this view is connected to the model to create this part of the function
		var articles = this.collection.models
		console.log(articles)
		var tempString = ''
		for(var i= 0; i<articles.length; i++){
			var articleModel = articles[i]
			var headline = articleModel.get('headline').name ? articleModel.get('headline').name: articleModel.get('headline').main
			tempString += '<h3>' + headline + '</h3>'
		}

		this.el.innerHTML = tempString
		
	},
	initialize: function(){
		console.log('making a new view')
		// .on is the same as add eventlistener
		var boundRender = this._render.bind(this) //creates a new function in which 'this' is bound to it's current contex
		this.collection.on('sync', boundRender)
		// this.collection.on("sync", this._render.bind(this))
	}
})
//CONTROLLER
// create a Backbone Router Constructor (First letter Capitilized - ex. Controller).
var Controller = Backbone.Router.extend({ // Use this exact syntax. Accesses "Router" Constructor specific to Backbone and uses extend method from Router constructor
 	routes: { // Create "routes object" as a property of the extended Controller object. "Routes" matches the hash pattern to a specified method
		"home": "handleHome", // when the url contains #home it will invoke the handleHome method
		"search/:term": "handleSearch", //when the url contains #search/"any_term_here" it will invoke the handleSearch method. ":term" is a generic placeholder for any input on the url
		"*default": "handleDefault" //when the url contains any hash pattern not found (indicated by *) invoke the handleDefault method
	},
	handleHome: function(){
		console.log("Welcome home") // simple test to ensure handleHome is invoked (not required)
		//create a new model(collection)
		var articleCollection = new ArticleCollection() // this creates an instance of the ArticleCollection constructor

		//create a new view to display collections data
		var view = new HomeView({
			collection: articleCollection
		})
		
		//fetch the data and let the view automatically render it
		articleCollection.fetch({
			data: {
				//key=val&key=val
				'api-key': NYT_API_KEY
			}
		})
	},
	handleSearch: function(term){ // this method was not completed in class
		console.log("Searching for " + term) // simple test to ensure handleSearch is invoked with a given term (not required)
	},
	handleDefault: function(){ // this method handles an a hash not specified in the "routes" property on line 50
		location.hash = "home" // changes hash to home which invokes the handleHome (because the home hash invokes handleHome in routes (see line 50))
	},
	initialize: function(){ // initialize
		Backbone.history.start()
	}
})

var controller = new Controller() // creates a new instance so our Controller Constructor works.