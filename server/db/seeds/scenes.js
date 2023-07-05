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
      text: "Hey, Cheers for sticking back to finish up the app deployment! Please dont forget to turn off the lights and close down before you lock up for the night. Also, the elevator repair guys will be in tomorrow instead- so just a reminder to be careful in the elevator! not that you'll have any trouble with that haha. But give me a shout if you get stuck. See you tomorrow for the teams meeting!",
      final: false,
      slack:
        "Not everyone is a 'Guy'.. 'Guys' is a gendered pronoun. We recommend an alternative like 'crew'. We appreciate your help in building an inclusive environment at Dev!",
    },
    {
      id: 2,
      level_id: 3,
      text: "Me again, Just checking in that you're still in the building? I left my swipe card in the basement if you're still around maybe you could grab for me? Sorry should've mentioned before you turned all the lights off. Don't mind the javascript carnival gang, they get a little restless down there. But anyways let me know!",
      final: false,
      slack:
        'You asked me to remind you about this message from @facilitator-piwakawaka-23',
    },
    {
      id: 3,
      level_id: 4,
      text: 'Thanks so much for grabbing my swipecard! You really made quick work of handling the javascript carnival guys huh! Just a quick reminder that the whole building is locked so dont forget the building code.',
      final: false,
      slack: 'Spread love everywhere you go.',
    },
    {
      id: 4,
      level_id: 5,
      text: "Oh, you made it out of the building? Well, thats great then! uhh... i suppose we'll see you tomorrow then.",
      final: false,
      slack: ' 👍 I will remind #teams-meeting at 10:30AM tomorrow morning.',
    },
    {
      id: 5,
      level_id: 0,
      text: ' Y̷̡̧̩̬̮͓̖̓̍̅̀̂͌̕͜͝O̷̬̩̖͖̤͙͑͗̊͘͠Ụ̷̡͚̮͍̖̯̯̃̓͐̓̋̔̈́͐͜ ̶͚̦̿͗̏͑͐̓̊́̓̇W̸̛̝͇̲̑̆̌̆̀̉͒̍̔̕͠͠͝Ẻ̷͕̖͓̟̥̹͖͖͇̟͒̍̕R̴̩̤̞͈̒̋̊́̑͋̏͗͐́E̴̢̛̺͍̫̝̩̅͠N̴̨̻̣̼̆͒͋Ţ̶̧̡̭̹̘̄͐̆̓ ̵̮̦̱͙̙̲̹͔̟̆̐̾͂̈̒̉͑́̏̕͠͝Ś̴̢͚̜͖͚̯̭̗̏͛͆͘͜Ú̵̯͍̥̻̤̤͙̟̥͒͗̈́̃̃͋̾̓̈́͠͝P̶̧͛̈̔͐͛̑̚̕P̴͓̦̖̘̙͇̭̝͇͚͛͋̔̅̿̏̽̿̊͑͜͝͝O̶̡͔̦̩͓̪̱̖͂̋̿̋̔̊̇͛̅͋̆͋̀̕S̸̢͕͙̻̠̖̙̼̗͉̏͜E̸̛̥̅̍̉̋̈͌͗̅̅̂͋͠D̶̡͓͚̟͍͒̈́̅͌̂̂̌̒͝ ̷̦̠̗͎̞͗T̵̙͎̃̏̃̂͂̓̈́͌̄͝͠O̷̢͆͐̊̓̑̀́͊͑̕ ̵̠̔Ȩ̷̙̳͖̟̠̾́̍̊̍̓̓̉́S̶̨̲̫̞̞̗̻͇͙̹̠̟͙̏̉̉͗̕͜C̶̡̛̩̦͔͈̱̮̺͗̀̃̔͒̇̃̅̾̒̔̕͜S̵̬̈́̈́̊͌̎̈͌͌͋P̶̤͙͎̮̯̠̬͎̈́̍͘É̴̢̬͙̑̉̆̾̽̍̕ ̵̧̛̗̘̣̣̰̀͋̔Y̴̢̨̨͍̫͚̺̲̲̮̲̺͇̓̃̄̿̉͛Ȍ̴̧͓̳̬̫̤͇͒Ų̶̪̺̤͍̹͎̼͊͑͌͋̓̾̐͜W̵̼̣̝̭̹̥̄̂̑̽Ŗ̸̧̜̥̯̣̘͙͗͝Ę̴̨̭̺͙̭͍͚̈́́̈́͐̎̐͗̋̽͊͐̽̕͘N̷̡͕̖̫͈̠̥̳̳͕̺̥̽̏̀̋͗̀̄̃̔́Ṭ̸̗͖͙̳̉́̐̀͂ ̶̡̧̱̗͙̼͓̦̯̥͙̼̋̾͊́͒͛́̔́̚͜S̸̯̳͉̭̪̫͇̝͂͌̑̈́͜U̴̧̢̼̟͓͔̣̬͍̻̮̱͋P̷̢̝̳̬͇̥̪̼̗̖̜̮͊̀̆̎͌̊̾͗͛̽P̴̩̈́̎̏́͋͗̄͜͜͝͝S̵̘̞͚̎͐Ǫ̶͙̐̕E̶̢͔͈̤̗̳̰͖͎̩̪̯̻̊͋͋̆͗̔ͅḐ̷̺̰͈̮͎͈̪͈̳͒̔̐̒͐̋̏̓͊̏͝ ̶̢̨̟̮̱̲̼̟̞̖͍̳̊̋͌̀̅͗͝ͅT̸̢̪͙͓͛͗̐̏̓͠Ó̷͉̠̉̓͗͆̋͌́͐̍͌̍̚ ̵̛̜̜́̅̇́̀͛̆̆̏̂̚͝Ę̵̡̛̫̤̤͈͇͓̇̇̌̀͐͑͂̽͆̚S̶̨͕̲͕̟͎̹̺̺̄̋̔͌͋͑̊͗̋̐̚͝C̴̯̰̮̺̝̫͖͖̞̪͇̋̇͗͘͘̕A̷̛̙͈̮͍̥͕͓͖̹̜͂̈̆̆̽̍̽̎̏͜ͅP̶̘̙̓̔̋̕͘È̶̫͆͂̕ ̷̨͙͇̲̹̻̺͋̀̏͝ͅY̵̱͇͙̹̱̋̄̇̒̈́̋̂̈́̚O̶̡̡̨̯̟͍͂̈́͛͂͂̇͂̇̓̄̂ ̸̙̎ͅW̷̩̘͍̼̺̙̙̌̀̂̆̒̇̂̈́̕͝͝ͅÈ̴̹̇͒͒̌͊̄̀̅̀̈͑R̶̹͉͈̋͆̈́̉́̓̐͗̎̚̕͜͝E̷̙̠̼̿Ṋ̵̨̺͉̭̱̙̠̭̪͙̦͍̊̈́̎̕̕̚̕Ṛ̵̡͇̗̤̞̟̞̠͍̫̭̯̎̌N̸̜͆͊̾̔͌͂̃̿̾̂̑͊̎͘S̵̨͍͚̱̖̗̦̘̩̎̇̈́̇̿̆́͂̿̾͛͜U̷̡̥͈̙̱̻̭͈͎͙̻̙͇̍̅͋͂̃̀̌̀̿̓̀̕̚̕P̸̨̨̛͓̘̰̻̫̗̽P̵̢̛̪̟̯͕̙͇̪̱̣̦̠̌̌̾̓̉̔̆͆Ś̵̬̣̺̻͍̰E̷̥̖͖͈̘̞͋̅͌̈́̒̆̀͑̆̀͛̚ ̵̛̠̙̪̫͎̼̗͈̆̀̾͆̒̈̑͗͠͝͠T̸̖͍̮̏̃͑͑̔̅͛̓͗̈́Ǫ̴̧̡̪͕͉̭͙̦̀͌̾̍̇̉̈́̅̌ ̷̳̗̲͓̍͒̓̍̓̿̚͝E̸͖͒͐̅̇̋͛̓̓S̵̨̖̘̪̝̲͛̈́͗C̴̨̧̤͍̰̟̲͕͔̙͍̊͊̓̒̂́̈́̀̓̍̅̒͑A̸̛̪̜̼̐̾̎̎̌̌̏̋͑͝P̶̛͇̮̮͚̻̌̋͑̈́̀Ë̶̛͈̠̲̩̘̞̬̱̪͔͙͇̊͆͆̓͌̽͗̔̊͘ npm ',
      final: true,
      slack: 'Spread love everywhere you go.',
    },
  ])
}
