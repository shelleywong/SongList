//as soon as the page loads, calls this function
window.onload = loadList;
var current = 0;
var allSongs = [];

//Prototype for Song objects
function Song(title,artist,album,year)
{
  this.song = title;
  this.artist = artist;
  this.album = album;
  this.year = year;
  this.toString = function(){
    return title + " by " + artist;
  }
  this.releaseInfo = function(){
    return "Released on " + album + " in " + year;
  };
  this.listened = 0;
  this.play = function(){
    this.listened++;
  };
}

//Adds new instances of songs to the list
function loadList()
{
  allSongs.push(new Song("Hey Jude","The Beatles","Let It Be",1970));
  allSongs.push(new Song("Lodi Dodi","Snoop Dogg","Doggystyle",1993));
  allSongs.push(new Song("Get Lucky","Daft Punk","Random Access Memories",2013));
  allSongs.push(new Song("Inevitable","Shakira","Dónde Están los Ladrones?",1998));
  allSongs.push(new Song("Wagon Wheel","Old Crow Medicine Show","Old Crow Medicine Show",2004));
  displaySong();
}

//Progresses to the next song to the list, or if the end of the list has been
//reached, then loop back to the beginning
//(increments "current" mod(%) arr length: always gives num between 0-4 (arr size 5))
function nextSong()
{
  current = (current+1)%allSongs.length;
  displaySong();
}

//Show song's information in the "nowPlaying" span
//toString() function in object allows this to work
function displaySong()
{
  allSongs[current].play();
  document.getElementById("nowPlaying").innerHTML = allSongs[current].toString()
    + " - " + allSongs[current].releaseInfo()
    + "<br>Number of times song played: " + allSongs[current].listened;
}
