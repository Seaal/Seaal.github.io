(function() {
	angular
		.module("eloHeaven.mentors")
		.controller("applyController", Apply);
		
	function Apply($scope, $state) {
		var vm = this;
		
		vm.currentStep = "";
		vm.valid = true;
		
		$scope.$on('$stateChangeSuccess', function(event, toState) {
			vm.currentStep = toState.data.step;
		});
	}
})();