(function() {
	
	angular
		.module("eloHeaven.mentors")
		.controller("bioController", BioController);
		
	function BioController() {
		var vm = this;
		
		vm.specialities = [];
		vm.summary = "";
		vm.aboutMentor = "";
		vm.maxSummaryLength = 500;
	}
	
})();