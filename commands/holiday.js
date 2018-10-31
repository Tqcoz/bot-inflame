const Discord = require("discord.js");
const prefix = ".";

module.exports.run = async (bot, message, args) => {
        
const flame = guild.id('503783777307459604')
const emoji = flame.emojis.first();
        
        if(message.content.startsWith(prefix)) { 
          message.channel.send('Happy Halloween ' + (message.author.username) + emoji.name('ghost') );
          message.react('🎃');
        }
    }  
module.exports.help = {
  name: "halloween"
}
