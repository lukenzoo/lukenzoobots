const Discord = require('discord.js');

exports.run = (client, message, args) => {
    

    const avav = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle("Sunucu Avatar")
    .setImage(`${message.guild.iconURL} `)
        message.channel.sendEmbed(avav)


    
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["pp"],
  permLevel: 0
};

exports.help = {
  name: 'sunucuavatar',
  description: 'Sunucunun Avatarını Atar.',
  usage: 'l!sunucuavatar <@kişi-etiket> & l!sunucuavatar'
};