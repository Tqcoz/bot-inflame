const Discord = require("discord.js");
const ms = require("ms");
const prefix = ".";
module.exports.run = async (bot, message, args) => {
 if(!message.content.startsWith(prefix)) return ;
  //!tempmute @user 1s/m/h/d

  
  // Hey 
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  let noUserEmbed = new Discord.RichEmbed()
    .setDescription(":grey_question: You haven't mentioned a user in this Discord server to mute.");  
  if(!tomute) return message.channel.send(noUserEmbed);
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute them!");
  let muterole = message.guild.roles.find(`name`, "muted");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false,
          SPEAK: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  let noTimeEmbed = new Discord.RichEmbed()
    .setDescription(":grey_question: You haven't specified a time");  
  if(!mutetime) return message.channel.send(noTimeEmbed);
    let mutedPermEmbed = new Discord.RichEmbed()
  .setDescription(`:white_check_mark: User <@${tomute.id}> muted **permanently**.`)
  .setColor("#2eb82e");
  if(mutetime === "perm") return message.channel.send(mutedPermEmbed),
tomute.addRole(muterole.id);
  await(tomute.addRole(muterole.id));
  let mutedEmbed = new Discord.RichEmbed()
  .setDescription(`:white_check_mark: <@${tomute.id}> has been muted for ${ms(ms(mutetime))}.`) 
  .setColor("#2eb82e");
  message.channel.send(mutedEmbed);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> has been unmuted!`);
  }, ms(mutetime));
  let mReason = args.join(" ").slice(22);
  let muteEmbed = new Discord.RichEmbed()
  .setDescription("~New Mute~")
  .setColor("#8B0000")
  .addField("Muted User", `${tomute} with ID ${tomute.id}`)
  .addField("Muted By", `<@${message.author.id}> with ID ${message.author.id}`)
  .addField("Muted In", message.channel)
  .addField("Time Of Mute", message.createdAt)
  .addField("Length Of Mute", mutetime)
  .addField("Reason", mReason);
   let muteChannel = message.guild.channels.find(`name`, "mod-logs");
  if(!muteChannel) return message.channel.send(`Can't find mod-logs channel. Run ${prefix}setup for help.`);
  message.delete().catch(O_o=>{});
  muteChannel.send(muteEmbed);
//end of module
}

module.exports.help = {
  name: "mute"
}