(function() {
	angular
		.module("eloHeaven.core")
		.factory("leagueApiService", leagueApiService);
		
	function leagueApiService() {
		return {
			confirmSummoner: confirmSummoner,
			getChampions: getChampions,
			getSummoner: getSummoner,
			getRegions : getRegions	
		};
		
		function confirmSummoner(summoner, code) {
			return true;
		}
		
		function getChampions() {
			return [{ name: 'Lux', imageUrl: 'images/lux-32.jpg' },
                    { name: 'Shaco', imageUrl: 'images/shaco-32.jpg' }, { name: 'Ezreal', imageUrl: 'images/ezreal-32.jpg' }, { name: 'Swain', imageUrl: 'images/swain-32.jpg' }, { name: 'Draven', imageUrl: 'images/draven-32.jpg' }, { name: 'Janna', imageUrl: 'images/janna-32.jpg' }, { name: 'Lee Sin', imageUrl: 'images/leesin-32.jpg' }];
		}
		
		function getSummoner(name, region) {
			return {
				name: name,
				region: getRegions()[region].shortName,
				rank: "Diamond III"
			};
		}
		
		function getRegions() {
			return [{
				id: 0,
				shortName: "NA",
				longName: "North America"
			}, {
				id: 1,
				shortName: "EUW",
				longName: "Europe West"
			}, {
				id: 2,
				shortName: "EUNE",
				longName: "Europe North & East"
			}];
		}
	}
})();