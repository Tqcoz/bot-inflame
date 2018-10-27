const Discord = require("discord.js");
const fs = require("fs");
let coins = require("../coins.json");
const prefix = ".";

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(prefix)) return ;
    //!pay @isatisfied 59345
let senderName = message.author.username;
  if(!coins[message.author.id]){
    return message.channel.send(`You don't have any coins, ${senderName}!`)
  }

  let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);

  if(!coins[pUser.id]){
    coins[pUser.id] = {
      coins: 0
    };
  }

  let pCoins = coins[pUser.id].coins;
  let sCoins = coins[message.author.id].coins;

  if(sCoins < args[0]) return message.channel.send(`You don't have enough coins ${sendUser}`);

  coins[message.author.id] = {
    coins: sCoins - parseInt(args[1])
  };

  coins[pUser.id] = {
    coins: pCoins + parseInt(args[1])
  };

  message.channel.send(`${senderName} has given ${pUser} ${args[1]} coins.`);

  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if(err) cosole.log(err)
  });


}

module.exports.help = {
  name: "pay"
}