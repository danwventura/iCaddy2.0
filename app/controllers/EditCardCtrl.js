app.controller("EditCardCtrl", function($scope, $location, $routeParams, firebaseURL, ScorecardFactory){
  $scope.updatedCard = {};
  var updatedCardId;

  ScorecardFactory.getSingleScorecardFromFirebase($routeParams.scorecardId)
    .then(function successCallback(response){
      $scope.updatedCard = response;
      updatedCardId = $routeParams.scorecardId
    })


  $scope.addUpdatedCard = function (){
    console.log("neededId", updatedCardId);
    ScorecardFactory.updateScorecard(updatedCardId, $scope.updatedCard)
      .then(function(response){
        console.log("updatedCardResponse", response);
        $location.url("scorecards/all")
      })
  }

});