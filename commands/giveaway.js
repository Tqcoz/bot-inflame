const Discord = require("discord.js");
const prefix = ".";

module.exports.run = async (bot, message, client, args) => {
   if(!message.content.startsWith(prefix)) return ;
   let mAuth = message.author.username;
   let mIcon = message.author.avatarURL;
   let mDiscrim = message.author.discriminator;
  let giveaway = message.guild.channels.find(`name`, "giveaway");
   if(!message.channel === giveaway) return message.channel.send(":x: Please enter for the giveaway at #giveaway!");
await message.delete();

 let giveawayChannel = message.guild.channels.find(`name`, "temp2");
 
 let giveawayEmbed = new Discord.RichEmbed()
 .setTitle(`Giveaway ${mAuth}${mDiscrim}`)
 .setDescription(`${mAuth} just entered the Nitro Giveaway!`)
 .addField('InflameMC', 'join.inflamemc.com')
 .setFooter(` Discord: discord.io/inflamemc | Time: ${message.createdAt}`)
 .setColor("#d2b48c")    
 .setThumbnail(mIcon)
     
 appealsChannel.send(giveawayEmbed);
     message.channel.send(":ok_hand: Entered! Be sure to be active or you will not be spun!");
});
 }
module.exports.help = {
  name:"enter"
}
