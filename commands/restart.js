const Discord = require("discord.js");
const prefix = ".";
module.exports.run = async (bot, message, args) => {

    if(message.author.hasPermission === ('ADMINISTRATOR')) return;
       message.channel.send('Restarting!'); 
       heroku ps:restart;

}

module.exports.help = {
  name: "restart"
}
