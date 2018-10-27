const Discord = require("discord.js");
const prefix = ".";
let coins = require("../coins.json");


module.exports.run = async (bot, message, args) => {
if(!message.content.startsWith(prefix)) return ;
  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }

  let uCoins = coins[message.author.id].coins;
  let user = [message.author.username];

  let coinEmbed = new Discord.RichEmbed()
  .setColor("#00FF00")
  .addField("💸", `**${user}**, you have ${uCoins} coins!`);

  message.channel.send(coinEmbed).then(msg => {msg.delete(5000)});

}

module.exports.help = {
  name: "coins"
}