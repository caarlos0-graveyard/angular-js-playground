angular.module('project', ['project-mongolab']).
  config(function($routeProvider) {
    $routeProvider.
      when('/', { controller: ListCtrl, templateUrl: '3/list.html' }).
      when('/edit/:project', { controller: EditCtrl, templateUrl: '3/detail.html' }).
      when('/new', { controller: CreateCtrl, templateUrl: '3/detail.html' } ).
      otherwise({ redirectTo: '/' });
  });

function ListCtrl($scope, Project) {
  $scope.projects = Project.query();
}

function CreateCtrl($scope, $location, Project) {
  $scope.save = function() {
    Project.save($scope.project, function(project) {
      $location.path('/');
    });
  }
}

function EditCtrl($scope, $location, $routeParams, Project) {
  var self = this;

  Project.get({ id: $routeParams.projectId }, function(project) {
    self.original = project;
    $scope.project = new Project(project);
  });

  $scope.isClean = function() {
    return angular.equals(self.original, $scope.project);
  }

  $scope.destroy = function() {
    self.original.destroy(function() {
      $location.path('/');
    });
  }

  $scope.save = function() {
    self.original.update(function() {
      $location.path('/');
    });
  }
}
