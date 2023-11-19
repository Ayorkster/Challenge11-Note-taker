const express = require('express');
const path = require('path');
const app = express();
const genId = require('generate-unique-id');
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

let notes = [];

//Get route for Notes page
app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/notes.html'))
    );

app.get('/api/notes', (req, res) => {
        res.json(notes);
      });
      
app.post('/api/notes', (req, res) => {
        const newNote = req.body;
        newNote.id = genId();
        notes.push(newNote);
        res.json(newNote);
      
      });


app.listen(PORT, () =>
    console.log(`App Listening at http://localhost:${PORT}`));