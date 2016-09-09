(function(){
    function SongPlayer(){
        var SongPlayer = {};
        
        var currentSong = null;
        
        /*@desc: Buzz object audio file
          @type: {Object}
        */
        var currentBuzzObject = null;
        
        /*
            @function: setSong
            @desc: stops currently playing song and loads new audio file as currentBuzzObject
            @param: {object} songs
        */
        var setSong = function(songs){
            if(currentBuzzObject){
                currentBuzzObject.stop();
                currentSong.playing = null;
            }
            
            currentBuzzObject = new buzz.sound(songs.audioUrl, {
                formats:['mp3'],
                preload:true
            });
            
            currentSong = songs;
        };
        
        SongPlayer.play = function(songs){
            if(currentSong !== songs){
                setSong(songs);
                currentBuzzObject.play();
                songs.playing = true;// referenced in album.html
            }else if(currentSong === songs){
                if(currentBuzzObject.isPaused()){
                    currentBuzzObject.play();
                }
            }
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