const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("ready", function (){
  console.log('${bot.user.username} Is Online!');
  bot.user.setActivity('Titah Kaisar Fancy', {type: "LISTENING"}).catch(console.error);
});

bot.on('message', message => {

  if (message.content === 'ping')
    message.channel.send('pong');
});

bot.login(process.env.token);