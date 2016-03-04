myApp.controller('HeroController', ['$scope', '$http', function($scope, $http) {
    $scope.message = 'Add a hero!';
    //
    $scope.superPowers = [];
    $scope.heroes = [];
    //
    $scope.alias = '';
    $scope.first_name = '';
    $scope.last_name = '';
    $scope.city = '';
    $scope.primary_power = '';

    console.log('hero Controller');

    function getPower() {
        $http.get('/power').then(function(response) {
            $scope.superPowers = response.data;
        });
    }
getPower();

 $scope.addHero = function () {
     var hero = {
             alias: $scope.alias,
             first_name: $scope.first_name,
             last_name: $scope.last_name,
             city: $scope.city,
             primary_power: $scope.primary_power.power_name
         };
         console.log(hero);

         $http.post('/hero', hero).then(function(response) {
             $scope.heroes = response.data;
             console.log($scope.heroes);
         });
};

}]);
