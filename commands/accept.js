const Discord = require("discord.js");
const prefix = ".";

module.exports.run = async (bot, message, client, args) => {
   if(!message.content.startsWith(prefix)) return ;
   if(!message.member.hasPermission("ADMINISTRATOR")) return ;
   
let aUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

let embed = new Discord.RichEmbed()
.setTitle("InflameMC")
.addField(":x: | InflameMC Staff Application **denied**. Thanks for applying!")
.setFooter("join.inflamemc.com | Time: ${message.createdAt}")
.setURL("https://minetex.xyz/flame")
.setColor("#123cba");

aUser.send(embed);

}

module.exports.help = {
  name:"deny"
}
