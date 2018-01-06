"use strict";

app.factory("ScorecardFactory", function($q, $http, firebaseURL, AuthFactory) {

  var getScorecardsFromFirebase = function(){
    var scorecards = [];
    let user = AuthFactory.getUser();
    // console.log("user", user);
    return $q(function(resolve, reject){
    $http.get(`${firebaseURL}scorecards.json`)
      .success(function(scorecardObject){
        var scorecardCollection = scorecardObject;
        Object.keys(scorecardCollection).forEach(function(key){
        scorecardCollection[key].id=key
        // console.log("key", key);
        scorecards.push(scorecardCollection[key])
      });
      resolve(scorecards);
    })
    .error(function(error){
      reject(error);
      });
    });
  };


  var postNewScorecard = function(newCard){
    let user = AuthFactory.getUser();
    console.log("current user", user);
    // newCard.userid = "";
    return $q(function(resolve,reject){
      $http.post(
        firebaseURL + "scorecards.json",
        JSON.stringify({
          roundDate:newCard.roundDate,
          roundCourse:newCard.roundCourse,
          frontStrokes:newCard.frontStrokes,
          frontPutts:newCard.frontPutts,
          frontFairways:newCard.frontFairways,
          backStrokes:newCard.backStrokes,
          backPutts:newCard.backPutts,
          backFairways:newCard.backFairways,
          totalScore:newCard.totalScore,
          totalPutts:newCard.totalPutts,
          totalFairways:newCard.totalFairways,
          coursePar: newCard.coursePar,
          courseRating:newCard.courseRating, 
          courseSlope:newCard.courseSlope, 
          roundHandicap:newCard.roundHandicap,
          holeOneScore:newCard.holeOneScore,
          holeOneFairway:newCard.holeOneFairway,
          holeOnePutts:newCard.holeOnePutts,
          holeOneNotes:newCard.holeOneNotes,
          holeTwoScore:newCard.holeTwoScore,
          holeTwoFairway:newCard.holeTwoFairway,
          holeTwoPutts:newCard.holeTwoPutts,
          holeTwoNotes:newCard.holeTwoNotes,
          holeThreeScore:newCard.holeThreeScore,
          holeThreeFairway:newCard.holeThreeFairway,
          holeThreePutts:newCard.holeThreePutts,
          holeThreeNotes:newCard.holeThreeNotes,
          holeFourScore:newCard.holeFourScore,
          holeFourFairway:newCard.holeFourFairway,
          holeFourPutts:newCard.holeFourPutts,
          holeFourNotes:newCard.holeFourNotes,
          holeFiveScore:newCard.holeFiveScore,
          holeFiveFairway:newCard.holeFiveFairway,
          holeFivePutts:newCard.holeFivePutts,
          holeFiveNotes:newCard.holeFiveNotes,
          holeSixScore:newCard.holeSixScore,
          holeSixFairway:newCard.holeSixFairway,
          holeSixPutts:newCard.holeSixPutts,
          holeSixNotes:newCard.holeSixNotes,
          holeSevenScore:newCard.holeSevenScore,
          holeSevenFairway:newCard.holeSevenFairway,
          holeSevenPutts:newCard.holeSevenPutts,
          holeSevenNotes:newCard.holeSevenNotes,
          holeEightScore:newCard.holeEightScore,
          holeEightFairway:newCard.holeEightFairway,
          holeEightPutts:newCard.holeEightPutts,
          holeEightNotes:newCard.holeEightNotes,
          holeNineScore:newCard.holeNineScore,
          holeNineFairway:newCard.holeNineFairway,
          holeNinePutts:newCard.holeNinePutts,
          holeNineNotes:newCard.holeNineNotes,
          holeTenScore:newCard.holeTenScore,
          holeTenFairway:newCard.holeTenFairway,
          holeTenPutts:newCard.holeTenPutts,
          holeTenNotes:newCard.holeTenNotes,
          holeElevenScore:newCard.holeElevenScore,
          holeElevenFairway:newCard.holeElevenFairway,
          holeElevenPutts:newCard.holeElevenPutts,
          holeElevenNotes:newCard.holeElevenNotes,
          holeTwelveScore:newCard.holeTwelveScore,
          holeTwelveFairway:newCard.holeTwelveFairway,
          holeTwelvePutts:newCard.holeTwelvePutts,
          holeTwelveNotes:newCard.holeTwelveNotes,
          holeThirteenScore:newCard.holeThirteenScore,
          holeThirteenFairway:newCard.holeThirteenFairway,
          holeThirteenPutts:newCard.holeThirteenPutts,
          holeThirteenNotes:newCard.holeThirteenNotes,
          holeFourteenScore:newCard.holeFourteenScore,
          holeFourteenFairway:newCard.holeFourteenFairway,
          holeFourteenPutts:newCard.holeFourteenPutts,
          holeFourteenNotes:newCard.holeFourteenNotes,
          holeFifteenScore:newCard.holeFifteenScore,
          holeFifteenFairway:newCard.holeFifteenFairway,
          holeFifteenPutts:newCard.holeFifteenPutts,
          holeFifteenNotes:newCard.holeFifteenNotes,
          holeSixteenScore:newCard.holeSixteenScore,
          holeSixteenFairway:newCard.holeSixteenFairway,
          holeSixteenPutts:newCard.holeSixteenPutts,
          holeSixteenNotes:newCard.holeSixteenNotes,
          holeSeventeenScore:newCard.holeSeventeenScore,
          holeSeventeenFairway:newCard.holeSeventeenFairway,
          holeSeventeenPutts:newCard.holeSeventeenPutts,
          holeSeventeenNotes:newCard.holeSeventeenNotes,
          holeEighteenScore:newCard.holeEighteenScore,
          holeEighteenFairway:newCard.holeEighteenFairway,
          holeEighteenPutts:newCard.holeEighteenPutts,
          holeEighteenNotes:newCard.holeEighteenNotes,
          uid:user.uid
        })
      )
      .success(
        function(objectFromFirebase){
          resolve(objectFromFirebase);
        }
      );
    });
  };

  var getSingleScorecardFromFirebase = function (scorecardId){
    return $q(function(resolve, reject){
      $http.get(firebaseURL + "scorecards/" + scorecardId + ".json")
        .success(function(scorecardObject){
          resolve(scorecardObject)
        })
        .error(function(error){
          reject(error);
        });
    });
  }

  var deleteSingleScorecardFromFirebase = function(selectedCardId){
    console.log("selectedCardId", selectedCardId);
    return $q(function(resolve, reject){
      $http.delete(firebaseURL + `/scorecards/${selectedCardId}.json`)
        .success(function(changedObjectFromFirebase){
        resolve(changedObjectFromFirebase)
        })
    })
  }

  var updateScorecard = function(updatedCardId, updatedCard){
    console.log("scorecardId for card being updated", updatedCardId);
    return $q(function(resolve, reject){
      $http.put(
        firebaseURL + "scorecards/" + updatedCardId + ".json",
         JSON.stringify({
          roundDate:updatedCard.roundDate,
          roundCourse:updatedCard.roundCourse,
          courseRating:updatedCard.courseRating, 
          courseSlope:updatedCard.courseSlope, 
          frontStrokes:updatedCard.frontStrokes,
          frontPutts:updatedCard.frontPutts,
          frontFairways:updatedCard.frontFairways,
          backStrokes:updatedCard.backStrokes,
          backPutts:updatedCard.backPutts,
          backFairways:updatedCard.backFairways,
          totalScore:updatedCard.totalScore,
          totalPutts:updatedCard.totalPutts,
          totalFairways:updatedCard.totalFairways,
          roundHandicap:updatedCard.roundHandicap,
          holeOneScore:updatedCard.holeOneScore,
          holeOneFairway:updatedCard.holeOneFairway,
          holeOnePutts:updatedCard.holeOnePutts,
          holeOneNotes:updatedCard.holeOneNotes,
          holeTwoScore:updatedCard.holeTwoScore,
          holeTwoFairway:updatedCard.holeTwoFairway,
          holeTwoPutts:updatedCard.holeTwoPutts,
          holeTwoNotes:updatedCard.holeTwoNotes,
          holeThreeScore:updatedCard.holeThreeScore,
          holeThreeFairway:updatedCard.holeThreeFairway,
          holeThreePutts:updatedCard.holeThreePutts,
          holeThreeNotes:updatedCard.holeThreeNotes,
          holeFourScore:updatedCard.holeFourScore,
          holeFourFairway:updatedCard.holeFourFairway,
          holeFourPutts:updatedCard.holeFourPutts,
          holeFourNotes:updatedCard.holeFourNotes,
          holeFiveScore:updatedCard.holeFiveScore,
          holeFiveFairway:updatedCard.holeFiveFairway,
          holeFivePutts:updatedCard.holeFivePutts,
          holeFiveNotes:updatedCard.holeFiveNotes,
          holeSixScore:updatedCard.holeSixScore,
          holeSixFairway:updatedCard.holeSixFairway,
          holeSixPutts:updatedCard.holeSixPutts,
          holeSixNotes:updatedCard.holeSixNotes,
          holeSevenScore:updatedCard.holeSevenScore,
          holeSevenFairway:updatedCard.holeSevenFairway,
          holeSevenPutts:updatedCard.holeSevenPutts,
          holeSevenNotes:updatedCard.holeSevenNotes,
          holeEightScore:updatedCard.holeEightScore,
          holeEightFairway:updatedCard.holeEightFairway,
          holeEightPutts:updatedCard.holeEightPutts,
          holeEightNotes:updatedCard.holeEightNotes,
          holeNineScore:updatedCard.holeNineScore,
          holeNineFairway:updatedCard.holeNineFairway,
          holeNinePutts:updatedCard.holeNinePutts,
          holeNineNotes:updatedCard.holeNineNotes,
          holeTenScore:updatedCard.holeTenScore,
          holeTenFairway:updatedCard.holeTenFairway,
          holeTenPutts:updatedCard.holeTenPutts,
          holeTenNotes:updatedCard.holeTenNotes,
          holeElevenScore:updatedCard.holeElevenScore,
          holeElevenFairway:updatedCard.holeElevenFairway,
          holeElevenPutts:updatedCard.holeElevenPutts,
          holeElevenNotes:updatedCard.holeElevenNotes,
          holeTwelveScore:updatedCard.holeTwelveScore,
          holeTwelveFairway:updatedCard.holeTwelveFairway,
          holeTwelvePutts:updatedCard.holeTwelvePutts,
          holeTwelveNotes:updatedCard.holeTwelveNotes,
          holeThirteenScore:updatedCard.holeThirteenScore,
          holeThirteenFairway:updatedCard.holeThirteenFairway,
          holeThirteenPutts:updatedCard.holeThirteenPutts,
          holeThirteenNotes:updatedCard.holeThirteenNotes,
          holeFourteenScore:updatedCard.holeFourteenScore,
          holeFourteenFairway:updatedCard.holeFourteenFairway,
          holeFourteenPutts:updatedCard.holeFourteenPutts,
          holeFourteenNotes:updatedCard.holeFourteenNotes,
          holeFifteenScore:updatedCard.holeFifteenScore,
          holeFifteenFairway:updatedCard.holeFifteenFairway,
          holeFifteenPutts:updatedCard.holeFifteenPutts,
          holeFifteenNotes:updatedCard.holeFifteenNotes,
          holeSixteenScore:updatedCard.holeSixteenScore,
          holeSixteenFairway:updatedCard.holeSixteenFairway,
          holeSixteenPutts:updatedCard.holeSixteenPutts,
          holeSixteenNotes:updatedCard.holeSixteenNotes,
          holeSeventeenScore:updatedCard.holeSeventeenScore,
          holeSeventeenFairway:updatedCard.holeSeventeenFairway,
          holeSeventeenPutts:updatedCard.holeSeventeenPutts,
          holeSeventeenNotes:updatedCard.holeSeventeenNotes,
          holeEighteenScore:updatedCard.holeEighteenScore,
          holeEighteenFairway:updatedCard.holeEighteenFairway,
          holeEighteenPutts:updatedCard.holeEighteenPutts,
          holeEighteenNotes:updatedCard.holeEighteenNotes,
          uid:updatedCard.uid

          })
        )
        .success(
          function(newObjectFromFirebase){
            resolve(newObjectFromFirebase)
          }
       )
        .error(function(error){
          reject(error);
        });
    });
  }




  return {postNewScorecard:postNewScorecard, getScorecardsFromFirebase:getScorecardsFromFirebase, getSingleScorecardFromFirebase:getSingleScorecardFromFirebase, updateScorecard:updateScorecard, deleteSingleScorecardFromFirebase:deleteSingleScorecardFromFirebase}
});