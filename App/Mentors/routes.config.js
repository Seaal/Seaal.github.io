(function() {
	angular
		.module("eloHeaven.mentors")
		.config(routes);
		
	function routes($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/mentors/search");
		
		$stateProvider
			.state("apply", {
				url: "/mentors/apply",
				abstract: true,
				templateUrl: "App/Mentors/Application/application.view.html",
				controller: "applicationController as application"
			})
			.state("apply.terms", {
				url: "",
				templateUrl: "App/Mentors/Application/terms.view.html",
				controller: "termsController as application",
				data: { step: 1 }
			})
			.state("apply.summoners", {
				url: "/summoners",
				templateUrl: "App/Mentors/Application/addSummoners.view.html",
				controller: "addSummonersController as apply",
				data: { step: 2 }
			});
			
	}
})();