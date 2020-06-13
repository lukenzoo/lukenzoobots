const discord = require('discord.js');
const { RichEmbed } = require('discord.js');

exports.run = (client, message, args) => {
  const Mesaj = new RichEmbed()
    .setDescription("Botun Komutları Gösterilmektedir.")
    .setColor("RANDOM")
    .setTitle("YETKİLİ YARDIM")
    .setURL("https://discordapp.com/oauth2/authorize?client_id=699905351037747210&scope=bot&permissions=805314622")
      .addField("l!botkoruma", "Sunucuya Katılan Botları Otomatik Atılmasını Sağlar.", true)
      .addField("l!ban", "Belirlediğiniz Kullanıcıyı Banlarsınız.", true)
      .addField("l!kick", "İstediğiniz Kişiyi Sunucudan Atar.", true)
      .addField("l!oylama", "Oylama Yapmanızı Sağlar.", true)
      .addField("l!temizle", "Belirlediğiniz Miktarda Mesaj Siler.", true)
      .addField("l!unmute", "Etiketlenen Kişinin Mutesini Geri Alır.", true)
      .addField("l!emojilikayıt", "Emojiye Tıklanınca Otomatik Rol (Üye) Verir.", true)
      .addField("l!duyuru", "Duyurunuz Güzel Bir Hale Getirir.", true)
      .addField("l!mute", "Etiketlediğiniz Kişiye Belirttiğiniz Süre Kadar Mute Atar.", true)
      .addField("l!eğlenceyardım", "Eğlence Komutlarına Ulaşmak İçin", true)
  .setFooter("l!yardım")
    .setTimestamp()
    .setAuthor(message.author.username,message.author.avatarURL)


message.channel.send(Mesaj)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yetkiliyardım'],
  permLevel: 0
}

exports.help = {
  name: 'yetkiliyardım'
}