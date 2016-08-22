(function(){
    function AlbumCtrl(Fixtures, SongPlayer){
        this.albumData = Fixtures.getAlbum();
        this.songPlayer = SongPlayer;
      //this.albumData = angular.copy(albumPicasso);   
       // console.log(this.albumData);
    }
    
    angular
        .module('blocJams')
        .controller('AlbumCtrl', ['Fixtures', 'SongPlayer', AlbumCtrl]);
 })();
 // console.log(albumData);