const Discord = require('discord.js');
const moment = require('moment');
const reportschannel = message.guild.channels.find(`name`, "tickets");

const cooldown = new Set();
module.exports.run = async (bot, msg) => {
    let args = msg.content.split(' ').slice(1).join(' ');
    msg.delete();
    if (cooldown.has(msg.author.id && msg.guild.id)) {
        return msg.reply('**[COOLDOWN]** Sending tickets has **5 Minutes** Cooldown!');
    }
    if (args.length < 1) {
        return msg.reply(`You must give me something to report first ${msg.author}`);
    }

    cooldown.add(msg.author.id && msg.guild.id);
    setTimeout(() => {
        cooldown.delete(msg.author.id && msg.guild.id);
    }, 300000);
    let guild = msg.guild;
    const cnl = bot.channels.get('421569960029192202');
    msg.reply(`Hey, ${msg.author}, we got your report! We will reply soon as possible! Here is the full ticket:`);
    const embed2 = new Discord.RichEmbed()
  .setAuthor(`Ticket from ${msg.author.tag}`, msg.author.displayAvatarURL)
  .addField('Ticket:', `**Tickets's Author:** ${msg.author.tag}\n**Server:** ${guild.name}\n**Full ticket:** ${args}`)
  .setThumbnail(msg.author.displayAvatarURL)
  .setFooter(`${moment().format('MMMM Do YYYY, h:mm:ss a')}`)
  .setColor(16711728);
    msg.channel.send({embed: embed2});
    const embed = new Discord.RichEmbed()
  .setAuthor(`Ticket from ${msg.author.tag}`, msg.author.displayAvatarURL)
  .addField('Ticket:', `**Report's Author:** ${msg.author.tag}\n**Server:** ${guild.name}\n**Full report:** ${args}`)
  .setThumbnail(msg.author.displayAvatarURL)
  .setColor("#ffd700");
    cnl.send({embed})
  .catch(e => logger.error(e))
};

module.exports.help = {
    name: 'Ticket'
};
