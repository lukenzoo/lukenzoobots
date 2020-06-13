const discord = require('discord.js');
const { RichEmbed } = require('discord.js');

exports.run = (client, message, args) => {
  const Mesaj = new RichEmbed()
    .setDescription("Botun Komutları Gösterilmektedir.")
    .setColor("RANDOM")
    .setTitle("EĞLENCE YARDIM")
    .setURL("https://discordapp.com/oauth2/authorize?client_id=699905351037747210&scope=bot&permissions=805314622")
      .addField("l!sunucuavatar", "Sunucunun Avatırını Göst", true)
      .addField("l!avatar", "Belirtilen Kişinin Avatarını Gösterir.", true)
      .addField("l!matematik", "Belirtilen İşlemi Yapar.", true)
      .addField("l!yaz", "Bota Yazı Yazdırır.", true)
  .setFooter("l!yardım")
    .setTimestamp()
    .setAuthor(message.author.username,message.author.avatarURL)


message.channel.send(Mesaj)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['eğlenceyardım'],
  permLevel: 0
}

exports.help = {
  name: 'eğlenceyardım'
}