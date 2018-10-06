// 5 Stations each with picture image background, on hover you get a Play Button
//on click you get webplayer loads
//Audio Level

//Stations, Name of Station, title, artist,
var radio = {
  currentStation: 'iHeart90s',
  stations:  [
    {
    name: 'iHeart90s',
    songs: [
     {
    title: 'Blaze of Glory',
     artist: 'Jon Bon Jovi',
     songfile: 'Media/blazeofglory.mp3'
   },
     {
       title: 'Bye Bye Bye',
        artist: 'NSync',
        songfile: 'Media/byebyebye.mp3'
     },
    {
      title: 'Dreams',
       artist: 'The Cranberries',
       songfile: 'Media/dreams.mp3'
    },
    {
      title: 'Fantasy',
       artist: 'Mariah Carey',
       songfile: 'Media/fantasy.mp3'
    }
  ]
},

  {
  name: 'iHeart80s',
  songs: [
   {
     title: 'Goodbye Horses',
      artist: 'Q Lazarus',
      songfile: 'Media/goodbyehorses.mp3'
    },
    {
      title: 'Thriller',
       artist: 'Michael Jackson',
       songfile: 'Media/thriller.mp3'
    },
   {
     title: 'Africa',
      artist: 'Toto',
      songfile: 'Media/africa.mp3'
   },
   {
     title: 'Tainted Love',
      artist: 'Soft Cell',
      songfile: 'Media/taintedlove.mp3'
   }
 ]
},
{
name: 'Soft-Rock',
songs: [
 {
   title: 'Head Over Heels',
    artist: 'Tears for Fears',
    songfile: 'Media/headoverheels.mp3'
  },
  {
    title: 'How to Save a Life',
     artist: 'The Fray',
     songfile: 'Media/savealife.mp3'
  },
 {
   title: 'Pictures of You',
    artist: 'The Cure',
    songfile: 'Media/picsofyou.mp3'
 },
 {
   title: 'Poker Face',
    artist: 'Lady Gaga',
    songfile: 'Media/pokerface.mp3'
 }
]
},
{
name: 'Gen-X-Radio',
songs: [
 {
   title: 'Losing My Religion',
    artist: 'REM',
    songfile: 'Media/losingmy.mp3'
  },
  {
    title: 'Wannabe',
     artist: 'Spice Girls',
     songfile: 'Media/wannabe.mp3'
  },
 {
   title: 'Closing Time',
    artist: 'Semisonic',
    songfile: 'Media/closingtime.mp3'
 },
 {
   title: 'Jeremy',
    artist: 'Pearl Jam',
    songfile: 'Media/jeremy.mp3'
 }
]
},
{
name: 'Rock-Nation',
songs: [
 {
   title: 'One Armed Scissor',
    artist: 'At The Drive In',
    songfile: 'Media/onearmscissor.mp3'
  },
  {
    title: 'Interstate 8',
     artist: 'Modest Mouse',
     songfile: 'Media/interstate8.mp3'
  },
 {
   title: 'Roulette Dares',
    artist: 'The Mars Volta',
    songfile: 'Media/roulettedares.mp3'
 },
 {
   title: 'The Backyard',
    artist: 'Miracle Legion',
    songfile: 'Media/thebackyard.mp3'
 }
]
}
],
changeStation: function(){
  var station = this.stations [Math.floor(Math.random() * this.stations.length)]; // rounding to whole integer, selecting random number from stations
  if (station != this.currentStation) {
  var song = station.songs [Math.floor(Math.random() * station.songs.length)]; // rounding to whole integer, selecting random number from songs
  // console.log(station.name);
  $('#Logo').css('background-image', 'url('+`Media/${station.name}.png`+')');
  // console.log(`Media/${station.name}.png`);
  $('#Title').text(song.title);
  $('#Artist').text(song.artist);
  console.log(song.title);
  this.currentStation = station;
    } else {
      this.changeStation();
    }
  }
};
radio.changeStation();
