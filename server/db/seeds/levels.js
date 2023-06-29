/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('questions').del()
  await knex('questions').insert([
    { id: 1, text: 'Where are you from?' },
    { id: 2, text: 'Why are you here?' },
    { id: 3, text: 'When did you get here?' },
  ])
}
