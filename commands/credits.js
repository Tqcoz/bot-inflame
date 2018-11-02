
const Discord = require("discord.js");
const fs = require("fs");
const coins = require("../coins.json");
const prefix = ".";

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith(prefix)) return ;

    let creditsEmbed = new Discord.RichEmbed()
    .setDescription(":credit_card: **InflameBot Creation Credits** :credit_card:")
    .setTitle("Our GitHub page for reference")
    .addField("Coding", "pvpar#0001 and Vixel#6105")
    .addField("Ideas", "pvpar#0001 and Vixel#6105")
    .addField("Art", "Vixel#6105 and non-copyrighted images from the internet")
    .setURL("https://github.com/Tqcoz/inflame-bot")
    .setColor("#ff0000");

    message.channel.send(creditsEmbed);
}

module.exports.help = {
  name: "credits"
}
