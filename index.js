const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("ready", function (){
  console.log('${bot.user.username} Is Online!');
  bot.user.setActivity('Titah Kaisar Fancy', {type: "LISTENING"}).catch(console.error);
});

const prefix = '~';

bot.on('message', message => {

  // variables
  let message = message.content.tuUpperCase();
  let sender = message.author;

  // commands
  if (message === prefix + 'PING') {
    message.channel.send('Ping!'); //send message to channel without mention
  }
});

bot.login(process.env.token);