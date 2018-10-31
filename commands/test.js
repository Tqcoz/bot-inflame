const Discord = require("discord.js");
const prefix = " ";
module.exports.run = async (bot, message, args) => {

      if(message.content === 'InflameMC is nice') return;
         message.react('❤');
         message.member.send('OMG, Thank You! We appreciate your kind message and you will be logged in our console!');
         console.log(message.author.username + message.author.discriminator)

}

module.exports.help = {
  name: "InflameMC is nice"
}
