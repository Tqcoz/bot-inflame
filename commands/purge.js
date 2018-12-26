const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Insufficient permissions.");
  if(!args[0]) return message.channel.send("Missings arguments.");
  let purgeAm = args.join(" ").slice(5) + 1;
  message.channel.bulkDelete(purgeAm).then(() => {
  message.channel.send(`Cleared ${args.join(" ").slice(5)} messages.`).then(msg => msg.delete(2000));
});

}

module.exports.help = {
  name: "purge"
}
