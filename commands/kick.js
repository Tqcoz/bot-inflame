
const discord = require("discord.js");
const bot = new discord.Client();
const fs = require ("fs");
const prefix = ".";
module.exports.run = async (bot, message, args) => {
      if(!message.content.startsWith(prefix)) return ;  
  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  let noUserEmbed = new discord.RichEmbed()
    .setDescription(":grey_question: You haven't mentioned a user in this Discord server to kick.")  
  if(!kUser) return message.channel.send(noUserEmbed);
    let kReason = args.join(" ").slice(22);
  let noPermsEmbed = new discord.RichEmbed()
  .setDescription(":no_entry_sign: You don't have the permission `KICK_MEMBERS`")
  .setColor("#e56b00");
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(noPermsEmbed);
      let noKickEmbed = new discord.RichEmbed()
    .setDescription(":no_entry_sign: This person is unkickable!")
    .setColor("#e56b00");  
  if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send(noKickEmbed);
     let kickEmbed = new discord.RichEmbed()
    .setDescription("~New Kick~")
    .setColor("#e56b00")
    .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
    .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kicked In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", kReason);
     let kickChannel = message.guild.channels.find(`name`, "mod-logs");
    if(!kickChannel) return message.channel.send(`Can't find mod-logs channel. Run ${prefix}setup for help.`);
    message.delete().catch(O_o=>{});
    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);
    let kickedEmbed = new discord.RichEmbed()
  .setDescription(`:white_check_mark: User <@${kUser.id}> kicked.`)
  .setColor("#2eb82e");
    if(kickChannel) return message.channel.send(kickedEmbed);

}

module.exports.help = {
    name: "kick"

}