var foodieApp = angular.module('foodieApp',['ngRoute']); //declaring namee of app and ng*route for routing
foodieApp.config(function ($routeProvider) {		 //provides routes for diffferent pages
	$routeProvider
	.when('/',{ // / refers to home
		templateUrl: 'pages/login.html',
		controller: 'loginController'	 //defines controller associated
	})
	.when('/home',{
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	})
  .when('/restaurant/:id', {
		templateUrl: 'pages/restaurant.html',
		controller: 'restaurantController'
	})
  .when('/home/grocery',{
    templateUrl: 'grocery.html'
  })
})
foodieApp.controller('restaurantController',function($scope,$routeParams,$http) { // defines restaurant controller
  $scope.getIngredients = function(url) {	 //gets ingredients form clarifai
  	var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
  	$http({
  		'method': 'POST',
  		'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
  		'headers': {
  			'Authorization': 'Key b403b9983c1d42d48baa6774c18881f7', //api key
  			'Content-Type': 'application/json' //json object
  		},
  		'data': data
  	}).then(function (response) {
	var ingredients = response.data.outputs[0].data.concepts;
	for (var i =0;i < ingredients.length;i++) {
	$scope.ingredients.push(ingredients[i].name);
	}
})
  	}
    $scope.ingredients = [];
	$scope.restaurantId = $routeParams.id;
	var restaurants = 	//displays restaurants as restaurant/id:
	[{name: 'Ghai Bakery',
	address: 'Dr.BR Ambedkar chownk, Ajit Nagar , Model House',
	location: 'Jalandhar',
	category: 'Casual Dining, Bakery',
	vote: '3.2',
	cuisines: 'Bakery',
	cost: '800',
	hours: '9 AM to 11 PM(Mon-Sun)',
	image: 'ghai.jpg',
  phone: ' 98888 83524',
  bestDish: {
  	name: 'Cartoon Character Cakes',
  	image: 'https://s-media-cache-ak0.pinimg.com/originals/77/c7/f0/77c7f088641ab75f3615079c02452721.jpg'
  }
},
{
name: 'Hungry Point',
address: '501, New Model house, Basti Road, Dayal Nagar',
location: 'Jalandhar',
category: 'Pizza Place',
vote: '4.5',
cuisines: 'Italian',
cost: '600',
hours: '11 AM to 11 PM (Mon-Sun)',
image: 'hp.jpg',
phone: '89681 39159',
bestDish: {
	name: 'Corn Pizza',
	image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
}
},
{
name: 'Heat 7',
address: '567, New Jawahar Nagar',
location: 'Jalandhar',
category: 'Dine-in',
vote: '3.8',
cuisines: 'All',
cost: '200',
hours: '11 AM to 11 PM (Mon-Sun)',
image: 'heat7.jpg',
phone: '97815 73700',
bestDish: {
	name: 'Footlong Burger',
	image: 'https://static.giantbomb.com/uploads/original/0/26/10465-polygonalhamburger.jpg'
}
},{
	name: 'Sagar Ratna',
	address: '362, Lajpat Nagar',
	location: 'Jalandhar',
	category: 'Dine-in',
	vote: '4.1',
	cuisines: 'Indian',
	cost: '800',
	hours: '10 AM to 11 PM (Mon-Sun)',
	image: 'sagarratna.png',
	phone: ' 0181 461 0023',
	bestDish: {
	name: 'Thali',
	image: 'http://mycitylinks.in/mycitylive/wp-content/uploads/2016/10/Vegetarian-Thalis-950x694.jpg'
}
},{
	name: 'The Brew Master',
	address: '4th floor, Chunmun Mall, Jawahar Nagar',
	location: 'Jalandhar',
	category: 'restaurant, bar',
	vote: '4.5',
	cuisines: 'Italian',
	cost: '200',
	hours: '11 AM to 11 PM (Mon-Sun)',
	image: 'brewmaster.jfif',
	phone: '1800 3000 7141',
	bestDish: {
	name: 'Choco lava Cake',
	image: 'http://floursandfrostings.com/wp-content/uploads/2017/01/IMG_20170104_003650_972-1-678x381.jpg'
}
},{
	name: 'Eat Well House',
	address: 'GT Road, Namdev Chownk',
	location: 'Jalandhar',
	category: 'Dine-in',
	vote: '3.7',
	cuisines: 'North-Indian',
	cost: '300',
	hours: '12 Noon to 11.30 PM (Mon-Sun)',
	image: 'eatwell.jpg',
	phone: '94179 03111',
	bestDish: {
	name: 'Paneer Lababdaaar',
	image: 'http://betterbutterbucket.s3-website-ap-southeast-1.amazonaws.com/394x394/ishan-lalit20170531114911815.jpg'
}
},{
	name: 'Chick Chick House',
	address: 'Mahavir Marg',
	location: 'Jalandhar',
	category: 'Eat out',
	vote: '3.9',
	cuisines: 'North-Indian',
	cost: '200',
	hours: '12 Noon to 10 PM (Mon-Sun)',
	image: 'chickchick.jfif',
	phone: '0181 225 0557',
	bestDish: {
	name: 'Chicken Tandoori',
	image: 'http://mybodymykitchen.com/wp-content/uploads/2016/05/tandoori-chicken-top-mbmk-900x600.jpg'
}

},{
	name: 'The Chocolate Room',
	address: '10, GT Road, BMC Chownk,Opp Radison Hotel',
	location: 'Jalandhar',
	category: 'Dine-in',
	vote: '4.1',
	cuisines: 'All',
	cost: '500',
	hours: '10.30 AM to 11 PM (Mon-Sun)',
	image: 'chocolateroom.jfif',
	phone: '0181 464 6469',
	bestDish: {
	name: 'Triple Chocolate Mousse',
	image: 'http://cdn.noshon.it/wp-content/uploads/2013-02-08-r-triple-chocolate-mousse.jpg'
}
}]
$scope.restaurant = restaurants[$routeParams.id - 1] //defines restaurant id

})
foodieApp.controller('mainController',function($scope) { //main controller for restaurants on main page
  $scope.restaurants1 = [{
	name: 'Ghai Bakery',
	address: 'Dr.BR Ambedkar chownk, Ajit Nagar , Model House',
	location: 'Jalandhar',
	category: 'Casual Dining, Bakery',
	vote: '3.2',
	cuisines: 'Bakery',
	cost: '800',
	hours: '9 AM to 11 PM(Mon-Sun)',
	image: 'ghai.jpg',
  phone: ' 98888 83524',
	id: '1'
}]
$scope.restaurants2 = [{
name: 'Hungry Point',
address: '501, New Model house, Basti Road, Dayal Nagar',
location: 'Jalandhar',
category: 'Pizza Place',
vote: '4.5',
cuisines: 'Italian',
cost: '600',
hours: '11 AM to 11 PM (Mon-Sun)',
image: 'hp.jpg',
phone: '89681 39159',
id: '2'
}]
$scope.restaurants3 = [{
	name: 'Heat 7',
	address: '567, New Jawahar Nagar',
	location: 'Jalandhar',
	category: 'Dine-in',
	vote: '3.8',
	cuisines: 'All',
	cost: '200',
	hours: '11 AM to 11 PM (Mon-Sun)',
	image: 'heat7.jpg',
	phone: '97815 73700',
	id: '3'
}]
$scope.restaurants4 = [{
name: 'Sagar Ratna',
address: '362, Lajpat Nagar',
location: 'Jalandhar',
category: 'Dine-in',
vote: '4.1',
cuisines: 'Indian',
cost: '800',
hours: '10 AM to 11 PM (Mon-Sun)',
image: 'sagarratna.png',
phone: ' 0181 461 0023',
id:'4'
}]
$scope.restaurants5 = [{
name: 'The Brew Master',
address: '4th floor, Chunmun Mall, Jawahar Nagar',
location: 'Jalandhar',
category: 'restaurant, bar',
vote: '4.5',
cuisines: 'Italian',
cost: '200',
hours: '11 AM to 11 PM (Mon-Sun)',
image: 'brewmaster.jfif',
phone: '1800 3000 7141',
id: '5'
}]
$scope.restaurants6 = [{
name: 'Eat Well House',
address: 'GT Road, Namdev Chownk',
location: 'Jalandhar',
category: 'Dine-in',
vote: '3.7',
cuisines: 'North-Indian',
cost: '300',
hours: '12 Noon to 11.30 PM (Mon-Sun)',
image: 'eatwell.jpg',
phone: '94179 03111',
id: '6'
}]
$scope.restaurants7 = [{
name: 'Chick Chick House',
address: 'Mahavir Marg',
location: 'Jalandhar',
category: 'Eat out',
vote: '3.9',
cuisines: 'North-Indian',
cost: '200',
hours: '12 Noon to 10 PM (Mon-Sun)',
image: 'chickchick.jfif',
phone: '0181 225 0557',
id: '7'
}]
$scope.restaurants8 = [{
name: 'The Chocolate Room',
address: '10, GT Road, BMC Chownk,Opp Radison Hotel',
location: 'Jalandhar',
category: 'Dine-in',
vote: '4.1',
cuisines: 'All',
cost: '500',
hours: '10.30 AM to 11 PM (Mon-Sun)',
image: 'chocolateroom.jfif',
phone: '0181 464 6469',
id:'8'
}]

})
foodieApp.controller('loginController',function($scope,$location) { //login controller for login page
	$scope.goToHome = function() {
		// console.log('Do Something')
		$location.url('home')
	}
})
