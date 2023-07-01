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
      text: "hey, Cheers for sticking back to finish up the app deploy! Please dont forget to turn off the lights and close down before you lock up for the night. Also, the elevator repair guys will be in tomorrow instead- so just a reminder to be careful in the elevator! not that you'll have any trouble with that haha. But give me a shout if you get stuck. See you tomorrow for the teams meeting!",
      final: true,
      slack:
        "3:49 PM, Not everyone is a guy, 'guys' is a gendered pronoun. We recommend an alternative like 'crew'. We appreciate your help in building an inclusive environment at Dev!",
    },
    {
      id: 2,
      level_id: 2,
      text: "hey, Just checking in that your still in the building? I left my swipe card in the basement if you're still around maybe you could grab for me? Sorry should've mentioned before you turned all the lights off. Don't mind the javascript carnival gang, they get a little restless down there. But anyways let me know!",
      final: false,
      slack: '7:53 PM Spread love everywhere you go.',
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
