var app = angular.module("iCaddy", ['ngRoute', 'ui.materialize'])

// constant for firebase here
.constant("firebaseURL", "https://icaddy.firebaseio.com/")
//constant for weather api here
.constant("weatherURL", "http://api.wunderground.com/api/8821421146f504ed/hourly/q/");

let isAuth = (AuthFactory) => new Promise ((resolve, reject) => {
  if (AuthFactory.isAuthenticated ()){
    resolve();
  } else {
    reject();
  }
});


app.config(function($routeProvider){
  $routeProvider.
  when('/',{
  templateUrl: 'partials/main.html',
  resolve: {isAuth}
  }).
  when('/weather/zip',{
  templateUrl: 'partials/userZip.html',
  controller: 'WeatherCtrl',
  resolve: {isAuth}
  }).
  when('/weather',{
  templateUrl: 'partials/weather.html',
  controller: 'WeatherCtrl',
  resolve: {isAuth}
  }).
  when('/scorecards/new',{
  templateUrl: 'partials/newRound.html',
  controller: 'NewCardCtrl',
  resolve: {isAuth}
  }).
  when('/scorecards/all',{
  templateUrl: 'partials/allCards.html',
  controller: 'AllCardsCtrl',
  resolve: {isAuth}
  }).
  when('/scorecards/:scorecardId',{
  templateUrl: 'partials/scorecardDetails.html',
  controller: 'CardViewCtrl',
  resolve: {isAuth}
  }).
  when('/scorecards/:scorecardId/edit',{
  templateUrl: 'partials/editCard.html',
  controller: 'EditCardCtrl',
  resolve: {isAuth}
  }).
  when('/stats',{
  templateUrl: 'partials/stats.html',
  controller: 'StatsCtrl',
  resolve: {isAuth}
  }).
  when('/login',{
  templateUrl: 'partials/login.html',
  controller: 'LoginCtrl'
  }).
  when('/logout',{
  templateUrl: 'partials/login.html',
  controller: 'LoginCtrl'
  }).
  otherwise('/login');
  });


app.run(($location) => {
    let icaddyRef = new Firebase("https://icaddy.firebaseio.com/");

    icaddyRef.onAuth(authData => {
      if(!authData){
        $location.path("/login");
      }
    });
  });


