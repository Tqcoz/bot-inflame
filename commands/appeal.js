const Discord = require("discord.js");
const prefix = ".";

module.exports.run = async (bot, message, client, args) => {
   if(!message.content.startsWith(prefix)) return ;
   let mAuth = message.author.username;
   let mIcon = message.author.avatarURL;
  let appeals_Channel = message.guild.channels.find(`name`, "ban-appeals");
   if(!message.channel === appeals_Channel) return message.channel.send(":x: That's not a ban appeals channel!");
await message.delete();
  const filter = m => m.author.id === message.author.id;
  message.channel.send("Please tell us your reason for wanting to be unbanned, including your in-game name and the moderator who banned you. You can send `cancel` at any time to cancel this appeal. __Hint:__ Use proper grammar. If your appeal is in a language other than English, it won't be reviewed.").then(q => q.delete(15000))
  message.channel.awaitMessages(filter, {
    max: 1,
    time: 300000
  }).then(collected => {
    collected.delete(15000);
    if (collected.first().content === 'cancel') {
      return message.reply("Canceled.");
    }
let appealContent = collected.first().content;
 message.delete();
     message.delete();
 let appealsChannel = message.guild.channels.find(`name`, "appeals");
 if(!appealsChannel) return message.channel.send(":x: Couldn't find appeals channel.");
 
 let appealEmbed = new Discord.RichEmbed()
 .setTitle(`New Ban Appeal by ${mAuth}`)
 .setDescription(`**Appeal Content:** ${appealContent}`)
 .addField('InflameMC', 'join.inflamemc.com')
 .setFooter(` Discord: discord.io/inflamemc | Time: ${message.createdAt}`)
 .setColor("#d2b48c")    
 .setThumbnail(mIcon)
     
 appealsChannel.send(appealEmbed);
     message.channel.send(":ok_hand: Appeal sent! You will be contacted if your appeal is accepted!");
    }).catch(err => {
    message.reply("Cancelled...").then(r => r.delete(5000));
    console.log("Time exceeded. Message await cancelled.");
  });
 }
module.exports.help = {
  name:"appeal"
}
