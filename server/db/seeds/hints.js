/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('hints').del()
  await knex('hints').insert([
    { id: 1, level_id: 1, text: 'Look in the mirror' },
    { id: 2, level_id: 2, text: 'an even number' },
    { id: 3, level_id: 3, text: 'wow' },
  ])
}
