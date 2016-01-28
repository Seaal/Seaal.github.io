(function() {
    
    angular
        .module("eloHeaven")
        .controller("inhouseController", InhouseController);
        
    function InhouseController($scope, inhouseService) {
        var vm = this;
        
        vm.playersPerTeam = 5;
        vm.blueTeamPlayers = [];
        vm.redTeamPlayers = [];
        vm.balanceTeams = balanceTeams;
        vm.allConfirmed = false;
        vm.balancing = false;
        
        activate();
        
        function activate() {
            for(var i=0;i<vm.playersPerTeam;i++) {
                vm.blueTeamPlayers.push({
                    name: "",
                    status: "empty"
                });
                
                vm.redTeamPlayers.push({
                    name: "",
                    status: "empty"
                });
            }
            
            $scope.$watch(angular.bind(vm, function() {
                return this.blueTeamPlayers;
            }), watchNoPlayersConfirmed(vm.redTeamPlayers), true);
            $scope.$watch(angular.bind(vm, function() {
                return this.redTeamPlayers;
            }), watchNoPlayersConfirmed(vm.blueTeamPlayers), true);
            
            function watchNoPlayersConfirmed(otherTeam) {
                var watchFunction = function(newValue) {
                    if(!newValue) {
                        return;
                    }
                    
                    var playersConfirmed = 0;
                    
                    for(var i=0;i<newValue.length;i++) {
                        if(newValue[i].status == "confirmed") {
                            playersConfirmed++;
                        }
                    }
                    
                    for(var i=0;i<otherTeam.length;i++) {
                        if(otherTeam[i].status == "confirmed") {
                            playersConfirmed++;
                        }
                    }
                    
                    vm.allConfirmed = playersConfirmed == vm.playersPerTeam * 2;
                }
                
                return watchFunction;
            }
        }
        
        function balanceTeams() {
            inhouseService.balanceTeams(vm.blueTeamPlayers, vm.redTeamPlayers).then(function(swaps) {
                for(var i=0; i < vm.playersPerTeam; i++) {
                for(var j=0; j < swaps.blueTeam.length; j++) {
                        vm.blueTeamPlayers[i].status = "swapping";
                        continue;
                    }
                }
                
                vm.blueTeamPlayers[i].status = "locked";
            }
            
            for(var i=0; i < vm.playersPerTeam; i++) {
                for(var j=0; j < swaps.redTeam.length; j++) {
                        vm.redTeamPlayers[i].status = "swapping";
                        continue;
                    }
                }
                
                vm.redTeamPlayers[i].status = "locked";
            }
            
            vm.balancing = true;
            });          
        }
    }
    
})();