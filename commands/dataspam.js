const Discord = require("discord.js");
const api = "https://jsonplaceholder.typicode.com/posts"
const sf = require("snekfetch")
exports.run = (client, msg, args) => {
const ch = message.guild.channels.find(`name`, "member-botspam");

    sf.get(api).then(ch.send())
  
};

module.exports.help = {
  name: "botspam"
}
