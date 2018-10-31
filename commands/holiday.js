const Discord = require("discord.js");
const prefix = ".";
const emoji = guild.emojis.first();

module.exports.run = async (bot, message, args) => {

        if(message.content.startsWith(prefix)) { 
          message.channel.send('Happy Halloween ' + (message.author.username) + emoji.name('ghost'));
          message.react('🎃');
        }
    }  
module.exports.help = {
  name: "halloween"
}
