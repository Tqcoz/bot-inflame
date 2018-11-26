const Discord = require("discord.js");
const prefix = ".";
const request = require("request");
module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(prefix)) return ;
  message.channel.startTyping();
  request({ uri: "http://www.yerkee.com/api/fortune", json: true }, (error, response, body) => {
    if (error) throw new Error(error);
    message.channel.stopTyping();
    message.channel.send(body.fortune);
  });
}

module.exports.help = {
  name: "fcookie"
}
