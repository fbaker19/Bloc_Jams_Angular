(function(){
    function timecode(){
        return function(seconds){
           
            var seconds = Number.parseFloat(seconds);  //parse/reads as float
            
            if(Number.isNaN(seconds)){
                return '-:--';
            }
            
            var wholeSeconds = Math.floor(seconds);  // round down to nearest whole #
            var minutes = Math.floor(wholeSeconds / 60);  //divides seconds into min (and rounds down if necessary) - ex. 240 sec/60 = 4 min
            var remainingSeconds = wholeSeconds % 60;  //remainder seconds -  ex 244 sec % 60=  4 sec 
            
            var output = minutes + ":";
            
            if(remainingSeconds < 10){
                output +='0';   //concatenate 0 to remaining sec - ex '4' -> '04'
            }
            output += remainingSeconds; //concatenate remaining seconds 4:04
            
            return output;
        };
    }
    
    
    angular
        .module('blocJams')
        .filter('timecode', timecode);

})();