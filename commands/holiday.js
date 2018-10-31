const Discord = require("discord.js");
const prefix = ".";

module.exports.run = async (bot, message, args) => {
        
        if(message.content.startsWith(prefix)) return;
          message.channel.send('Happy Halloween ' + (message.author.username) + ' :ghost:' );
          message.react('🎃');
          message.member.send('You thought that was the only boring thing I was gonna send to you' + message.author.username + message.author.discriminator + '? ' + 'Well if you did you are wrong!');
    }  
module.exports.help = {
  name: "halloween"
}
