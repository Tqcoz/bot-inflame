 const Discord = require("discord.js");
const prefix = ".";
module.exports.run = async (client, message, args) => {
  if(!message.content.startsWith(prefix)) return ;
  if (message.author.id === "284805484991610883") {
    await message.reply("CloutBot is restarting.");
    client.commands.forEach(async cmd => {
      await client.unloadCommand(cmd);
    });
    process.exit(1);
  } else {
    message.reply("only the bot owner can restart CloutBot!");
  }
  

}

module.exports.help = {
  name: "restart"
}
