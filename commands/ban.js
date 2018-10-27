const discord = require("discord.js");
const bot = new discord.Client();
const fs = require ("fs");
const prefix = ".";

module.exports.run = async (bot, message, args) => {
         if(!message.content.startsWith(prefix)) return ;
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let noUserEmbed = new discord.RichEmbed()
    .setDescription(":grey_question: You haven't mentioned a user in this Discord server to ban.")
  if(!bUser) return message.channel.send(noUserEmbed);
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You can't ban this person. If you think this is an error, contact server Administrators.");
    let noBanEmbed = new discord.RichEmbed()
    .setDescription(":no_entry_sign: This person is unbannable!")
    .setColor("#8B0000");
  if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send(noBanEmbed);
     let banEmbed = new discord.RichEmbed()
    .setDescription("~New Ban~")
    .setColor("#732699")
    .addField("Banned User", `${bUser} with ID ${bUser.id}`)
    .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Banned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason);
     let banChannel = message.guild.channels.find(`name`, "mod-logs");
    if(!banChannel) return message.channel.send(`Can't find mod-logs channel. Run ${prefix}setup for help.`);
    message.delete().catch(O_o=>{});
    message.guild.member(bUser).ban(bReason);
    banChannel.send(banEmbed);
  let bannedEmbed = new discord.RichEmbed()
  .setDescription(`:white_check_mark: User <@${bUser.id}> banned.`)
  .setColor("#2eb82e");
    if(banChannel) return message.channel.send(bannedEmbed);
    

}

module.exports.help = {
    name: "ban"

}
