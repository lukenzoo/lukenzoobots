const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('Yazmam İçin Birşey Yazmalısın!');
           if (message.channel.send(`${mesaj}`)){

          } else return  
        
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yaz'],
  permLevel: 2
};

exports.help = {
  name: 'yaz',
  description: 'Bota Yazı Yazdırır.',
  usage: 'yaz [Bota yazdıralacak şey]'
};