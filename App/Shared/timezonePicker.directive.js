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
			controller: controller
		}
		
		return directive;
		
		function controller() {
			var vm = this;
			
			vm.selectConfig = {
				valueField: 'id',
				labelField: 'name',
				maxItems: 1,
				searchField: 'name'
			};
			
			vm.timezones = moment.tz.names();
		}
	}
	
})();