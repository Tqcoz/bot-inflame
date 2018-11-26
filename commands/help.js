const Discord = require("discord.js");
const fs = require("fs");
const prefix = ".";

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith(prefix)) return ;
let section = args[1];
   if(!section) {
       let baseHelpEmbed = new Discord.RichEmbed()
       .setDescription("**Inflame Bot Help**")
    .setThumbnail(bot.user.iconURL)
    .setTitle("GitHub")
    .addField(":musical_note: Music", "Use `/help music`.", true)
    .addField(":smile: Fun","Use `/help fun`.", true)
    .addField(":warning: Moderation", "Use `/help moderation` or `/help mod`.")
    .addField(":notepad_spiral: Server", "Use `/help server`.")
    .setFooter("Coded by @pvpar#0001 and Vixel#0666")
    .setURL("https://github.com/Tqcoz/bot-inflame")
    .setColor("#123abc");
       message.channel.send(baseHelpEmbed);
    };
     if(section === "fun") {
        let funHelpEmbed = new Discord.RichEmbed()
        .addField(":smile: Fun Help", "bird, dog, cat, dogfact, catfact, cowsay, fcookie, clout, embed [message], holiday")
        .setFooter("Use /help to go back to the main help page.")
        .setColor("#0000f0");
            message.channel.send(funHelpEmbed);
    };
     if(section === "music") {
        let musicHelpEmbed = new Discord.RichEmbed()
        .setFooter("Use /help to go back to the main help page.")
        .setColor("#00f0f0")
        .addField(":musical_note: Music Help", "play [search/link], pause, skip, queue, stop, nowplaying, volume [requested_volume], resume");
        message.channel.send(musicHelpEmbed);
    };
     if(section === "server") {
        let serverHelpEmbed = new Discord.RichEmbed()
        .setFooter("Use /help to go back to the main help page.")
        .setColor("#0a0a0a")
        .addField(":notepad_spiral: Server Help", "suggest [suggestion], appeal, credits, help, island, ping, retell, new [@staff_member] [ticket_content], verify");
        
        message.channel.send(serverHelpEmbed);
    };
    if(section === "mod") {
        let modHelpEmbed = new Discord.RichEmbed()
        .setFooter("Use /help to go back to the main help page.")
        .setColor("#bb0f0e")
        .addField(":warning: Moderation Help", "ban [user] {reason}, kick [user] {reason}, unban [user], mute [user] [time], purge [number]");
        
        message.channel.send(modHelpEmbed);
    };
     if(section === "dev") {
        let modHelpEmbed = new Discord.RichEmbed()
        .setFooter("Use /help to go back to the main help page.")
        .setColor("#8B008B")
        .addField(":computer: Developer Help", "restart, gitUpdate [update_msg]");
        
        message.channel.send(modHelpEmbed);
    };
}

module.exports.help = {
  name: "help"
}
