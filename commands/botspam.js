const Discord = require("discord.js");



module.exports.run = async (bot, message, args,) => {
const channel = member.guild.channels.find(ch => ch.name === 'bot-spam');
let sicon = message.guild.iconURL;
  
  if (!channel) return;
  channel.send(`Sup, ${member}`);
  channel.send(`OH WOW, ${member} just joined **InflameMC** PROPS TO HIM!`);
  let welcome = new Discord.RichEmbed()
    .setDescription("SOMEONE JUST JOINED!")
    .setColor("	#0b3142")
    .setThumbnail(sicon)
    .setAuthor('${member}')
    .addField("Hey ${member}!", "Want to hang out?")
    .addField("Thank you for joining", "InflameMC!")
    .addField("This is when you joined...", "${member.joinedAt}")
    .addField("We have Total Members of", message.guild.memberCount);
  channel.send(welcome)
  
  let welcome2 = new Discord.RichEmbed()
    .setDescription("SOMEONE JUST JOINED!")
    .setColor("	#0b3132")
    .setThumbnail(sicon)
    .setAuthor('${member}')
    .addField("Hey ${member}!", "Want to hang out?")
    .addField("Thank you for joining", "InflameMC!")
    .addField("This is when you joined...", "${member.joinedAt}")
    .addField("We have Total Members of", message.guild.memberCount);
  channel.send(welcome2)
  
  let welcome3 = new Discord.RichEmbed()
    .setDescription("SOMEONE JUST JOINED!")
    .setColor("	#0b3342")
    .setThumbnail(sicon)
    .setAuthor('${member}')
    .addField("Hey ${member}!", "Want to hang out?")
    .addField("Thank you for joining", "InflameMC!")
    .addField("This is when you joined...", "${member.joinedAt}")
    .addField("We have Total Members of", message.guild.memberCount);
  channel.send(welcome3)
}

module.exports.help = {
  name: "botspam"
}
