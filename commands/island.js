const discord = require("discord.js");
const prefix = "^";

module.exports.run = async (bot, message, args) => {

let islandEmbed = new discord.RichEmbed()
.setTitle("Invite Island to your server!")
.setDescription(":island: **Check out our public bot, __Island__!** :island:")
.setFooter("Made, once again, by pvpar#0001 with help from Vixel#6105.")

message.channel.send(islandEmbed);

}
