(function() {
	
	angular
		.module("eloHeaven.mentors")
		.directive("ehChampionList", function() {
			return {
				restrict: 'E',
				templateUrl: 'App/mentors/championList.html',
				bindToController: true,
				scope: {
					readOnly: "=?",
					editMode: "=?",
					selectedChampions: '='
				},
				controllerAs: "list",
				controller: function(leagueApiService, championListService) {
					var vm = this;
					
					vm.allChampions = [];
					vm.cancel = cancel;
					vm.edit = edit;
					vm.save = save;
					vm.selectChampion = selectChampion;
					
					activate();
					
					function activate() {
						if(vm.editMode === undefined) {
							vm.editMode = false;
						}
						
						if(vm.readOnly === undefined) {
							vm.readOnly = true;
						}
					}
					
					function edit() {
						
						if(vm.allChampions.length == 0) {
							vm.allChampions = leagueApiService.getChampions();
							
							championListService.setAllChampionsSelected(vm.allChampions, vm.selectedChampions);
						}
						
						vm.editMode = true;
					}
					
					function save() {
						championListService.setSelectedChampions(vm.allChampions, vm.selectedChampions);
						
						vm.editMode = false;
					}
					
					function cancel() {
						championListService.setAllChampionsSelected(vm.allChampions, vm.selectedChampions);
						
						vm.editMode = false;
					}
					
					function selectChampion(index) {
						vm.allChampions[index].selected = !vm.allChampions[index].selected;
					}
				}
			};
		});
	
})();