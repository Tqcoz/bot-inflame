const Discord = require("discord.js");
const fs = require("fs");
const coins = require("../coins.json");
const prefix = ">";
const superAgent = require("superagent");

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith(prefix)) return ;
       if(message.author.id === vix) return message.channel.send("You don't get cats.");
    let {body} = await superAgent
    .get(`http://aws.random.cat//meow`);
    
    let catEmbed = new Discord.RichEmbed()
    .setTitle("Source")
    .setDescription(":cat: **A random cat!** :cat:")
    .setImage(body.file)
    .setColor("#68f468")
    .setURL("http://random.cat")
    .setFooter(`For ${message.author.username}!`);
    
    message.channel.send(catEmbed);
}

module.exports.help = {
  name: "cat"
}
