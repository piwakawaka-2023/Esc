/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('answers').del()
  await knex('answers').insert([
    { id: 1, text: 'answer 1' },
    { id: 2, text: 'answer 2' },
    { id: 3, text: 'answer 3' },
  ])
}
