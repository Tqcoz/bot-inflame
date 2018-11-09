const Discord = require("discord.js");
const prefix = ".";

module.exports.run = async (bot, message, args, guild) => {
    if(!message.content.startsWith(prefix)) return ;
    message.delete();
    let role = message.guild.roles.find(role => role.name === 'Verified');
    if (message.channel.name !== 'verification') return message.reply('You must go to the channel #verification');
    message.member.addRole(role);
    if (message.member.roles.has(role.id)) {
        let verifyEmbed = new Discord.RichEmbed()
            .setAuthor(message.member.displayName, message.author.displayAvatarURL)
            .setColor('#36393f')
            .setDescription('Your account has already been verified!')
        return message.channel.send((verifyEmbed));
    } else {
        let verifyEmbed = new Discord.RichEmbed()
            .setAuthor(message.member.displayName, message.author.displayAvatarURL)
            .setColor('#36393f')
            .setDescription('Your account has been successfully verified.')
        return message.channel.send((verifyEmbed)).then(msg => {message.delete(5000)});
    }
}

module.exports.help = {
    name: 'verify',
}

//PREMIUM ONLY
