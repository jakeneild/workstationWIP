var newSong = function(){
    songObj = {
        name: "mySong",
        tempo: 140,
        loops: [
            {
                feel: "sixteenth",
                length: 32,
                tracks: [
                    {
                        sound: "violin.mp3",
                        soundName: "Violin",
                        playlist: []
                    }
                ]
            }
        ],
        length: 64,
        canvas: []
    };

    for(let i = 0; i < 32; i++){
        songObj.loops[0].tracks[0].playlist.push(0)
    }

    for(let i = 0; i < 64; i++){
        songObj.canvas.push(0)
    }

    return songObj;
}


module.exports = newSong;