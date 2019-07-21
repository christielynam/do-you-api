// Update with your config settings.
require('dotenv').config()

// const vcap_services = JSON.parse(process.env.VCAP_SERVICES)
// const uri = vcap_services.elephentsql[0].credentials.uri
// console.log(uri)

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/do_you',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    },
    useNullAsDefault: true,
  },

  production: {
  client: 'pg',
  connection: process.env.DATABASE_URL + '?ssl=true',
  migrations: {
    directory: './db/migrations'
  },
  useNullAsDefault: true,
  },  
}
