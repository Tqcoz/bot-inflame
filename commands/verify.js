 const Discord = require("discord.js");
 const prefix = ".";
 
module.exports.run = async (bot, message, args) => {
 if(!message.content.startsWith(prefix)) return ;
 
 let toVerify = message.author.id;
 let newbrole = message.guild.roles.find(`name`, "newb");
 if(!newbrole){
    try{
      newbrole = await message.guild.createRole({
        name: "newb",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          CONNECT: false,
          SPEAK: false
        });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
toVerify.removeRole(newbrole.id);
  await(tomute.addRole(muterole.id));

module.exports.help = {
 name: "verify"
}
