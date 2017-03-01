
exports.up = function(knex, Promise) {
  return Promise.all([
   knex.schema.createTable('users', function(t) {
        t.increments('id').unsigned().primary();
        t.dateTime('createdAt').notNull();
        t.dateTime('updatedAt').nullable();
        t.dateTime('deletedAt').nullable();

        t.string('username').notNull();
        t.text('password').nullable();
        t.string('email');
        t.timestamps();
    });
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users')
    ])
};
