const Discord = require("discord.js");
exports.run = (client, msg, args) => {
  msg.delete();
  const embed = new Discord.MessageEmbed()
    .setDescription(args.join(" "))
    .setColor(["#f575a0"]);
  msg.channel.send({embed});
};

module.exports.help = {
  name: "embed"
}
