angular.module('myapp', [])
  .directive('markdown', function() {
    var converter = new Showdown.converter();
    var editTemplate = '<textarea ng-show="isEditMode" ng-dblclick="switchEditMode()" ng-model="markdown"></textarea>';
    var previewTemplate = '<div ng-hide="isEditMode" ng-dblclick="switchEditMode()"></div>';
    return {
      restrict: 'E',
      scope: {},
      compile: function(tElement, tAttrs, transclude) {
        var md = tElement.text();

        tElement.html(editTemplate);
        var previewElement = angular.element(previewTemplate);
        tElement.append(previewElement);

        return function(scope, element, attrs) {
          scope.isEditMode = false;
          scope.markdown = md;

          scope.compileMarkdown = function() {
            previewElement.html(converter.makeHtml(scope.markdown));
          }
          scope.switchEditMode = function() {
            scope.isEditMode = !scope.isEditMode;
            if(!scope.isEditMode) {
              scope.compileMarkdown();
            }
          }
          scope.compileMarkdown();
        }
      }
    }
  });
