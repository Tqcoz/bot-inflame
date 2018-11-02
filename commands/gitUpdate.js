
const Discord = require("discord.js");
const prefix = ".";
module.exports.run = async (bot, message, args) => {
    
    if(!message.content.startsWith(prefix)) return ;
    if(!message.author.hasPermission === ('ADMINISTRATOR')) return ;
      message.channel.bulkDelete(1).then(() => {
          let updater = args[0];
    let updateMsg = args.join(" ").slice(args[0]);
    let gitUpdateEmbed = new Discord.RichEmbed()
    .setDescription(":arrow_up: **New GitHub Update** :arrow_up:")
    .setTitle("Our GitHub Page")
    .addField("Update:", updateMsg)
    .setColor("#228B22")
    .setThumbnail("http://pluspng.com/img-png/github-octocat-logo-vector-png-png-ico-icns-svg-more-512.png")
    .setURL("https://github.com/Tqcoz/inflame-bot")
    .setFooter(`Update logged and committed by ${updater}.`);
    
    
    message.channel.send(gitUpdateEmbed);
      });
}

module.exports.help = {
  name: "gitUpdate"
}
