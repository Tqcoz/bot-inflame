const Discord = require("discord.js");
const prefix = ".";
module.exports.run = async (bot, message, args) => {
if(!message.content.startsWith(prefix)) return ;
    const server = message.guild;
    const online = bot.emojis.find("id", "452614483404128266");
    const idle = bot.emojis.find("id", "452614468199776258");
    const dnd = bot.emojis.find("id", "452614451967950869");
    const offline = bot.emojis.find("id", "452614474785095681");
  
    var embed = new Discord.RichEmbed()
        .setAuthor(message.guild.name + " Server Information")
        .setDescription(`**Guild ID:** ${message.guild.id}`)
        .addField(`:wrench: Owner`, `**Tag:** ${server.owner.user.tag}\n**ID:** ${server.owner.id}\u200b`, true)
        .setThumbnail(message.guild.iconURL)
        .addField(`:spy: Membercount`, `**Total Users:** ${message.guild.memberCount}\n**Members:** ${message.guild.members.filter(member => !member.user.bot).size}\n**Bots:** ${message.guild.members.filter(member => member.user.bot).size}\n\u200b`, true)
        .addField(`:keyboard: Channel`, `**Text Channels:** ${message.guild.channels.filter(channel => channel.type === 'text').size}\n**Voice Channels:** ${message.guild.channels.filter(channel => channel.type === 'voice').size}\n**Categories:** ${message.guild.channels.filter(channel => channel.type === 'category').size}\n\u200b`, true)
        .addField(`🎭 Member Status`, `${online} **Online:** ${server.members.filter(m => m.user.presence.status === "online").size}\n${idle} **Idle:** ${server.members.filter(m => m.user.presence.status === "idle").size}\n${dnd} **DND:** ${server.members.filter(m => m.user.presence.status === "dnd").size}\n${offline} **Offline / Invisible:** ${server.members.filter(m => m.user.presence.status === "offline").size}`, true)
        .addField(`:clipboard: Roles`, `**Total Roles:** ${message.guild.roles.size}\n\n` + message.guild.roles.filter(role => role.id !== message.guild.id).map(role => `<@&${role.id}>`).join(" | ") + "\n\u200b", true)
        .addField(`😃 Emojis`, `**Total Emojis:** ${message.guild.emojis.size}\n\n` + message.guild.emojis.map(e => e).join(' | '))
        .setColor(color)
        .setTimestamp()
        .setFooter(`Server ID : ${server.id}`)
    
    message.channel.send(embed)
}
  
module.exports.help = {
    name: "stats",
}
