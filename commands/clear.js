const Discord = require("discord.js");
const prefix = ".";
module.exports.run = async (bot, message, args) => {
if(!message.content.startsWith(prefix)) return;
   let noClearEmbed = new discord.RichEmbed()
    .setDescription(":no_entry_sign: You can't clear chat!")
    .setColor("#8B0000");
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(noClearEmbed);
    let noUserEmbed = new discord.RichEmbed()
    .setDescription(":grey_question: You need to specify the number of messages you want cleared.");
if(!args[0]) return message.channel.send(noUserEmbed);
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(5000));
  });
}

module.exports.help = {
  name: "clear"
}
