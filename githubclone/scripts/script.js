var gitURL = "https://api.github.com/users/sharnee?access_token=33fcddb36aca1158e40d35cbfe77c76c97d0f2a9"
var repoURL = 'https://api.github.com/users/sharnee/repos?access_token=33fcddb36aca1158e40d35cbfe77c76c97d0f2a9'

try {
	var repoUrl = 'https://api.github.com/users/YOUR_USERNAME/repos?access_token=' + access_token
	var profileUrl = 'https://api.github.com/users/YOUR_USERNAME?access_token=' + access_token
}
catch {
	var repoUrl = 'https://api.github.com/users/YOUR_USERNAME/repos'
	var profileUrl = 'https://api.github.com/users/YOUR_USERNAME'
}

var access_token = 'abc123'

// {
// login: "sharnee",
// id: 10464450,
// avatar_url: "https://avatars.githubusercontent.com/u/10464450?v=3",
// gravatar_id: "",
// url: "https://api.github.com/users/sharnee",
// html_url: "https://github.com/sharnee",
// followers_url: "https://api.github.com/users/sharnee/followers",
// following_url: "https://api.github.com/users/sharnee/following{/other_user}",
// gists_url: "https://api.github.com/users/sharnee/gists{/gist_id}",
// starred_url: "https://api.github.com/users/sharnee/starred{/owner}{/repo}",
// subscriptions_url: "https://api.github.com/users/sharnee/subscriptions",
// organizations_url: "https://api.github.com/users/sharnee/orgs",
// repos_url: "https://api.github.com/users/sharnee/repos",
// events_url: "https://api.github.com/users/sharnee/events{/privacy}",
// received_events_url: "https://api.github.com/users/sharnee/received_events",
// type: "User",
// site_admin: false,
// name: null,
// company: null,
// blog: null,
// location: null,
// email: null,
// hireable: null,
// bio: null,
// public_repos: 6,
// public_gists: 0,
// followers: 3,
// following: 9,
// created_at: "2015-01-09T14:13:28Z",
// updated_at: "2016-09-03T13:44:12Z",
// private_gists: 0,
// total_private_repos: 1,
// owned_private_repos: 0,
// disk_usage: 322,
// collaborators: 0,
// plan: {
// name: "free",
// space: 976562499
// collaborators: 0,
// private_repos: 0
// }

//borrowing the jquery libirary 


var genProfileData = function (){
	var promise = $.getJSON(gitURL)
	var profileNode = document.querySelector('#profile')
	console.log(profileNode)

	var responseProfile = function (responseData){
		var htmlString = ''
		htmlString += '<img src="'+responseData.avatar_url+ '"/>'
		htmlString += '<h1>'+ responseData.login + '</h1>'
		htmlString += '<p>' + responseData.url + '</p>'
		profileNode.innerHTML = htmlString

		console.log(htmlString)
	}
		promise.then(responseProfile)

}

var genRepoData = function (){
	var promise = $.getJSON(repoURL)
	var repoNode = document.querySelector('#repo')
	var responseRepo = function (responseData){
		var htmlString = ''
		htmlString += '<a href= html_url >'+ responseData.name + '</a>'
		htmlString += '<a href = homepage>'+ responseData.homepage
		repoNode.innerHTML = htmlString


	}
	promise.then(genRepoData)
}
//'promise.then' wil run right away; the responseHandler will run once the data request has returned from the server

console.log('we have made the request')
