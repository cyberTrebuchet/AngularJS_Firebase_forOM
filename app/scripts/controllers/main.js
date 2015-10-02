'use strict';

/**
 * @ngdoc function
 * @name angularFirebaseForOmApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularFirebaseForOmApp
 */
angular.module('forOM')
  .controller('MainCtrl', function ($scope, $firebaseObject) {
    var ref = new Firebase("https://crackling-fire-8466.firebaseio.com/whee");
    $scope.data = $firebaseObject(ref);
    $scope.todos = ['Item 1', 'Item 2', 'Item 3'];
    $scope.addTodo = function () {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };
    $scope.nod = function (index) {
      $scope.todos[index] += "+1";
    };
  });