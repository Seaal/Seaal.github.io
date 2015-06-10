(function() {
	
	angular
		.module("eloHeaven.mentors")
		.directive("ehChampionList", function() {
			return {
				restrict: 'E',
				templateUrl: 'App/mentors/championList.html',
				bindToController: true,
				scope: {
					readOnly: "@",
					editMode: "@",
					selectedChampions: '='
				},
				controllerAs: "list",
				controller: function(leagueApiService) {
					var vm = this;
					
					activate();
					
					function activate() {
						if(vm.editMode === "true") {
							vm.editMode = true;
						} else {
							vm.editMode = false;
						}
						
						if(vm.readOnly === "false") {
							vm.readOnly = false;
						} else {
							vm.readOnly = true;
						}
					}
				}
			};
		});
	
})();