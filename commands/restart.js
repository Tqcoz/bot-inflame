const Discord = require("discord.js");
const prefix = ".";
module.exports.run = async (bot, message, args) => {

    if(message.content.startsWith(prefix)) return ;
    if(!message.author.hasPermission === ('ADMINISTRATOR')) return ;
     await  message.channel.send('Restarting!'); 
       process.exit(1)

}

module.exports.help = {
  name: "restart"
}
