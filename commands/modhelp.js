const Discord = require("discord.js");
const fs = require("fs");
let coins = require("../coins.json");
const prefix = ".";

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith(prefix)) return ;

    let helpEmbed = new Discord.RichEmbed()
    .setTitle("~Inflame Bot Help - Moderation~")
    .setThumbnail("https://mbtskoudsalg.com/images/flame-art-png-6.png")
    .addField("Mod Commands", "`.mute`, `.kick`, `.ban`.")
    .addField("Prefix", "Bot's default prefix is `.`")
    .setColor("#fccb5a");

    message.channel.send(helpEmbed);
}

module.exports.help = {
  name: "modhelp"
}
