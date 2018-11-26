const Discord = require("discord.js");
const prefix = ".";
const request = require("request");
module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(prefix)) return ;
  message.channel.startTyping();
  request({ uri: "https://dog-api.kinduff.com/api/facts", json: true }, (error, response, body) => {
    if (error) throw new Error(error);
    message.channel.stopTyping();
    message.channel.send(`🐶 **Did you know?** ${body.facts[0]}`);
  });

}

module.exports.help = {
  name: "dogfact"
}
