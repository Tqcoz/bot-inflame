const Discord = require("discord.js");
const prefix = ".";

module.exports.run = async (bot, message, args) => {
        
        if(!message.content.startsWith(prefix)) return;
message.channel.send("Happy Thanksgiving!");
    }  
module.exports.help = {
  name: "halloween"
}
