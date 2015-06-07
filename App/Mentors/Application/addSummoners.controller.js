(function() {
	angular
		.module("eloHeaven.mentors")
		.controller("addSummonersController", AddSummonerController);
		
	function AddSummonerController($modal, $state, $scope, leagueApiService, applicationService) {
		var vm = this;
		
		vm.addSummoner = addSummoner;
		vm.mentor = {};
		vm.regions = [];
		vm.summonerName = "";
		vm.summonerRegion = "";
		
		$scope.$on("nextStep", nextStep);
		
		activate();
		
		function activate() {
			
			vm.mentor = {
				summoners: []
			};
			
			vm.regions = leagueApiService.getRegions();
		}
		
		function nextStep(event, errors) {
				
				errors.length = 0;
				
				if(vm.mentor.summoners.length == 0) {					
					errors.push({ message: 'You need a Ranked Level 30 account to continue.' });
				}
			}
		
		function addSummoner(name, region) {
			
			errors.length = 0;
			
			if(name == "") {
				errors.push({ message: 'Summoner Name cannot be empty.' });
			}
			
			if(region === "") {
				errors.push({ message: 'Please select a region.' });
			}
			
			if(errors.length > 0) {
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
	}
})();