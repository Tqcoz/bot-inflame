const Discord = require("discord.js");
const prefix = ".";

module.exports.run = async (bot, message, args) => {
        
        if(message.content.startsWith(prefix)) { 
          message.channel.send('Happy Halloween ' + message.author.username + ':ghost:' );
          message.react('🎃');
        }
    }  
module.exports.help = {
  name: "halloween"
}
