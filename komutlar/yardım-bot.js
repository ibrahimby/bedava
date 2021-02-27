 const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const juke = new Discord.RichEmbed()
    .setColor('GOLD')
    .setAuthor(`xxcoo_radyo | Bot Komutları`, client.user.avatarURL) 
      .setDescription('**[Discord](https://discord.gg/j28uRUG)**')/////xxcoo tarafından yapıldı
.setThumbnail(client.user.avatarURL)/////xxcoo tarafından yapıldı
      .addField('**💥Komutlar:**', '`r!radyo <sayı>: radyoyu kullanmıza yarar`, `r!radyo kapat: radyoyu kapatmanıza yarar`, `r!help : Radyo Bilgi`')/////ÖGÜN SERT DESTEK EKİBİ VENQTM İLETŞİM:   OgünSert | Kobs#2738
    .setFooter(``, client.user.avatarURL)/////xxcoo tarafından yapıldı
    .setTimestamp()/////xxcoo tarafından yapıldı
    message.channel.send(juke).catch()/////xxcoo tarafından yapıldı

};/////xxcoo tarafından yapıldı


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'yardım',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
};