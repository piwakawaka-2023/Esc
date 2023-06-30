/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('scenes').del()
  await knex('scenes').insert([
    {
      id: 1,
      level_id: 1,
      text: 'hello',
      final: true,
      slack: 'Message from Slack',
    },
    {
      id: 2,
      level_id: 2,
      text: 'wow',
      final: false,
      slack: 'Message from Slack',
    },
    {
      id: 3,
      level_id: 3,
      text: 'cool',
      final: false,
      slack: 'Message from Slack',
    },
  ])
}
