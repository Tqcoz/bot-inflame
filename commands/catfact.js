const Discord = require("discord.js");
const prefix = ".";
const request = require("request");

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith(prefix)) return ;
  message.channel.startTyping();
  request({ uri: "https://catfact.ninja/fact", json: true }, (error, response, body) => {
    if (error) throw new Error(error);
    message.channel.stopTyping();
    message.channel.send(`🐱 **Did you know?** ${body.fact}`);
  });
}

module.exports.help = {
  name: "catfact"
}
