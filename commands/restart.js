const Discord = require("discord.js");
const prefix = ".";
module.exports.run = async (bot, message, args) => {

    if(message.content.startsWith(prefix)) return ;
    if(!message.author.hasPermission === ('ADMINISTRATOR')) return ;
       message.channel.send('Restarting!'); 
       process.exit(0)

}

module.exports.help = {
  name: "restart"
}
