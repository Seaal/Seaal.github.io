(function() {
    
    angular
        .module("eloHeaven.inhouses")
        .factory("inhouseService", inhouseService);
        
    function inhouseService($q, $timeout) {
        return {
            addPlayer: addPlayer,
            removePlayer: removePlayer
        };
        
        function addPlayer(playerName) {
            var deferred = $q.defer();
            
            $timeout(function() {
                
                if(playerName != "Seaal") {
                    deferred.resolve({
                        id: 1,
                        name: playerName,
                        rank: "Silver III",
                        region: "NA"
                    });
                }
                else {
                    deferred.reject("Player was not found.");
                }
            }, 500);
            
            return deferred.promise;
        }
        
        function removePlayer(playerId) {
            var deferred = $q.defer();
            
            $timeout(function() {
                deferred.resolve();
            }, 100);
            
            return deferred.promise;
        }
    }
    
})();