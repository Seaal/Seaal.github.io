(function() {
	
	angular
		.module("eloHeaven.mentors")
		.directive("ehChampionList", function() {
			return {
				restrict: 'E',
				templateUrl: 'App/Mentors/championList.html',
				bindToController: true,
				scope: {
					readOnly: "=?",
					editMode: "=?",
					selectedChampions: '=',
					size: "@"
				},
				controllerAs: "list",
				controller: function(championListService) {
					var vm = this;
					
					vm.cancel = cancel;
					vm.edit = edit;
					vm.editChampions = [];
					vm.filterString = "";
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
						
						if(vm.size === undefined) {
							vm.size = "small";
						}
						
						if(!vm.readOnly) {
							vm.editChampions = championListService.getAllChampions();
							championListService.setAllChampionsSelected(vm.selectedChampions);
						}
					}
					
					function edit() {
						vm.filterString = "";					
						vm.editMode = true;
					}
					
					function save() {
						championListService.setSelectedChampions(vm.selectedChampions);
						
						vm.editMode = false;
					}
					
					function cancel() {
						championListService.setAllChampionsSelected(vm.selectedChampions);
						
						vm.editMode = false;
					}
					
					function selectChampion(champion) {
						champion.selected = !champion.selected;
					}
				}
			};
		});
	
})();