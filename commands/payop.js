const Discord = require("discord.js");
const fs = require("fs");
const coins = require("../coins.json");
const prefix = ".";

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(prefix)) return ;
  let noPermsEmbed = new Discord.RichEmbed()
  .setDescription("Nope!");
  if(!message.member.hasPermission("ADMINISTRATOR")) return ;
    //!pay @isatisfied 59345
  let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
if(!args[0]) return message.channel.send("ERROR: Mention a user.");
  if(!args[1]) return message.channel.send("ERROR: Specify a coin amount.");
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
let senderName = message.member;
let coinedEmbed = new Discord.RichEmbed()
.setDescription(`:moneybag: ${senderName} has changed ${pUser}'s coins by ${args[1]}!`)
.setColor("#7FFFD4");
  message.channel.send(coinedEmbed);
  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if(err) cosole.log(err)
  });


}

module.exports.help = {
  name: "payop"
}
