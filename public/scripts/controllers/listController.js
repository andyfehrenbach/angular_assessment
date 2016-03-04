myApp.controller('ListController', ['$scope', '$http', function($scope, $http) {
    $scope.message = 'View Heroes!';
    $scope.heroes = [];
    $scope.superPowers = [];
    $scope.primary_power = '';
    $scope.onlyMatchingHeroes = [];

    console.log('list controller');

////functions to run right away
    function getPower() {
        $http.get('/power').then(function(response) {
            $scope.superPowers = response.data;
            $scope.superPowers.push({
                _id: "allPowers",
                power_name: "Get All Superheroes"
            });
        });
    }
getPower();

/////

    function getHeroes() {
        $http.get('/hero').then(function(response) {
            $scope.heroes = response.data;
            console.log($scope.heroes);
        });
    }
getHeroes();
/////////////////////

// begin logic. this may be the most twisted thing i've ever come up with
$scope.findHeroes = function () {
    console.log('find is working');
    console.log ($scope.heroes);
if ($scope.primary_power._id === 'allPowers') {
    $scope.onlyMatchingHeroes = $scope.heroes;
}

if ($scope.primary_power.power_name === $scope.heroes.primary_power )
 $scope.onlyMatchingHeroes = $scope.heroes;
};

}]);
