const express = require('express');
//const bodyParser = require('body-parser');
const app = express();
//const _ = require('lodash');
const PORT = 3000

app.use(express.static('client'));
app.use(express.json())

let songs = [];
let id = 0;

//return list of all songs
app.get("/songs", function(req, res) {
    res.status(200);
    res.send(songs);
  });

//create a new song, and return new song
app.post("/songs", function(req, res) {
    const song = {id:songs.length+1, name:req.body.name};
    songs.push(song);
    res.status(200);
    res.send(song);
  });

//return a song with id 
app.get("/songs/:id", function(req, res) {
    const songid = req.params.id;
    console.log(`incoming song id: ${songid}`);
    const song = songs.find(song => parseInt(songid) === song.id);
    res.status(200);
    res.json(song);
});


//edit a song with id, and return edited song
app.put("/songs/:id", function(req, res) {
    const songid = req.params.id;
    const newsongname = req.body.name;
    const newsong = {id:songid, name:newsongname};
    songs = songs.map(song => 
        {
            if(song.id===parseInt(songid)) {
                return newsong;
            } else return song;
        });
    res.status(201);
    res.json(newsong);
});

//delete a song with id, and return deleted song
app.delete("/songs/:id", function(req, res) {
    const songid = req.params.id;
    const deletedSong = songs.find(song => parseInt(songid) === song.id);
    songs = songs.filter(song => {
        return song.id !== parseInt(songid)
    });
    res.status(200);
    res.json(deletedSong);
});

app.listen(PORT);
console.log(`Server listening on port ${PORT}`);

//{"name":"XXXX"}