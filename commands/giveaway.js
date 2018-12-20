const Discord = require("discord.js");
const prefix = ".";

module.exports.run = async (bot, message, client, args) => {
    let giveaway = message.guild.channels.find(`name`, "temp2");
    let enter = new discord.RichEmbed()
    .setTitle("Giveaway")
    .setDescription("${message.author.username}${message.author.discriminator}")
    .setFooter("Time: ${message.createdAt}")
    .setColor("#006400");

    giveaway.channel.send(enter)
   message.channel.send(':white_check_mark: Entered');

}
   
module.exports.help = {
  name:"enter"
}
