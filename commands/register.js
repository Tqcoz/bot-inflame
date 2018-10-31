const Disc = require('discord.js');
const readline = require('readline');
const fs = require("fs")
const prefix = "." 
const account = JSON.parse(fs.readFileSync("./account.json", "utf8"))

module.exports.run = async (bot, message, args) => {

client.on("message", message =>{
    if(!message.guild) return;
    if(!account[message.author.id])
    account[message.author.id] = {
    reg: 'false',
    name: 'nothing'
    }
    
    if(message.content.startsWith(prefix + "register")){
        if(account[message.author.id].reg === "true") return message.channel.send(":x: | **You already registred, you have max of 1 account**.")
    if(message.author.bot) return;
    let args = message.content.split(" ").slice(1);
    if(!args[0]) return message.channel.send(":x: | **Please include a name to register**.")
    if(args[0]){
    account[message.author.id].reg = "true"
    account[message.author.id].name = args
    message.channel.send("You have registred your account !")
    fs.writeFile("./account.json", JSON.stringify(account), (error) => {
        if(error) console.log(error)
    })
    }
    }
    })

module.exports.help = {
  name: "register"
}
