(function() {
	
	angular
		.module("eloHeaven.mentors")
		.factory("championListService", championListService);
		
	function championListService() {
		var service = {
			setSelectedChampions : setSelectedChampions,
			setAllChampionsSelected: setAllChampionsSelected
		}
		
		function setSelectedChampions(allChampions, selectedChampions) {
			selectedChampions.length = 0;
			
			for(var i = 0 ; i < allChampions.length; i++ ) {
				if(allChampions[i].selected) {
					selectedChampions.push(allChampions[i]);
				}
			}
		}
		
		function setAllChampionsSelected(allChampions, selectedChampions) {
			
			for(var i=0; i < allChampions.length; i++) {
								
				for(var j=0; j < selectedChampions.length; j++) {
					if(allChampions[i].name === selectedChampions[j].name) {
						allChampions[i].selected = true;
						break;
					}
				}
				
				if(!allChampions[i].selected) {
					allChampions[i].selected = false;
				}
				
			}
		}
		
		return service;
		
		
	}
	
})();