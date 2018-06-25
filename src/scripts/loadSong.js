var database = require("./database")
var newCounter = require("./newCounter")
var newSongNode = require("./newSongNode")
var newLoopNode = require("./newLoopNode")

var loadSong = function(song){
    document.getElementById("songDiv").innerHTML = "";                                //loads the song section

    $("#songDiv").append($("<section></section>").attr("id", "songCounter"), $("<br>"))
    $("#songCounter").width("100%")
    $("#songCounter").height("100%")

    for(let i = 0; i < song.length; i++){
        document.getElementById("songCounter").appendChild(newCounter(i));
    }

    for(let i = 0; i < song.loops.length; i++){
        let a = document.createElement("div");
        a.id = `songLoop${i}`
        for(let j = 0; j < song.length; j++){
            a.appendChild(newSongNode(i, j))
        }
        document.getElementById("songDiv").appendChild(a)
    }

    //time to load the loop section

    document.getElementById("loopDiv").innerHTML = `<div id="loopCounter"></div>
    <hr>`

    let holder = document.createElement("div");
    holder.height = "50px"
    holder.width = "250px"

    document.getElementById("loopCounter").appendChild(holder);

    for(let i = 0; i < song.loops[0].length; i++){
        let a = newCounter("ok");
        a.id = `loopCounter${i}`
        document.getElementById("loopCounter").appendChild(a);
    }

    for(let i = 0; i <song.loops[0].tracks.length; i++){
        let myDiv = document.createElement("div")
        myDiv.id = `loopTrack${i}`
        let textHolder = holder;
        let text = document.createElement("p")
        text.textContent = song.loops[0].tracks[i].soundName;
        textHolder.appendChild(text);
        myDiv.appendChild(textHolder);
        for(let j = 0; j< song.loops[0].tracks.length; j++){
            myDiv.appendChild(newLoopNode(i, j))
        }

        document.getElementById("loopDiv").appendChild(myDiv);
    }


}

module.exports = loadSong