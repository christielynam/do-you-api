require('dotenv').config()
console.log(process.env.DATABASE_URL)
// const vcapServices = require('vcap_services')
// const credentials = vcapServices.findCredentials({ service: 'elephantsql' })
// console.log(credentials)
// const vcapServices = process.env.VCAP_SERVICES
// console.log(vcapServices)
// const uri = vcapServices.elephentsql[0].credentials.uri
// console.log(uri)

config = {

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
  connection: process.env.DATABASE_URL,
  migrations: {
    directory: './db/migrations'
  },
  useNullAsDefault: true,
  },  
}

module.exports = config
