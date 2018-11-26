
const discord = require("discord.js");
const prefix = ".";
module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith(prefix)) return ;
    let reason = args.join(" ");
await message.delete();
    let reportEmbed = new discord.RichEmbed()
    .setTitle("**New Suggestion**")
    .setColor("#009fff")
    .addField("Suggested By", `${message.author} with user ID ${message.author.id}.`)
    .addField("Suggestion", reason)
    .setFooter("React to vote on this idea!");
    let suggestchannel = message.guild.channels.find(`name`, "suggestions");
    if(!suggestchannel) return message.channel.send("Couldn't locate a suggestions channel. Please contact a server manager. The channel must be named: `suggestions`.")
    let msg = await suggestchannel.send(reportEmbed)
        .then(function (msg) {
            msg.react("❎");
            msg.react("✅");
            message.delete({timeout: 1000});
            }).catch(function(error) {
            console.log(error);
        });
        if(suggestchannel) return message.channel.send(":ok_hand: Suggestion sent, thanks!");

}

module.exports.help = {
    name: "suggest"

}
