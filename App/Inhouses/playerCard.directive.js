(function() {
    
    angular
        .module("eloHeaven.inhouses")
        .directive("ehPlayerCard", playerCard);
        
    function playerCard() {
        var directive = {
            restrict: 'E',
            templateUrl: 'App/Inhouses/playerCard.html',
            scope: {
                player: "="
            },
            controllerAs: 'card',
            bindToController: true,
            controller: controller
        };
        
        return directive;
        
        function controller(inhouseService) {
            var vm = this;
            
            vm.confirmed = false;
            vm.validatePlayer = validatePlayer;
            vm.removePlayer = removePlayer;
            vm.confirmedSummoner = {};
            vm.errorMessage = "";
            
            function validatePlayer(player) {
                if(!player.name) {
                    return;
                }
                
                vm.errorMessage = "";
                
                inhouseService.addPlayer(player.name).then(function(player) {
                    vm.player.id = player.id;
                    vm.player.name = player.name;
                    vm.player.rank = player.rank;
                    vm.player.region = player.region;
                    
                    vm.confirmed = true;
                }, function(error) {
                    vm.errorMessage = error;
                });
            }
            
            function removePlayer(player) {
                inhouseService.removePlayer(player.id).then(function() {
                   vm.player.id = player.id;
                   vm.player.name = "";
                   vm.player.rank = "";
                   vm.player.region = "";
                   
                   vm.confirmed = false; 
                });
            }
        }
    }
    
})();