(function(){
    function SongPlayer(){
        var SongPlayer = {};
        
        var currentSong = null;
        var currentBuzzObject = null;
        
        SongPlayer.play = function(songs){
            if(currentSong !== songs){
                if(currentBuzzObject){
                    currentBuzzObject.stop();
                    currentSong.playing = null;
                }
            }
            currentBuzzObject = new buzz.sound(songs.audioUrl, {
                formats:['mp3'],
                preload:true
            });
            
            currentSong = songs;
            
            currentBuzzObject.play();
            songs.playing = true;// referenced in album.html
        };
        
        SongPlayer.pause = function(songs){
            currentBuzzObject.pause();
            songs.playing = false;
            currentSong.playing = null;
    
        };
        
        return SongPlayer;
    }
    
    angular
        .module('blocJams')
        .factory('SongPlayer', SongPlayer);
    
})();