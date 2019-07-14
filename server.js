const express = require('express')
const app = express()

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const db = require('knex')(configuration);

app.use(express.json())
app.use(cors())

app.locals.title = 'Do You'

app.set('port', process.env.PORT || 3001)

app.get('/', (request, response) => {
  response.send('Hello DO YOU');
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`)
})