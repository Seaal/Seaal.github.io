(function() {
	
	angular
		.module("eloHeaven.mentors")
		.controller("addSummonerController", AddSummonerController);
		
	function AddSummonerController($scope, leagueApiService, summoner) {
		var vm = this;
		
		vm.summoner = summoner;
		vm.code = "";
		vm.confirm = confirm;
		
		activate();
		
		function activate() {
			vm.code = "A6\"dusU";
		}
		
		function confirm(summoner, code) {
			if(leagueApiService.confirmSummoner(summoner, code)) {
				$scope.$close(summoner);
			}
		}
	}
	
})();