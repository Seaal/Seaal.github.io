(function() {
	angular
		.module("eloHeaven")
		.config(routes);
		
	function routes($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/mentors/search");
		
		$stateProvider
			.state("search", {
				url: "/mentors/search",
				templateUrl: "App/Mentors/search.view.html",
				controller: "searchController as search"
			})
			.state("apply", {
				url: "/mentors/apply",
				abstract: true,
				templateUrl: "App/Mentors/Application/apply.view.html",
				controller: "applyController as apply"
			})
			.state("apply.terms", {
				url: "",
				templateUrl: "App/Mentors/Application/confirmTerms.view.html",
				controller: "confirmTermsController as application",
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