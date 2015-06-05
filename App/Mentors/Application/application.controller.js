(function() {
	angular
		.module("eloHeaven.mentors")
		.controller("applicationController", Application);
		
	function Application($scope, $state, applicationService) {
		var vm = this;
		
		vm.currentStep = "";
		vm.errors = [];
		vm.previousStep = previousStep;
		vm.nextStep = nextStep;
		vm.valid = true;
		
		activate();
		
		function activate() {
			$scope.onContinue = function() { return true; };
		}
		
		function nextStep(currentStep) {
			if($scope.onContinue()) {
				var nextStep = applicationService.getNextStep(currentStep);
			
				$state.go(nextStep);
			}
		}
		
		function previousStep(currentStep) {
			var previousStep = applicationService.getPreviousStep(currentStep);
			
			$state.go(previousStep);
		}
		
		$scope.$on('$stateChangeSuccess', function(event, toState) {
			vm.currentStep = toState.data.step;
		});
	}
})();