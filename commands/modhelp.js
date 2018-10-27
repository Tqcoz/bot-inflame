const Discord = require("discord.js");
const fs = require("fs");
let coins = require("../coins.json");
const prefix = ".";

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith(prefix)) return ;

    let helpEmbed = new Discord.RichEmbed()
    .setTitle("~Inflame Bot Help - Moderation~")
    .setThumbnail("https://cdn.discordapp.com/attachments/503814751139135509/504044622402551818/InflameLogo.png")
    .addField("Mod Commands", "`.mute`, `.kick`, `.ban`.")
    .addField("Prefix", "Bot's default prefix is `.`")
    .setColor("#00ace6");

    message.channel.send(helpEmbed);
}

module.exports.help = {
  name: "modhelp"
}
