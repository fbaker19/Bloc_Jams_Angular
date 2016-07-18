(function(){
    function config($stateProvider, $locationProvider){
        $locationProvider
            .html5Mode({
                enabled:true,
                requireBase:false
                //enabled:true - disables hashbang mode ex localhost:3000/#!/album
            });
        
        $stateProvider
            .state('landing',{
                url:'/',
                templatUrl:'../templates/landing.html'
            })

            .state('album',{
                url:'/album',
                templateUrl:'../templates/album.html'
            });
    
    }
    
    angular
    .module('blocJams',['ui.router'])
    .config(config);
    
})();