function MainController($scope){
  $scope.greeting = "HELLO!!!!";
  $scope.name = "Leigh";
  $scope.email = "leigh@isawesome.com";
  $scope.phone = "201-555-5555";
}

angular.module("app").controller("MainController", MainController);
