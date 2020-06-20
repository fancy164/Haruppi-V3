const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("ready", function (){
  console.log('${bot.user.username} Is Online!');
  bot.user.setActivity('Titah Kaisar Fancy', {type: "LISTENING"}).catch(console.error);
});

bot.on('message', message => {

  if (message.content === 'ping') {
    message.channel.send('pong');
  
  
  let blacklisted = ['bangsat', 'bangsad', 'bgsd', 'bgst', 'bangst', 'bngsat', 'anjing', 'njing', 'anying', 'anjng', 'goblok', 'gblk'];
  let foundInText = false;
  for (var i in blacklisted){
    if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
  }
  if (foundInText) {
    message.delete();
    message.reply('Aduh dek... masih kecil gak boleh ngomong gitu. Chat kamu kakak hapus ya')
  }
  }

})

bot.login(process.env.token);