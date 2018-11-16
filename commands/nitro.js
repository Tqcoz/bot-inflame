const Discord = require("discord.js");
const a = ['0001', '2018', '0666', '0002']
module.exports.run = async (bot, message, args) => {
let role = message.guild.roles.find('name', '💸 Discord Nitro 💸')

      if(message.author.discriminator === a) {
          message.author.roleAdd(role.id)

}

module.exports.help = {
  name: "verifyNitro"
}
