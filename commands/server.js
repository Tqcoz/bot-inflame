const moment = require("moment");

module.exports.run = async (client, message, args) => {

    message.channel.send(`Here is the different information of **${message.guild.name}**`, {
        embed: {
            color: 0xDF9C9D,
            author: {
                name: message.author.username,
                icon_url: message.author.displayAvatarURL()
            },
            thumbnail: {
                url: message.guild.iconURL()
            },
            fields: [{
                    name: "• name:",
                    value: `${message.guild.name}`,
                    inline: true
                }, {
                    name: "• ID:",
                    value: `${message.guild.id}`,
                    inline: true
                }, {
                    name: "• Crated at:",
                    value: moment(message.guild.createdAt).format("LL"),
                    inline: true
                }, {
                    name: "• Owner:",
                    value: message.guild.owner.user.tag,
                    inline: true
                }, {
                    name: "• Members:",
                    value: `${message.guild.memberCount}`,
                    inline: true
                }, {
                    name: "• Last members:",
                    value: `${Array.from(message.channel.guild.members.values()).sort((a, b) => b.joinedAt - a.joinedAt).map(m => `<@!${m.id}>`).splice(0, 1)}`,
                    inline: true
                }, {
                    name: "• Channel",
                    value: `**${message.guild.channels.filter(channel => channel.type === 'text').size}** text - **${message.guild.channels.filter(channel => channel.type === 'voice').size}** audio`,
                    inline: true
                }, {
                    name: "• AFK channel",
                    value: `${message.guild.afkChannel}`,
                    inline: true
                }, {
                    name: `• Roles - **${message.channel.guild.roles.size}**:`,
                    value: message.guild.roles.array().map(g => g).join(', '),
                    inline: true
                }, {
                    name: `• Emojies - **${message.channel.guild.emojis.size}**:`,
                    value: `${message.guild.emojis.map(e => e).join(', ')}`,
                    inline: true
                }
            ]
        }
    })
}

module.exports.help = {
    name: "sinfo",
}
