
exports.up = function(knex, Promise) {
   return knex.schema.createTable('users', function(t) {
    //     t.increments('id').unsigned().primary();
    //     t.dateTime('createdAt').notNull();
    //     t.dateTime('updatedAt').nullable();
    //     t.dateTime('deletedAt').nullable();

    //     t.string('username').notNull();
    //     t.text('password').nullable();
    //     t.decimal('price', 6, 2).notNull();
    //     t.enum('category', ['apparel', 'electronics', 'furniture']).notNull();
    // });
};

exports.down = function(knex, Promise) {
  
};
