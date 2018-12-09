const Discord = require("discord.js");
const prefix = ".";
module.exports.run = async (bot, message, args) => {
if(message.channel.type === "dm") {
if(!message.content.startsWith(prefix)) return;
   let content = new DiscordRichEmbed()
    .setDescription("**DM Test**")
    .setThumbnail(bot.user.iconURL)
    .setTitle("GitHub")
    .addField(":musical_note: Music", "Use `.help music`.", true)
    .addField(":smile: Fun","Use `.help fun`.", true)
    .addField(":warning: Moderation", "Use `.help moderation` or `/help mod`.")
    .addField(":notepad_spiral: Server", "Use `.help server`.")
    .setFooter("Coded by @pvpar#0001 and Vixel#0666")
    .setURL("https://github.com/Tqcoz/bot-inflame")
    .setColor("#123abc");
   message.author.send(content)
 }
}
module.exports.help = {
  name: "dm"
}
