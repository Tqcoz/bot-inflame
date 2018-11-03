
const Discord = require("discord.js");
const fs = require("fs");
const coins = require("../coins.json");
const prefix = ".";
const superAgent = require("superagent");

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith(prefix)) return ;
    let {body} = await superAgent
    .get(`http://random.cat/meow`);
    
    let dogEmbed = new Discord.RichEmbed()
    .setTitle("Source")
    .setDescription(":cat: **A random cat for you!** :cat:")
    .setImage(body.file)
    .setColor("#ff9900")
    .setURL("https://random.cat")
    .setFooter(`For ${message.author.username}!`);
    
    message.channel.send(dogEmbed);
}

module.exports.help = {
  name: "cat"
}
