const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

      if(!message.member.hasPermission("ADMINISTRATOR")) return;
      const sayMessage = args.join(" ").slice(6);
      message.delete().catch();
      message.channel.send(sayMessage);

}

module.exports.help = {
  name: "retell"
}
