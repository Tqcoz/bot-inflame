const Discord = require("discord.js");
const moment = require("moment")
module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You must have the `MANAGE_MESSAGES` Permission from either `Vixel` or `pvpar` to purge messages.");
  if(!args[0]) return message.channel.send("no");
  message.channel.bulkDelete(args[0]).then(() => {
  let purge = new Discord.RichEmbed()
    .setDescription("Purging ${args[0]} Messages.")
    .setColor("#a22c29")
    .setThumbnail('https://ubisafe.org/images/flaming-clipart-drawn-4.jpg')
    .addField("Purged By", message.member)
    .addField("Purged on", message.createdAt);
});

}

module.exports.help = {
  name: "purge"
}
