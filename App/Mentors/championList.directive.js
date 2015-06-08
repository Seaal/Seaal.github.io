(function() {
	
	angular
		.directive("ehChampionList", function() {
			return {
				restrict: 'E',
				templateUrl: 'App/mentors/championList.html',
				bindToController: true,
				controllerAs: "vm",
				controller: function() {
					
				}
			}
		});
	
})();