const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const https = require('https');
const fs = require('fs');
const app = express();
const options = {
  cert: fs.readFileSync('./sslcert/fullchain.pem'),
  key: fs.readFileSync('./sslcert/privkey.pem')
};
app.use(require('helmet')());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static('static'));

let movies = [
  {
    id: 0,
    title: 'The Lion King',
    status: 'owned',
    type: 'movie',
    medium: 'Blu Ray',
    info: 'Best movie ever',
    updatedAt: 1519854581195
  },
  {
    id: 1,
    title: 'What About Bob?',
    status: 'owned',
    type: 'movie',
    medium: 'DVD',
    info: 'Hilarious',
    updatedAt: 1519854581195
  },
  {
    id: 2,
    title: 'Hercules',
    status: 'owned',
    type: 'movie',
    medium: 'DVD',
    info: 'Love the sass',
    updatedAt: 1519854581195
  },
  {
    id: 3,
    title: 'Enchanted',
    status: 'owned',
    type: 'movie',
    medium: 'Blu Ray',
    info: 'A magical journey',
    updatedAt: 1519854581195
  },
  {
    id: 4,
    title: 'Glory Road',
    status: 'owned',
    type: 'movie',
    medium: 'DVD',
    info: 'Great sports movie',
    updatedAt: 1267306868000
  }
];

let nextId = 5;

app.get('/movies', function (req, res) {
  res.send({movies: movies})
});

app.post('/movies', function (req, res) {
  let body = req.body;
  let movie = body.movie;
  if (!movie) {
    res.status(400).send({message: 'movie param is required'})
  }
  if (!movie.title) {
    movie.title = 'Movie ' + nextId;
  }
  movies.push(movie);
  nextId++;

  res.send({movies: movies})
});

app.delete('/movies/:id', function (req, res) {
  let id = req.params.id;
  let index = movies.map(m => {return m.id}).indexOf(parseInt(id));
  if (index > -1) {
    movies.splice(index, 1);
    return res.send({movies: movies});
  } else {
    return res.status(404).send({message: 'Movie with id ' + id + 'not found'});
  }
});

app.put('/movies/:id', function (req, res) {
  let id = req.params.id;
  let movie = req.body.movie;
  if (!movie) {
    return res.status(400).send({message: "movie param is required"})
  }
  let index = movies.map(m => {return m.id}).indexOf(parseInt(id));
  if (index > -1) {
    movies[index] = movie;
    return res.send({movies: movies});
  } else {
    return res.status(404).send({message: 'Movie with id ' + id + 'not found'});
  }
});

// app.listen(3000, () => console.log('Server listening on port 3000!'));
https.createServer(options, app).listen(3444);

