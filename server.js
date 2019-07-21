const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const bodyParser = require('body-parser')
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const db = require('knex')(configuration);

app.locals.title = 'Do You'

app.set('port', process.env.PORT || 3001)
app.use(express.json())
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'client/build')));

// login user
app.post('/api/v1/users', (request, response) => {
  request.body.email = request.body.email.toLowerCase()
  const { email, password } = request.body
  db('users').where({ email, password }).select()
    .then((users) => {
      if(!users.length) {
        return response.status(404).json({ error: 'Invalid email or password' })
      }
      const user = {id: users[0].id, name: users[0].name, email: users[0].email}
      response.status(200).json(user);
    })
});

// create a new user
app.post('/api/v1/users/new', (request, response) => {
  request.body.email = request.body.email.toLowerCase()
  const { name, email, password } = request.body
  if (!name || !email || !password) {
    return response.status(422).json({ error: 'Missing required information to complete request' })
  }

  db('users').insert({ name, email, password }, '*')
    .then((users) => {
      const user = {id: users[0].id, name: users[0].name, email: users[0].email}
      response.status(201).json(user);
    })
})

// storing the test id in results table
app.post('/api/v1/results', (request, response) => {
  const { test_id, deck_id, user_id } = request.body
  if (!test_id || !deck_id || !user_id) {
    return response.status(422).json({ error: 'Missing required information to complete request' })
  }
  db('results').insert({ test_id, deck_id, user_id }, '*')
    .then((results) => {
      response.status(201).json(results[0]);
    })
})

// retrieve all tests for a user
app.get('/api/v1/results/:id', (request, response) => {
  db('results').where({
    user_id: parseInt(request.params.id)
  }).select()
    .then((userResults) => {
      if (!userResults.length) {
        return response.status(404).json({ error: 'No assessments for this user were found' })
      }
      response.status(200).json(userResults);
    })
})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`)
})