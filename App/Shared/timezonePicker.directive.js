(function() {
	
	angular
		.module("seaal")
		.directive("seaalTimezonePicker", timezonePicker);
		
	function timezonePicker() {
		var directive = {
			restrict: 'E',
			templateUrl: 'App/Shared/timezonePicker.template.html',
			scope: {
				selectedTimezone: "="
			},
			controllerAs: "vm",
			bindToController: true,
			controller: controller,
			link: link,
			replace: true
		}
		
		return directive;
		
		function controller() {
			
		}
		
		function link(scope, element, attrs) {
			element.selectize();
		}
	}
	
})();