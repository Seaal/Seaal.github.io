(function() {
	angular
		.module("eloHeaven.core")
		.factory("leagueApiService", leagueApiService);
		
	function leagueApiService() {
		return {
			getRegions : getRegions	
		};
		
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