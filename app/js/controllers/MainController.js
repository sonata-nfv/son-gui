SonataApp.controller('MainController',['$rootScope','$scope','$routeParams', '$location', '$http',function($rootScope,$scope, $routeParams, $location, $http) {
		console.log('MainController');
		
		
		
		/*$scope.apis.monitoring = 'http://sp.int2.sonata-nfv.eu:8000/api/v1/prometheus/metrics/data';*/
		
		$scope.todos = new Array();


		 $scope.getServices = function(){

            console.info('Get Enviroment variables call started.');
             $http({
                method  : 'GET',
                url     : 'variables.php',
                headers : { 'Content-Type': 'application/json' }
               })
                .success(function(data) {
                  
                  console.info('Enviroment variables received');
                  //console.log(data);

                  $scope.configuration = {
                  	'logs_range':'86400' //time range (minutes before)
                  }

                  $scope.apis = {
						'monitoring':'http://'+data.MON_URL+'/api/v1/prometheus/metrics/data',
						'logs':'http://'+data.LOGS_URL+'/search/universal/relative?',
						'vims':'http://'+data.VIMS_URL+'/vims',
						'gatekeeper':{
							'services':'http://'+data.GK_URL+'/services',
							'packages':'http://'+data.GK_URL+'/packages',
							'functions':'http://'+data.GK_URL+'/functions',
							'requests':'http://'+data.GK_URL+'/requests',

						}
					}
				


					$rootScope.apis = $scope.apis;

                })
                .error(function(data){
                    console.error('Get Enviroment variables Failed.');
                })
           }


     if(typeof $rootScope.apis )
        $scope.getServices();

		
    var debug=true;
   	if(debug==false && $rootScope.resp!=1){
			location.hash='/login';
		}else {
			$rootScope.is_user_logged_in = true;
		}


         
            


    $scope.changeHash = function(newHash){
    	location.hash = newHash;
    }

	$rootScope.checkIfFilesAreThere = function(){

		return 1;	
	}         
    

    }]);


