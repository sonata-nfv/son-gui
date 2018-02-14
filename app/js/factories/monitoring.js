SonataApp.factory('Monitoring', function($http,$rootScope){
    
        return{
            getData:function(url){
                return $http({
                    url:url,
                    method:'GET'
                })
            },
            getRecords:function(){
            	return $http({
            		url:'https://sp.int3.sonata-nfv.eu/api/v2/records/functions',
            		method:'GET',
                    params:{
            		    'offset':0,
                        'limit':10000
                    },
            		headers : $rootScope.getGKHeaders()
            	})
            }                      
        }
       
});
