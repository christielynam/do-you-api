const cfenv = require('cfenv')
const appEnv = cfenv.getAppEnv()
console.log(appEnv)
const services = appEnv.getService('elephantsql')
console.log(services)
// console.log(process.env.DATABASE_URL)

// const vcap = JSON.parse(process.env.VCAP_SERVICES)
// console.log(vcap)

// const vcapServices = process.env.VCAP_SERVICES
// console.log(vcapServices)

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
