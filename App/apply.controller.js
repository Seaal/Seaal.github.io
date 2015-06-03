(function() {
	angular
		.module("eloHeaven")
		.controller("applyController", ApplyController);
		
	function ApplyController() {
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
			
			vm.regions = [{
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
		
		function addSummoner(name, region) {
			
			vm.mentor.summoners.push({
				name: name,
				region: vm.regions[region].shortName
			});
		}
	}
})();