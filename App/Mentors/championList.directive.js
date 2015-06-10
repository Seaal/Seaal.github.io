(function() {
	
	angular
		.module("eloHeaven.mentors")
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