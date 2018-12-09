const Discord = require("discord.js");
const prefix = ".";

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith(prefix)) return ;

    await message.delete();
    const filter = m => m.author.id === message.author.id;
    message.member.send("What do you need help with? You can send `cancel` at any time to cancel this appeal. __Hint:__ Use proper grammar. If your question is in a language other than English, it won't be reviewed.").then(q => q.delete(15000))
    message.member.awaitMessages(filter, {
      max: 1,
      time: 300000
    }).then(collected => {
      collected.delete(15000);
      if (collected.first().content === 'cancel') {
        return message.reply("Canceled.");
      }
  let appealContent = collected.first().content;
  const supportEmbed = new Discord.RichEmbed()
  .setDescription(`**SUPPORT QUESTION:**
  
  ${appealContent}
  
  Please reply to this person as soon as possible via ".message".`);
  message.channel.send("We'll respond soon! Thanks!");
  let lolchan = message.guild.channels.find(`name`, "supports");
  lolchan.send(supportEmbed);
      }).catch(err => {
      message.reply("Cancelled...").then(r => r.delete(5000));
      console.log("Time exceeded. Message await cancelled.");
    });

}

module.exports.help = {
  name: "support"
}
