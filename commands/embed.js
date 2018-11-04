const Discord = require("discord.js");
module.exports.run = (client, bot, msg, args, message) => {
  msg.channel.bulkDelete(1).then(() => {
    
  let embedContent = args.join(" ");
  const embed = new Discord.RichEmbed()
    .setDescription(embedContent)
    .setColor("#f575a0");
  msg.channel.send(embed);
  });
}

module.exports.help = {
  name: "embed"
}
