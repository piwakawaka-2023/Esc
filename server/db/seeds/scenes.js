/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('scenes').del()
  await knex('scenes').insert([
    { id: 1, level_id: 1, text: 'hello' },
    { id: 2, level_id: 2, text: 'wow' },
    { id: 3, level_id: 3, text: 'cool' },
  ])
}
