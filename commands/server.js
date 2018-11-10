const moment = require("moment");

module.exports.run = (client, message, args) => {
    switch(args[0]){
        case 'p': //setting activity to "playing"
        if(message.author.id != '402522093557645322')return message.channel.send('You cant do that')
        client.user.setActivity(args.splice(1).join(' '), {type: 'playing'});
        message.channel.send('**Playing** status ready');
        break;
        case 'w': //setting activity to "watching"
        if(message.author.id != '402522093557645322')return message.channel.send('You cant do that')
        client.user.setActivity(args.splice(1).join(' '), {type: 'watching'});
        message.channel.send('**Wathcing** status ready')
        break;
        case 'l': //setting activity to "listening"
        if(message.author.id != '402522093557645322')return message.channel.send('You cant do that')
        client.user.setActivity(args.splice(1).join(' '), {type: 'listening'});
        message.channel.send('**Listening** status ready');
        break;
    }
}
module.exports.help = {
    name: "status",
}
