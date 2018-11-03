const Discord = require("discord.js");
const fs = require("fs");
const coins = require("../coins.json");
const prefix = ".";
const superAgent = require("superagent");

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith(prefix)) return ;
message.channel.send("im devving this go away");
}

module.exports.help = {
  name: "dog"
}
