
exports.up = function(knex) {

  return knex.schema.createTable('cars', tbl => {
      tbl.increments();
      tbl.text('VIN', 17)
        .unique()
        .notNullable();
      tbl.text('make', 20)
        .notNullable();
      tbl.text('model', 25)
        .notNullable();
      tbl.integer('mileage', 6)
        .notNullable();
      tbl.text('trans_type', 1);
      tbl.text('status', 15);

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
