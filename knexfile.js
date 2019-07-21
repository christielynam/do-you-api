config = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/do_you',
    migrations: {
      directory: './migrations'
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
    directory: './migrations'
  },
  useNullAsDefault: true,
  },  
}

module.exports = config
