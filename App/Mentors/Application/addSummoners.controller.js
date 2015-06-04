(function() {
	angular
		.module("eloHeaven.mentors")
		.controller("addSummonersController", AddSummonerController);
		
	function AddSummonerController($modal, $state, leagueApiService, applicationService, $scope) {
		var vm = this;
		
		vm.addSummoner = addSummoner;
		vm.mentor = {};
		vm.previousStep = previousStep;
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
				templateUrl: 'App/Mentors/Application/confirmSummoner.html',
				controller: 'confirmSummonerController',
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
		
		function previousStep() {
			var previousStep = applicationService.getPreviousStep($state.current.data.step);
			
			$state.go(previousStep);
		}
	}
})();