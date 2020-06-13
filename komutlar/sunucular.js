const Discord = require("discord.js")
exports.run = (client, message) => {
  const guildArray = client.guilds.array()
  while (guildArray.length) {
    const embed = new Discord.RichEmbed();
    const guilds = guildArray.splice(0,25);
    for (const guild of guilds) {
      embed.setColor('YELLOW')
      embed.setDescription(`Botun Bulunduğu Sunucu Sayısı :**${client.guilds.size}**`)
      embed.addField(`**${guild.name}** - Üyeleri : **${guild.memberCount}**`, guild.id)
      embed.setTitle('Botun bulunduğu sunucuların listesi!')
    }
    message.channel.send({embed: embed});
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "kullanıcı",
  permLevel: 0
};

exports.help = {
  name: "sunucular",
  description: "Botun Olduğu Sunucuları Gösterir.",
  usage: "sunucular"
};