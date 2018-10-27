const discord = require("discord.js");
const prefix = ".";
const bot = new discord.Client();
module.exports.run = async (bot, message, args) => {
if(!message.content.startsWith(prefix)) return ;
    let reason = message.guild.members.get(args[0]);

    let reportEmbed = new discord.RichEmbed()
    .setTitle("**New Ticket**")
    .setColor("#bf42f4")
    .addField("Reported By", `${message.author} with user ID ${message.author.id}.`)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", reason);

    let reportschannel = message.guild.channels.find(`name`, "tickets");
    if(!reportschannel) return message.channel.send("Couldn't locate a tickets channel. Please contact a server manager. The channel must be named: `tickets`.")

        message.delete().catch(O_o=>{});
        reportschannel.send(reportEmbed)
        if(reportschannel) return message.channel.send("Ticket sent, thanks!")

}

module.exports.help = {
    name: "ticket"

}
