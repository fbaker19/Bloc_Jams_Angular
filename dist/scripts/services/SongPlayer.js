(function(){
    function SongPlayer(){
        /*@desc: returned object (depends on following functions/conditions)
          @type: {Object}
        */
        var SongPlayer = {};
        
         /*@desc: captures songs object
          @type: {Object}
        */
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
           console.log(typeof(currentSong));
            
        };
        
          /*
            @function: playSong
            @desc: plays currently paused/stopped song and sets boolean to true
            @param: {object} songs
        */
         var playSong = function(songs){
            currentBuzzObject.play();
            songs.playing = true;// referenced in album.html
        };
        
         /* @function: public SongPlayer.play
          @desc: playes newly set songs as well as paused/previousle played songs
          @type: {Object} songs
        */
        SongPlayer.play = function(songs){
            if(currentSong !== songs){
                setSong(songs);
                playSong(songs);
            }else if(currentSong === songs){
                if(currentBuzzObject.isPaused()){
                    currentBuzzObject.play();
                }
            }
        };
        
          /* @function: public SongPlayer.pause
          @desc: pauses currently playing songs
          @type: {Object} songs
        */
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