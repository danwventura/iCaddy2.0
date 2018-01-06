"use strict"



app.controller("WeatherCtrl", function($scope, $location, WeatherFactory){

$scope.hourly = [];


$scope.getWeather = function(zipCode){

  WeatherFactory.getWeatherDataFromApi(zipCode).then(function(rawWeatherData){
    for(var i=0; i<6; i++){
      $scope.hourly.push(rawWeatherData[i]);
    } 
    console.log("scope", $scope.hourly);

  })

  
}

});