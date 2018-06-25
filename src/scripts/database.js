var database = {
    load:
        function () {
            let databaseString = localStorage.getItem("songster")
            database = JSON.parse(databaseString);

        },
    save: function () {
        let stringifiedDatabase = JSON.stringify(database)
        localStorage.setItem("songster", stringifiedDatabase)

    },
    song: {
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
                        playlist: [1, 0, 0, 1]
                    }
                ]
            }
        ],
        length: 64,
        canvas: [
            [0, 0, 1, 0],
            [1, 0, 0, 0]
        ]
    },
    songs: []
}

module.exports = database;