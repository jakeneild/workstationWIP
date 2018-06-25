var database = require("./database")
var newSong = require("./newsong")
var loadSong = require("./loadSong")

if(localStorage.getItem("songster") !== null){
    loadDatabase()
}

if(database.songs.length > 0){
    loadSong(database.songs[0]);
} else {
    let a = newSong()
    loadSong(a);
    database.songs.push(a);
}



//dropdown menu to select song