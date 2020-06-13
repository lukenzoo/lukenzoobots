const Discord = require('discord.js');

exports.run = (client, message, args) => {
    
    let kullanucu;
    
    if (message.mentions.users.first()) {
      kullanucu = message.mentions.users.first();
    } else {
        kullanucu = message.author;
    }
    
    const avav = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle("Avatar Link")
        .setURL(kullanucu.avatarURL)
    .setImage(kullanucu.avatarURL)
    message.channel.sendEmbed(avav)
    
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["pp"],
  permLevel: 0
};

exports.help = {
  name: 'avatar',
  description: 'Belirtilen Kişinin Avatarını Atar.',
  usage: 'l!avatar <@kişi-etiket> & l!avatar'
};