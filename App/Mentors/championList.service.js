(function() {
	
	angular
		.module("eloHeaven.mentors")
		.factory("championListService", championListService);
		
	function championListService(leagueApiService) {
		var service = {
			filterChampions: filterChampions,
			getAllChampions: getAllChampions,
			setSelectedChampions : setSelectedChampions,
			setAllChampionsSelected: setAllChampionsSelected
		}
		
		var champions = [];
		
		return service;
		
		function filterChampions(filterString) {
			if(filterString === "") {
				return champions;
			}
			
			filterString = filterString.toLowerCase();
			
			var filterChampions = [];
			
			for(var i = 0; i < champions.length; i++) {
				if(~champions[i].name.toLowerCase().indexOf(filterString)) {
					filterChampions.push(champions[i]);
				}
			}
			
			return filterChampions;
		}
		
		function getAllChampions() {
			
			if(champions.length == 0) {
				champions = leagueApiService.getChampions();
			}
			
			return champions;
		}
		
		function setSelectedChampions(selectedChampions) {
			selectedChampions.length = 0;
			
			for(var i = 0 ; i < champions.length; i++ ) {
				if(champions[i].selected) {
					selectedChampions.push(champions[i]);
				}
			}
		}
		
		function setAllChampionsSelected(selectedChampions) {
			
			for(var i=0; i < champions.length; i++) {
				
				champions[i].selected = false;
						
				for(var j=0; j < selectedChampions.length; j++) {
					if(champions[i].name === selectedChampions[j].name) {
						champions[i].selected = true;
						break;
					}
				}				
			}
		}
	}
	
})();