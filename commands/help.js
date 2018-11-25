const Discord = require("discord.js");
const fs = require("fs");
const prefix = ".";

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith(prefix)) return ;

    let helpEmbed = new Discord.RichEmbed()
    .setTitle("~Inflame Bot Help~")
    .setThumbnail("https://mbtskoudsalg.com/images/flame-art-png-6.png")
    .addField("About", "InflameBot is a coin and leveling system bot made for InflameMC and the InflameMC Discord.")
    .addField("User Commands", "`.help`, `.coins`, `.pay [@user] {amount}`, `.level`, `.new help`, `.retell [msg]`, `.lottery`, `.server`, `.embed [msg]`")
    .addField("Prefix", "Bot's default prefix is `.`")
    .setFooter("Coded by Vixel and pvpar")
    .setColor("#edae49");

    message.channel.send(helpEmbed);
}

module.exports.help = {
  name: "help"
}
