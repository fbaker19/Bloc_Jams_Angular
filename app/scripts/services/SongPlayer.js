(function(){
    function SongPlayer(Fixtures){
        /*@desc: returned object (depends on following functions/conditions)
          @type: {Object}
        */
        var SongPlayer = {};
        
        /*
        @desc: variable that holds the public var Fixtures.getalbum
        @type: private;
        */
        var currentAlbum = Fixtures.getAlbum();
        
        /*@desc: gets index of songs from the current playinng albumm
          @param: songs
          @type: method
        */
        var getSongIndex = function(songs){
            return currentAlbum.songs.indexOf(songs);
        };
         /*@desc: captures songs object
          @type: public {Object}
        */
        SongPlayer.currentSong = null; 
        
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
            if(currentBuzzObject){//if there is an obj
                currentBuzzObject.stop();//stop audio obj
                SongPlayer.currentSong.playing = null;//set current obj to null
            }
            //else set obj
            currentBuzzObject = new buzz.sound(songs.audioUrl, {
                formats:['mp3'],
                preload:true
            });
            
            SongPlayer.currentSong = songs;
            
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
            songs = songs || SongPlayer.currentSong; // album view ||playBar conditions
            if(SongPlayer.currentSong !== songs){
                setSong(songs);
                playSong(songs);
            }else if(SongPlayer.currentSong === songs){
                if(currentBuzzObject.isPaused()){
                    playSong(songs);
                }
            }   
        };
        
          /* @function: public SongPlayer.pause
          @desc: pauses currently playing songs, sets song playing to false,resets current song to null
          @type: {Object} songs
        */
        SongPlayer.pause = function(songs){
            songs = songs || SongPlayer.currentSong; // album View || playBar conditions
            currentBuzzObject.stop();
            songs.playing = false;
            SongPlayer.currentSong.playing = null;            
        };
        
         /* @function: public SongPlayer.previous
          @desc: plays previous song by derementing the song index by -1 
                - if at 1st song/beginning stop song from playing,
                -else decrement
          @type: {Object} songs
        */
        SongPlayer.previous = function(){
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex--;
            
            if(currentSongIndex < 0){
                currentBuzzObject.stop();
                SongPlayer.currentSong.playing = null;
            }else{
                var song = currentAlbum.songs[currentSongIndex];
                setSong(song);
                playSong(song);
            }
        };
        
     /*    @function: public SongPlayer.next
          @desc: pauses currently playing songs, sets song playing to false,resets current song to null
          @type: {Object} songs
    */
        
        SongPlayer.next = function(){
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex++;
            
            if(currentSongIndex < 0){
                currentBuzzObject.stop();
                SongPlayer.currentSong.playing = null;
            }else{
                var song = currentAlbum.songs[currentSongIndex];
                setSong(song);
                playSong(song);
            }
        };
        
        return SongPlayer;
    }
    
    angular
        .module('blocJams')
        .factory('SongPlayer', SongPlayer);
})();