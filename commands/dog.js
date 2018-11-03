const Discord = require("discord.js");
const fs = require("fs");
const coins = require("../coins.json");
const prefix = ".";
const superAgent = require("superagent");

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith(prefix)) return ;
    let {body} = await superAgent
    .get(`https://random.dog/woof.json`);
    
    let dogEmbed = new Discord.RichEmbed()
    .setTitle("Source")
    .setDescription(":dog: **A random dog for you!** :dog:")
    .setImage(body.url)
    .setColor("#ff9900")
    .setURL("https://random.dog")
    .setFooter(`For ${message.author.username}!`);
    
    message.channel.send(dogEmbed);
}

module.exports.help = {
  name: "dog"
}
