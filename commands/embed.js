const Discord = require("discord.js");
module.exports.run = (client, msg, args) => {
  msg.delete();
  let embedContent = args[0];
  const embed = new Discord.MessageEmbed()
    .setDescription(embedContent)
    .setColor(["#f575a0"]);
  msg.channel.send(embed);
};

module.exports.help = {
  name: "embed"
}
