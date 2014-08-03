var app = angular.module('leaderboard', ['firebase']);

app.controller('MainCtrl', ['$scope', 'ContestantsService', '$firebase', function ($scope, ContestantsService, $firebase) {

    $scope.newContestant = { email: '', name: '', score: '' };
    $scope.currentContestant = null;

    // Explicit
    $scope.contestants = ContestantsService.getContestants();

    $scope.addContestant = function () {
        ContestantsService.addContestant(angular.copy($scope.newContestant));
        $scope.newContestant = { lane: '', name: '', score: '' };
    };

    $scope.updateContestant = function (contestant) {
        ContestantsService.updateContestant(contestant);
    };

    $scope.removeContestant = function (contestant) {
        ContestantsService.removeContestant(contestant);
    };

    $scope.incrementScore = function () {
        $scope.currentContestant.score = parseInt($scope.currentContestant.score, 10) + 1;
        $scope.updateContestant($scope.currentContestant);
    };

    $scope.decrementScore = function () {
        $scope.currentContestant.score = parseInt($scope.currentContestant.score, 10) - 1;
        $scope.updateContestant($scope.currentContestant);
    };
}]);

app.factory('ContestantsService', ['$firebase', function ($firebase) {
    var ref = new Firebase('https://box-arcade.firebaseio.com/');
    var contestants = $firebase(ref);

    contestants.$on('loaded', function(){
        // console.log('contestants', contestants);
    })

    var getContestants = function() {
        return contestants;
    }

    var addContestant = function (contestant) {
        contestants.$add(contestant);
    };

    var updateContestant = function (id) {
        contestants.$save(id);
    };

    var removeContestant = function (id) {
        contestants.$remove(id);
    };

    return {
        getContestants: getContestants,
        addContestant: addContestant,
        updateContestant: updateContestant,
        removeContestant: removeContestant
    }
}]);