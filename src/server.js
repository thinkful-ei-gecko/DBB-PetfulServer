require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { CLIENT_ORIGIN } = require('./config');
const { dogs, cats, users } = require('./Data');
const { makeArrayFromQueue } = require('./Queue');
const uuid = require('uuid');

const dogsList = dogs();
const catsList = cats();
const usersList = users();

const app = express();
const jsonBodyParser = express.json();
app.use(helmet());
app.use(
  cors({
    origin: CLIENT_ORIGIN,
  })
);

//Posts a new user
app.post('/api/users', jsonBodyParser, (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    res.status(400).send({error: 'Name is missing'})
  }
  let newUser = { name: name, id: uuid() };
  usersList.enqueue(newUser)
  res.status(200).json(newUser);
});

//Returns the entire queue as an array
app.get('/api/queue', (req, res) => {
  let list = makeArrayFromQueue(usersList);
  res.status(200).send(list);
});

//Returns the cats queue as an  object
app.get('/api/cats', (req, res) => {
  let catsQueue = makeArrayFromQueue(catsList);
  res.status(200).send(catsQueue);
});

//If name passed in request matches the value in the queue,
//dequeues the cat and the user (adoption successful)
app.delete('/api/cats', jsonBodyParser, (req, res) => {
  let id = req.headers.authorization; //The id comes in as a string, so convert to a number to execute boolean check properly
  if (id !== usersList.first.value.id) {
    return res.status(401).json({ error: 'You must wait your turn!' });
  }
  catsList.dequeue();
  usersList.dequeue();
  res.status(204).end();
});

//Returns the dog queue as an object
app.get('/api/dogs', (req, res) => {
  let dogsQueue = makeArrayFromQueue(dogsList);
  res.status(200).send(dogsQueue);
});

//If id passed in request matches the value in the queue,
//dequeues the cat and the user (adoption successful)
app.delete('/api/dogs', jsonBodyParser, (req, res) => {
  let id = req.headers.authorization;
  if (id !== usersList.first.value.id) {
    return res.status(401).json({ error: 'You must wait your turn!' });
  }
  dogsList.dequeue();
  usersList.dequeue();
  return res.status(204).end();
});

// Catch-all 404
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Catch-all Error handler
// Add NODE_ENV check to prevent stacktrace leak
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: app.get('env') === 'development' ? err : {},
  });
});

app.listen((process.env.PORT || 8080), () => {
  console.log('Serving on 8080');
});
