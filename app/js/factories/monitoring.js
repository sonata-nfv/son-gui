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
            		url:$rootScope.apis.gatekeeper.records_url,
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
