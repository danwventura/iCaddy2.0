app.controller("NewCardCtrl", function($scope, $location, ScorecardFactory){

$scope.title = "New Scorecard"

$scope.newCard = {
  roundDate:"",
  roundCourse: "",
  frontScore: "",
  frontPutts: "",
  frontFairways:"",
  backScore: "",
  backPutts: "",
  backFairways: "",
  totalScore: "",
  totalPutts: "",
  totalFairways: "",
  coursePar: "",
  // courseRating: "",
  // courseSlope: "",
  roundHandicap: "",
  holeOneScore:"",
  holeOneFairway: "",
  holeOnePutts: "",
  holeOneNotes: "",
  holeTwoScore:"",
  holeTwoFairway: "",
  holeTwoPutts: "",
  holeTwoNotes: "",
  holeThreeScore:"",
  holeThreeFairway: "",
  holeThreePutts: "",
  holeThreeNotes: "",
  holeFourScore:"",
  holeFourFairway: "",
  holeFourPutts: "",
  holeFourNotes: "",
  holeFiveScore:"",
  holeFiveFairway: "",
  holeFivePutts: "",
  holeFiveNotes: "",
  holeSixScore:"",
  holeSixFairway: "",
  holeSixPutts: "",
  holeSixNotes: "",
  holeSevenScore:"",
  holeSevenFairway: "",
  holeSevenPutts: "",
  holeSevenNotes: "",
  holeEightScore:"",
  holeEightFairway: "",
  holeEightPutts: "",
  holeEightNotes: "",
  holeNineScore:"",
  holeNineFairway: "",
  holeNinePutts: "",
  holeNineNotes: "",
  holeTenScore:"",
  holeTenFairway: "",
  holeTenPutts: "",
  holeTenNotes: "",
  holeElevenScore:"",
  holeElevenFairway: "",
  holeElevenPutts: "",
  holeElevenNotes: "",
  holeTwelveScore:"",
  holeTwelveFairway: "",
  holeTwelvePutts: "",
  holeTwelveNotes: "",
  holeThirteenScore:"",
  holeThirteenFairway: "",
  holeThirteenPutts: "",
  holeThirteenNotes: "",
  holeFourteenScore:"",
  holeFourteenFairway: "",
  holeFourteenPutts: "",
  holeFourteenNotes: "",
  holeFifteenScore:"",
  holeFifteenFairway: "",
  holeFifteenPutts: "",
  holeFifteenNotes: "",
  holeSixteenScore:"",
  holeSixteenFairway: "",
  holeSixteenPutts: "",
  holeSixteenNotes: "",
  holeSeventeenScore:"",
  holeSeventeenFairway: "",
  holeSeventeenPutts: "",
  holeSeventeenNotes: "",
  holeEighteenScore:"",
  holeEighteenFairway: "",
  holeEighteenPutts: "",
  holeEighteenNotes: ""
};

  

  

  $scope.createTotals = function(){
    var frontStrokes = angular.element('#newRoundFrontStrokes')[0].attributes.value.value;
    var frontPutts = angular.element('#newRoundFrontPutts')[0].attributes.value.value;
    var frontFairways = angular.element('#newRoundFrontFairways')[0].attributes.value.value;
    var backStrokes = angular.element('#newRoundBackStrokes')[0].attributes.value.value;
    var backPutts = angular.element('#newRoundBackPutts')[0].attributes.value.value;
    var backFairways = angular.element('#newRoundBackFairways')[0].attributes.value.value;
    var totalScore = angular.element('#newRoundTotalScore')[0].attributes.value.value;
    var totalPutts = angular.element('#newRoundTotalPutts')[0].attributes.value.value;
    var totalFairways = angular.element('#newRoundTotalFairways')[0].attributes.value.value;
    var roundHandicap = Math.round(((totalScore - 71.4) * 113)/113);


    $scope.addNewScorecard(frontStrokes, frontPutts, frontFairways, backStrokes, backPutts, backFairways, totalScore, totalPutts, totalFairways, roundHandicap)
    }







   
  $scope.addNewScorecard = function(frontStrokes, frontPutts, frontFairways, backStrokes, backPutts, backFairways, totalScore, totalPutts, totalFairways, roundHandicap){
      
      $scope.newCard.frontStrokes = frontStrokes;
      $scope.newCard.frontPutts = frontPutts;
      $scope.newCard.frontFairways = frontFairways;
      $scope.newCard.backStrokes = backStrokes;
      $scope.newCard.backPutts = backPutts;
      $scope.newCard.backFairways = backFairways;
      $scope.newCard.totalScore = totalScore;
      $scope.newCard.totalPutts = totalPutts;
      $scope.newCard.totalFairways = totalFairways;
      $scope.newCard.roundHandicap = roundHandicap;



    ScorecardFactory.postNewScorecard($scope.newCard)
      .then(function(response){
        console.log("res", response);
        $location.url("/scorecards/all");
      });
  };
});

