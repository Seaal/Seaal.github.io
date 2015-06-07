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
		vm.errors = [];
		
		$scope.$on("nextStep", nextStep);
		
		activate();
		
		function activate() {
			
			vm.mentor = {
				summoners: []
			};
			
			vm.regions = leagueApiService.getRegions();
		}
		
		function nextStep(event, errors) {
				
			vm.errors.length = 0;
			
			if(vm.mentor.summoners.length == 0) {					
				errors.push({ message: 'You need a Ranked Level 30 account to continue.' });
			}
		}
		
		function addSummoner(name, region) {
			
			vm.errors.length = 0;
			
			if(name == "") {
				vm.errors.push({ message: 'Summoner Name cannot be empty.' });
			}
			
			if(region === "") {
				vm.errors.push({ message: 'Please select a region.' });
			}
			
			if(vm.errors.length > 0) {
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