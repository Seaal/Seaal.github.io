(function() {
	angular
		.module("eloHeaven.mentors")
		.controller("applyController", ApplyController);
		
	function ApplyController(leagueApiService) {
		var vm = this;
		
		vm.addSummoner = addSummoner;
		vm.mentor = {};
		vm.regions = [];
		vm.summonerName = "";
		vm.summonerRegion = 0;
		
		activate();
		
		function activate() {
			
			vm.mentor = {
				summoners: []
			};
			
			vm.regions = leagueApiService.getRegions();
		}
		
		function addSummoner(name, region) {
			
			vm.mentor.summoners.push({
				name: name,
				region: vm.regions[region].shortName,
				rank: "Diamond III"
			});
		}
	}
})();