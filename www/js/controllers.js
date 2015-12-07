angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $state) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system

    // user login to parse
    Parse.User.logIn($scope.loginData.username, $scope.loginData.password,
    {
      success: function(user) {
        //login success code
        console.log('login sucess');
         $scope.modal.hide();
         $state.go('app.playlists');

      },
      error: function(user, error) {
        //login error code
        console.log ('login error', error);
      }
    });
    
    // $timeout(function() {
    //  $scope.closeLogin();
    //}, 1000);
  };
})

.controller('RepMaxCtrl', function($scope){

})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('WelcomeCtrl', function($scope){
  
})

.controller('ExercisesCtrl', function($scope) {
  var ExerciseModel = Parse.Object.extend("Exercise");
  var ExerciseQuery = new Parse.Query(ExerciseModel);
  ExerciseQuery.equalTo("category","gymnastics");
  ExerciseQuery.ascending('name');
  ExerciseQuery.find({
    success: function(results){
      $scope.exercises = results;
      //alert("successfully retrieved " + results.length + " exercises");
      //alert(results[1].get('name'));
      //console.log(results);
      //console.log($scope.exercises);
    },
    error: function(error) {
      alert("Error: " + error.code + " " + error.message);
    }
  });
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
