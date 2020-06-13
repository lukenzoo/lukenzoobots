const discord = require('discord.js');
const { RichEmbed } = require('discord.js');

exports.run = (client, message, args) => {
  const Mesaj = new RichEmbed()
    .setDescription("Botun Komutları Gösterilmektedir.")
    .setColor("RANDOM")
    .setTitle("YARDIM")
    .setURL("https://discordapp.com/oauth2/authorize?client_id=699905351037747210&scope=bot&permissions=805314622")
      .addField("l!genelyardım", "Genel Komutlar.")
      .addField("l!yetkiliyardım", "Yetkili Komutları.")
      .addField("l!eğlenceyardım", "Eğlence Komutları.")
  .setFooter("Yapımcım !↬ㄔ♢L̷u̷k̷e̷n̷z̷o̷o̷R̷ ☭#9456")
    .setTimestamp()
    .setAuthor(message.author.username,message.author.avatarURL)


message.channel.send(Mesaj)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım'],
  permLevel: 0
}

exports.help = {
  name: 'yardım'
}