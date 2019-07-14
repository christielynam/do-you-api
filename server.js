const express = require('express')
const app = express()
const cors = require('cors')
const passport = require('passport')

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const db = require('knex')(configuration);

app.use(express.json())
app.use(cors())

app.locals.title = 'Do You'

app.set('port', process.env.PORT || 3001)

// app.get('/', (request, response) => {
//   response.send('Hello DO YOU');
// });

// login user
app.post('/api/v1/users', (request, response) => {
  const { email, password } = request.body
  email = email.toLowerCase()
  
  db('users').where({ email, password }).select()
    .then((users) => {
      if(!users.length) {
        return response.status(404).json({ error: 'Invalid email or password' })
      }
      response.status(200).json(users);
    })
    .catch((error) => {
      response.status(500).json({ error });
    });
});

// create a new user
app.post('/api/v1/users/new', (request, response) => {
  const { name, email, password } = request.body
  email = email.toLowerCase()

  if (!name || !email || !password) {
    return response.status(422).json({ error: 'Missing required information to complete request' })
  }

  db('users').insert({ name, email, password }, '*')
    .then((users) => {
      response.status(200).json(users);
    })
    .catch((error) => {
      response.status(500).json({ error });
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
      response.status(200).json(results);
    })
    .catch((error) => {
      response.status(500).json({ error })
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
    .catch((error) => {
      response.status(500).json({ error });
    });
})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`)
})