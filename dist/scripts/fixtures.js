var albumPicasso = {
     title: 'The Colors',
     artist: 'Pablo Picasso',
     label: 'Cubism',
     year: '1881',
     albumArtUrl: 'assets/images/album_covers/01.png',
     songs: [
         {title: 'Blue', duration: '161.71', audioUrl:'assets/music/blue'},
         {title: 'Green', duration: '103.96', audioUrl:'assets/music/green'},
         {title: 'Red', duration: '268.45', audioUrl:'assets/music/red'},
         {title: 'Pink', duration: '153.14', audioUrl:'assets/music/pink'},
         {title: 'Magenta', duration: '374.22', audioUrl:'assets/music/magenta'}
     ]
};

 var albumMarconi = {
     title: 'The Telephone',
     artist: 'Guglielmo Marconi',
     label: 'EM',
     year: '1909',
     albumArtUrl: 'assets/images/album_covers/20.png',
     songs: [
         {title: 'Hello, Operator?', duration: '1:01' },
         {title: 'Ring, ring, ring', duration: '5:01' },
         {title: 'Fits in your pocket', duration: '3:21'},
         {title: 'Can you hear me now?', duration: '3:14' },
         {title: 'Wrong phone number', duration: '2:15'}
     ]
 };

 var albumPrince = {
     title: 'Purple Rain',
     artist: 'Prince',
     label: 'Warner Bros.',
     year: '1985',
     albumArtUrl: 'assets/images/album_covers/PurpleRain.png',
     songs: [
         {title: 'When Doves Cry', duration: '5:54'},
         {title: 'Let\'s Go Crazy', duration: '4:39'},
         {title: 'Purple Rain', duration: '8:41'},
         {title: 'I Would Die 4 U', duration: '2:49'},
         {title: 'Beautiful Ones', duration: '5:13'},
         {title: 'Computer Blue', duration: '3:59'},
         {title: 'Darling Nikki', duration: '4:14'},
         {title: 'Baby I\'m a Star', duration: '4:24'},
         {title: 'Take Me with U', duration: '3:54'}
     ]
 };



/*  var albums = [albumPicasso, albumMarconi, albumPrince];
var index = 1; //declare outside, so state is remembered

 albumImage.addEventListener("click", function(event){
   setCurrentAlbum(albums[index]) 
   index++;
     if(index == albums.length){
         index = 0;
     }
 });*/