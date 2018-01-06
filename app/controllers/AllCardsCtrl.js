app.controller("AllCardsCtrl", function($scope, $http, $location, ScorecardFactory){
  
  $scope.title = "Scorebook";
  $scope.allScorecards = [];

  
  ScorecardFactory.getScorecardsFromFirebase().then(function(scorecardCollection){
    $scope.allScorecards = scorecardCollection;
    console.log("allCards", scorecardCollection);
    // console.log("allCards", $scope.allScorecards);
  })
  
})