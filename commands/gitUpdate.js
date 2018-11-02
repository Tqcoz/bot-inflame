
const Discord = require("discord.js");
const prefix = ".";
module.exports.run = async (bot, message, args) => {

    if(!message.content.startsWith(prefix)) return ;
    if(!message.author.hasPermission === ('ADMINISTRATOR')) return ;
    let updateMsg = args[0];
    let gitUpdateEmbed = new Discord.RichEmbed()
    .setDescription(":arrow_up: **New GitHub Update** :arrow_up:")
    .setTitle("Our GitHub Page")
    .addField("Update:", updateMsg)
    .setColor("#228B22")
    .setThumbnail("http://pluspng.com/img-png/github-octocat-logo-vector-png-png-ico-icns-svg-more-512.png")
    .setURL("https://github.com/Tqcoz/inflame-bot")
    .setFooter("Visit our official GitHub page [here](https://github.com/Tqcoz/inflame-bot).");
    
    
    message.channel.send(gitUpdateEmbed);

}

module.exports.help = {
  name: "gitUpdate"
}
