/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      id: 1,
      username: 'Jesse',
      current_level_id: 0,
      time: 0,
      complete: true,
      active_player: false,
    },
    {
      id: 2,
      username: 'Gabby',
      current_level_id: 0,
      time: 0,
      complete: true,
      active_player: false,
    },
    {
      id: 3,
      username: 'Tayla',
      current_level_id: 0,
      time: 0,
      complete: true,
      active_player: false,
    },
  ])
}
