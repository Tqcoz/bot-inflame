const Discord = require("discord.js");
const prefix = ".";

module.exports.run = async (bot, message, args) => {
        
        if(!message.content.startsWith(prefix)) return;
          message.channel.send('Happy Halloween ' + (message.author.username) + ' :ghost:' );
          message.react('🎃');
          message.edit('This Halloween is gonna haunt you for ever! I have a dig bick!');
    }  
module.exports.help = {
  name: "halloween"
}
