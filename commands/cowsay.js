 const Discord = require("discord.js");
const prefix = ".";
const cowsay = require("cowsay");
module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith(prefix)) return ;
  const cowList = ["beavis.zen",
    "bong",
    "bud-frogs",
    "bunny",
    "cheese",
    "cower",
    "daemon",
    "default",
    "doge",
    "dragon-and-cow",
    "dragon",
    "elephant-in-snake",
    "elephant",
    "eyes",
    "flaming-sheep",
    "ghostbusters",
    "goat",
    "hedgehog",
    "hellokitty",
    "kiss",
    "kitty",
    "koala",
    "kosh",
    "luke-koala",
    "mech-and-cow",
    "meow",
    "milk",
    "moofasa",
    "moose",
    "mutilated",
    "ren",
    "satanic",
    "sheep",
    "skeleton",
    "small",
    "squirrel",
    "stegosaurus",
    "stimpy",
    "supermilker",
    "surgery",
    "telebears",
    "turkey",
    "turtle",
    "tux",
    "vader-koala",
    "vader",
    "whale",
    "www"
  ];
  if (args.length === 0) {
    message.reply("you need to provide some text for the cow to say!");
  } else if (cowList.indexOf(args[0]) > -1) {
    const cow = args.shift();
    message.channel.send(`\`\`\`\n${cowsay.say({
      text: args.join(" ").slice(6),
      f: cow
    })}\n\`\`\``);
  } else {
    message.channel.send(`\`\`\`\n${cowsay.say({ text: args.join(" ").slice(6) })}\n\`\`\``);
  }
};

module.exports.help = {
  name: "cowsay"
}
