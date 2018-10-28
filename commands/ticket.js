const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const red = botconfig.red;
const green = botconfig.green;
const orange = botconfig.orange;
const errors = require("../utils/errors.js");
let stafferr = ("No Staff is mentioned after .ticket ")

module.exports.run = async (bot, message, args) => {
    message.delete();
    if(args[0] == "help"){
      message.reply("Usage: .ticket <staff targeted to review this ticket> <reason>");
      return;
    }
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return errors.cantfindUser(message.channel);
    let rreason = args.join(" ").slice(22);
    if(!rreason) return errors.noReason(message.channel);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Reports")
    .setColor(orange)
    .addField("Staff targeted", `${rUser} with ID: ${rUser.id}`)
    .addField("Ticket By", `${message.author} with ID: ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", rreason);

    let reportschannel = message.guild.channels.find(`name`, "tickets");
    if(!reportschannel) return message.channel.send("Couldn't find tickets channel.");
    reportschannel.send(reportEmbed);

}

module.exports.help = {
  name: "ticket"
}
