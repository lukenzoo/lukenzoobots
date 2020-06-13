const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');
require("moment-duration-format");
exports.run = async (bot, message, args) => {
   const seksizaman = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const istatistikler = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setFooter('LukenzooBot  \'Buyur Benim İstatistiklerim', bot.user.avatarURL)
  .addField("<a:check2:715872934224461835> **|** **Botun Sahibi**", "@Lєση.σƒ_ѕιℓєηт#5778 Ve @🙟Berkay🙝#5230")
  .addField("<a:check2:715872934224461835> **|** **Bellek kullanımı**", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + ' MB', true)  
  .addField("<a:check2:715872934224461835> **|** **Çalışma süresi**", seksizaman)
  .addField("<a:check2:715872934224461835> **|** **Kullanıcılar**" , bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
  .addField("<a:check2:715872934224461835> **|** **Sunucular**", bot.guilds.size.toLocaleString(), true)
  .addField("<a:check2:715872934224461835> **|** **Kanallar**", bot.channels.size.toLocaleString(), true)
   .addField('Seslideki Kullanıcı Sayısı:', message.guild.roles.size,true, message.guild.voiceChannel, true)
  .addField("<a:check2:715872934224461835> **|** **Discord.JS sürüm**", "v"+Discord.version, true)
  .addField("<a:check2:715872934224461835> **|** **Node.JS sürüm**", `${process.version}`, true)
  .addField("<a:check2:715872934224461835> **|** **Ping**", bot.ping+" ms", true)
  .addField("<a:check2:715872934224461835> **|** **Bot Davet**", " [Davet Et](https://discord.com/oauth2/authorize?client_id=712302418498551808&scope=bot&permissions=805829822)", )
 return message.channel.send(istatistikler);
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [ 'i', 'botbilgi'],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "LukenzooBot",
  usage: "istatistik"
};