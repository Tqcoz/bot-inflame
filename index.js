const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
let purple = botconfig.purple;
let cooldown = new Set();
let cdseconds = 5;
fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on("ready", async () => {

  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  bot.user.setActivity('on join.inflamemc.com | .help', { url: 'https://minetex.xyz', type: 'playing'})

});

bot.on('channelCreate', async channel => {

  console.log(`${channel.name} has been created.`);

if (channel.type != 'text') return;
  let sChannel = channel.guild.channels.find(ch => ch.name === 'logs');
  sChannel.send(`The channel ${channel} has been created`);

});

bot.on("guildMemberAdd", member => {
var woolcomeChannel = member.guild.channels.find(ch => ch.name === 'welcome-spam');
  if (woolcomeChannel) {
     let WelcomeEmbed = new Discord.RichEmbed()
    .setTitle("Member has joined!")
    .setThumbnail(member.user.displayAvatarURL)
    .setDescription(`Welcome ${member} to InflameMC Public Discord, \nPlease follow the rules \n and I hope you adore your stay here!`)
    .setColor("#4286f4")
    .setFooter(`You are the ${member.guild.memberCount} member to join.`)
    .addField('Release Time', 'Nov 28th, 2018 | 6PM EST')
    .setTimestamp();
    woolcomeChannel.send(WelcomeEmbed) 
  }
});

bot.on("guildMemberRemove", member => {
var byecomeChannel = member.guild.channels.find(ch => ch.name === 'welcome-spam');
  if (byecomeChannel) {
     let ByemBed = new Discord.RichEmbed()
    .setTitle("Member has left!")
    .setThumbnail(member.user.displayAvatarURL)
    .setDescription(`Bye ${member.user}, Seeya next time!`)
    .setColor("#4286f4")
    .setFooter(`We now have ${member.guild.memberCount} members!`)
    .addField('Role', member.role.name) 
    .setTimestamp();
    byecomeChannel.send(ByemBed)
    member.send('InflameMC will miss you!')
  }
});  

bot.on("message", async message => {
const prefix = ".";
  if(message.author.bot) return;
  if(message.channel.type === "dm") {
    if(message.content.startsWith('.' + 'dm')) return;
      message.member.send('Hmm DM you asked?')
  }  
  if(!message.content.startsWith(prefix)) return;


  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

  setTimeout(() => {
    cooldown.delete(message.author.id)
  }, cdseconds * 1000)

});

bot.login(process.env.token);
