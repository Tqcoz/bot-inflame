const Discord = require("discord.js");
const prefix = ".";

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(prefix)) return ;
    let giveaway = message.guild.channels.find(`name`, "temp2");
    const enter = new discord.RichEmbed()
    .setTitle("Giveaway")
    .setDescription(`${message.member.username}${message.member.discriminator}`)
    .setFooter(`Time: ${message.createdAt}`)
    .setColor("#006400");

    giveaway.send(enter);
   message.channel.send(':white_check_mark: Entered');

}
   
module.exports.help = {
  name:"enter"
}
