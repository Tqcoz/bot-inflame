const Discord = require("discord.js");
const prefix = ".";

module.exports.run = async (bot, message, args) => {

  if(!message.author.id === '411590727441580032') return;
    message.react('🔥');
}

module.exports.help = {
  name: ""
}
