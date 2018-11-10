const moment = require("moment");
const discord = require("discord.js");

module.exports.run = (client, message, args) => {
    switch(args[0]){
        case 'p':
        if(message.author.id != '402522093557645322')return message.channel.send('You cant do that')
        client.user.setActivity(args.splice(1).join(' '), {type: 'playing'});
        message.delete();
        break;
        case 'w':
        if(message.author.id != '402522093557645322')return message.channel.send('You cant do that')
        client.user.setActivity(args.splice(1).join(' '), {type: 'watching'});
        message.delete();
        break;
        case 'l':
        if(message.author.id != '402522093557645322')return message.channel.send('You cant do that')
        client.user.setActivity(args.splice(1).join(' '), {type: 'listening'});
        message.delete();
        break;
    }
}
module.exports.help = {
    name: "s",
}
