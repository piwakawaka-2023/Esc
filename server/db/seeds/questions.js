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
      question: 'The abbreviation OS Computer usually means ?',
      answer1: 'Order of Significance',
      answer2: 'Operating System',
      answer3: 'Open Software',
      answer4: 'Optical Sensor',
      correct: 'Operating System',
    },
    {
      id: 2,
      question: 'Where would you be if you were standing on the Spanish Steps?',
      answer1: 'Milan',
      answer2: 'Rome',
      answer3: 'Italy',
      answer4: 'Spain',
      correct: 'Spain',
    },
    {
      id: 3,
      question: 'How many elements are in the periodic table?',
      answer1: '70',
      answer2: '118',
      answer3: '103',
      answer4: '95',
      correct: '118',
    },
    {
      id: 4,
      question: 'What is the only continent with land in all four hemispheres?',
      answer1: 'Africa',
      answer2: 'Asia',
      answer3: 'Antartica',
      answer4: 'South America',
      correct: 'Africa',
    },
  ])
}

//PIN 2421
