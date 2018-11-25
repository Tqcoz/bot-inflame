const Discord = require("discord.js");
const prefix = "!";

module.exports.run = async (bot, message, client, args) => {
 if(!message.content.startsWith(prefix)) return ;   
 let cloutPoints = Math.floor(Math.random() * 101)
 await message.channel.send(`You have **${cloutPoints}** clout points! `);
 if(cloutPoints > 75) return message.channel.send("that's pretty high lol");
 if(cloutPoints < 15) return message.channel.send("oof wow jeez that's kinda sad wow");
}
module.exports.help = {
  name:"clout"
}
