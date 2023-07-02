/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('questions').del()
  await knex('questions').insert([
    {
      id: 1,
      text: 'Where are you from?',
      answer1: 'answer1',
      answer2: 'answer2',
      answer3: 'answer3',
      answer4: 'answer4',
      correct: 'answer2',
    },
    {
      id: 2,
      text: 'Why are you here?',
      answer1: 'answer1',
      answer2: 'answer2',
      answer3: 'answer3',
      answer4: 'answer4',
      correct: 'answer4',
    },
    {
      id: 3,
      text: 'When did you get here?',
      answer1: 'answer1',
      answer2: 'answer2',
      answer3: 'answer3',
      answer4: 'answer4',
      correct: 'answer2',
    },
    {
      id: 4,
      text: 'Who are you?',
      answer1: 'answer1',
      answer2: 'answer2',
      answer3: 'answer3',
      answer4: 'answer4',
      correct: 'answer1',
    },
  ])
}

//PIN 2421
