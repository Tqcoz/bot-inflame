const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

      if(!message.content.startsWith(prefix)) return;
        message.member.send('YOUR A NERD');
}

module.exports.help = {
  name: "nerd"
}
