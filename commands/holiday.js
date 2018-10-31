const Discord = require("discord.js");
const prefix = ".";
const flame = guild.id('503783777307459604')
const emoji = flame.emojis.first();

module.exports.run = async (bot, message, args) => {

        if(message.content.startsWith(prefix)) { 
          message.channel.send('Happy Halloween ' + (message.author.username) + emoji.name('ghost') );
          message.react('🎃');
        }
    }  
module.exports.help = {
  name: "halloween"
}
