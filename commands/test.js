const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

      if(!message.content === 'InflameMC is Nice') return;
         message.react('❤');
         message.member.send('OMG, Thank You! We appreciate your kind message and you will be logged in our console!');
         console.log(message.author.username + message.author.discriminator)

}

