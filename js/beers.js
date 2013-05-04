function BeerCounter($scope, $locale) {
  $scope.beers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  if($locale.id = 'en-us') {
    $scope.beerForms = {
      0: "No beers",
      one: "{} beer",
      other: "{} beers"
    };
  } else if($locale.id = 'pt-br') {
    $scope.beerForms = {
      0: "Sem cervejas pra você",
      one: "Uma cerveja",
      few: "Algumas cervejas",
      other: "{} cervejas"
    }
  }
}
