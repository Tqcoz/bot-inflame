const Discord = require("discord.js");
const fs = require("fs");
let coins = require("../coins.json");
const prefix = ".";

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(prefix)) return;
  let noPermsEmbed = new Discord.RichEmbed()
  .setDescription("Nope!");
  if(!message.author.hasPermission("ADMINISTRATOR") return;
    //!pay @isatisfied 59345
  let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);

  if(!coins[pUser.id]){
    coins[pUser.id] = {
      coins: 0
    };
  }

  let pCoins = coins[pUser.id].coins;
  let sCoins = coins[message.author.id].coins;

  coins[pUser.id] = {
    coins: pCoins + parseInt(args[1])
  };

  message.channel.send(`${senderName} has OPped ${pUser} ${args[1]} coins.`);

  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if(err) cosole.log(err)
  });


}

module.exports.help = {
  name: "payop"
}
