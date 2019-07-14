exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => {
      // Inserts seed entries
      return knex('users').insert([
        {
          name: 'Christie Lynam',
          email: 'christielynam@gmail.com',
          password: 'llamas'
        },
        {
          name: 'Bradley Cooper',
          email: 'bcoop@gmail.com',
          password: 'penguins'
        }
      ]);
    })
    .catch(error => console.log(`Error seeding data: ${error}`))
};
