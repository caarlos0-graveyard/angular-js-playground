function TodoCtrl($scope) {
  $scope.todos = [
    { text: "learn angular =D", done: false },
    { text: "understand all this crap", done: false },
    { text: "build an angular app", done: false },
    { text: "use bower", done: true }
  ]

  $scope.addTodo = function() {
    if($scope.todoText && $scope.todoText.trim().length > 0) {
      $scope.todos.push({ text: $scope.todoText, done: false });
      $scope.todoText = '';
    }
  }

  $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.todos, function(todo) {
      count += todo.done ? 1 : 0;
    });
    return count;
  }

  $scope.donePercentage = function() {
    return ($scope.remaining() * 100) / $scope.todos.length;
  }

  $scope.archive = function() {
    var oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldTodos, function(todo) {
      if (!todo.done) {
        $scope.todos.push(todo);
      }
    });
  }
}
