const Discord = require("discord.js");
module.exports.run = (bot, args, message) => {
  message.channel.bulkDelete(1).then(() => {
    
  let embedContent = args.join(" ");
  const embed = new Discord.RichEmbed()
    .setDescription(embedContent)
    .setColor("#f575a0");
  message.channel.send(embed);
  });
}

module.exports.help = {
  name: "embed"
}
