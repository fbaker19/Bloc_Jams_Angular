(function(){
    function SongPlayer(){
        var SongPlayer = {};
        
        var currentSong = null;
        var currentBuzzObject = null;
        
        SongPlayer.play = function(songs){
            if(currentSong !== songs){
                if(currentBuzzObject){
                    currentBuzzObject.stop();
                }
            }
            
            
            currentBuzzObject = new buzz.sound(songs.audioUrl, {
                formats:['mp3'],
                preload:true
            });
            
            currentSong = songs;
            currentBuzzObject.play();
        };
        
        return SongPlayer;
    }
    
    angular
        .module('blocJams')
        .factory('SongPlayer', SongPlayer);
    
})();