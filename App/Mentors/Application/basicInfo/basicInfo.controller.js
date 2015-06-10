(function() {
	angular
		.module("eloHeaven.mentors")
		.controller("basicInfoController", BasicInfoController);
		
	function BasicInfoController() {
		var vm = this;
		
		activate();
		
		function activate() {
			vm.selectedChampions = [{ name: 'Lux', imageUrl: 'images/lux-32.jpg' },
                    { name: 'Shaco', imageUrl: 'images/shaco-32.jpg' }];
		}
	}
})();