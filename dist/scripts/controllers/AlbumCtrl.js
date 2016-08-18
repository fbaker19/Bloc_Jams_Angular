(function(){
    function AlbumCtrl(Fixtures){
        this.albumData = Fixtures.getAlbum();
      //this.albumData = angular.copy(albumPicasso);   
       // console.log(this.albumData);
    }
    
    angular
        .module('blocJams')
        .controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);
 })();
 // console.log(albumData);