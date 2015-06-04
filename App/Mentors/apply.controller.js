(function() {
	angular
		.module("eloHeaven.mentors")
		.controller("applyController", ApplyController);
		
	function ApplyController(leagueApiService, $modal) {
		var vm = this;
		
		vm.addSummoner = addSummoner;
		vm.mentor = {};
		vm.regions = [];
		vm.summonerName = "";
		vm.summonerRegion = "";
		
		activate();
		
		function activate() {
			
			vm.mentor = {
				summoners: []
			};
			
			vm.regions = leagueApiService.getRegions();
		}
		
		function addSummoner(name, region) {
			
			if(name == "") {
				return;
			}
			
			if(region === "") {
				return;
			}
			
			var summoner = leagueApiService.getSummoner(name, region);
			
			var confirmModal = $modal.open({
				templateUrl: 'App/Mentors/addSummoner.view.html',
				controller: 'addSummonerController',
				controllerAs: 'vm',
				backdrop: 'static',
				resolve: {
					summoner: function() {
						return summoner;
					}
				}
			});
			
			confirmModal.result.then(function(summoner) {
				vm.mentor.summoners.push(summoner);
				
				vm.summonerName = "";
				vm.summonerRegion = "";
			});
		}
	}
})();