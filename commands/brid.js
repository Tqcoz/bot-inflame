const Discord = require("discord.js");
const fs = require("fs");
const prefix = ".";
const superAgent = require("superagent");

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith(prefix)) return ;
    let {body} = await superAgent
    .get(`http://shibe.online/api/birds`);
    
    let catEmbed = new Discord.RichEmbed()
    .setTitle("Source")
    .setDescription(":bird:")
    .setImage(body[0])
    .setColor("#68f468")
    .setURL("http://shibe.online")
    .setFooter(`For ${message.author.username}!`);
    
    message.channel.send(catEmbed);
}

module.exports.help = {
  name: "bird"
}
