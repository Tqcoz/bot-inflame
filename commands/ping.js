const Discord = require("discord.js");
const config = "../botconfig.json";
const prefix = ".";
const tick = "`";
module.exports.run = async (bot, message, client, args) => {
   if(!message.content.startsWith(prefix)) return ;   
  message.channel.send(`Hey there: ${tick}${bot.ping}${tick}ms`);
}
module.exports.help = {
  name:"ping"
}
