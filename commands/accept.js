const Discord = require("discord.js");
const prefix = ".";

module.exports.run = async (bot, message, client, args) => {
   if(!message.content.startsWith(prefix)) return ;
   if(!message.member.hasPermission("ADMINISTRATOR")) return ;
   
let aUser = args[1];
let contentyay = args.join(" ").slice(28);

let embed = new Discord.RichEmbed()
.setTitle("InflameMC")
.addField(":white_check_mark: Staff Application Accepted!", "Please contact `pvpar#0001` for further information!")
.setFooter("join.inflamemc.com | Time: ${message.createdAt}")
.setColor("#123cba");

aUser.send(embed);

}

module.exports.help = {
  name:"accept"
}
