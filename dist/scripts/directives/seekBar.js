(function(){
    function seekBar($document){
        
        //Calculates the horizontal percent along the seek bar where the event (passed in from the view as $event) occurred.        
       var calculatePercent = function(seekBar, event) {
             var offsetX = event.pageX - seekBar.offset().left;
             var seekBarWidth = seekBar.width();
             
             var offsetXPercent = offsetX / seekBarWidth;
             
             offsetXPercent = Math.max(0, offsetXPercent);
             offsetXPercent = Math.min(1, offsetXPercent);
             
             return offsetXPercent;
         };

        return {
            templateUrl: '/templates/directives/seek_bar.html',
            replace: true, // what template dould replace: true - the directives element, false - the CONTENTS of the directives element
            restrict: 'E', //declararion style 'E'=element, 'A'=attribute, 'C'=class, 'M'=comment
            scope: {
                // Type of directive scope binding. The three types of directive scope bindings ( @, =, and & ) allow us to treat the value of the given attribute differently. The '&' binding type provides a way to execute an expression in the context of the parent scope.
                onChange:'&'
                
            }, //Specifies that a new scope be created for the directive.
           
            //Responsible for registering DOM listeners and updating the DOM. This is where we put most of the directive logic.
            link: function(scope, element, attributes){ 
               scope.value = 0;
               scope.max = 100;
            
            // Holds the element that matches the directive (<seek-bar>) as a jQuery object so we can call jQuery methods on it.
               var seekBar = $(element);
                               
                attributes.$observe('value', function(newValue){
                    scope.value = newValue;
                });
                
                attributes.$observe('max', function(newValue){
                    scope.max = newValue;
                });
          
                
               var percentString = function(){
                    var value = scope.value;
                    var max = scope.max;
                    var percent = value / max * 100;
                   return percent + '%';
               };   
                
                scope.fillStyle = function(){//global
                    return{
                        width: percentString()
                    };
                };
                
                scope.thumbStyle = function(){//global
                    return{
                       left: percentString()
                    };
                };
                
                scope.onClickSeekBar = function(event) {
                    var percent = calculatePercent(seekBar, event);
                    scope.value = percent * scope.max;
                    notifyOnChange(scope.value);
                };

               
               scope.trackThumb = function() {
                 $document.bind('mousemove.thumb', function(event) {
                     var percent = calculatePercent(seekBar, event);
                     
                     scope.$apply(function() {
                         scope.value = percent * scope.max;
                         notifyOnChange(scope.value);
                     });
                 });

                 $document.bind('mouseup.thumb', function() {
                     $document.unbind('mousemove.thumb');
                     $document.unbind('mouseup.thumb');
                 });
             };
                
                var notifyOnChange = function(newValue){
                    if(typeof scope.onChange === 'function'){
                        scope.onChange({value: newValue});
                    }
                };
            }//link
        };// return
    }//seekbar
    angular
        .module('blocJams')
        //With Angular, $document must be injected as a dependency 
        .directive('seekBar', ['$document', seekBar]);
})();