(function() {
	angular
		.module("eloHeaven.core")
		.factory("leagueApiService", leagueApiService);
		
	function leagueApiService() {
		return {
			confirmSummoner: confirmSummoner,
			getSummoner: getSummoner,
			getRegions : getRegions	
		};
		
		function confirmSummoner(summoner, code) {
			return true;
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