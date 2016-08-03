(function(){
    function AlbumCtrl(){
         this.albumData = [];
         this.albumData.push(angular.copy(albumPicasso));
       // this.albumData = angular.copy(albumPicasso);     
    }
    
    angular
        .module('blocJams')
        .controller('AlbumCtrl', AlbumCtrl);
 })();
 // console.log(albumData);