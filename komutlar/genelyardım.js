const discord = require('discord.js');
const { RichEmbed } = require('discord.js');

exports.run = (client, message, args) => {
  const Mesaj = new RichEmbed()
    .setDescription("Botun Komutları Gösterilmektedir.")
    .setColor("RANDOM")
    .setTitle("GENEL YARDIM")
    .setURL("https://discordapp.com/oauth2/authorize?client_id=699905351037747210&scope=bot&permissions=805314622")
      .addField("l!talep", "Destek talebi açar.", true)
        .addField("l!sunucular", "Botun bulunduğu sunucuları listeler.", true)
        .addField("l!ip", "Minecraft Serverimizin İp Adresi.", true)
        .addField("l!davet", "Bot davet linki.", true)
        .addField("l!destek", "Bot Destek Sunucusu.", true)
      .addField("l!yetkiliyardım", "Yetkili Komutlarına Ulaşmak İçin", true)
  .setFooter("l!yardım")
    .setTimestamp()
    .setAuthor(message.author.username,message.author.avatarURL)


message.channel.send(Mesaj)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['genelyardım'],
  permLevel: 0
}

exports.help = {
  name: 'genelyardım'
}