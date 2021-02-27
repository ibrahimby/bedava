/////ÖGÜN SERT DESTEK EKİBİ VENQTM İLETŞİM:   OgünSert | Kobs#2738
const db = require('quick.db')
const Discord = require('discord.js');
const client = new Discord.Client();

const radyo = {
    fenomen : "http://fenomen.listenfenomen.com/fenomen/256/icecast.audio",
    kral    : "http://46.20.3.204/",
    kralpop : "http://46.20.3.201/;",
    lovefm    : "http://radioline.fm:8000/",
    metro   : "https://17703.live.streamtheworld.com/METRO_FM.mp3 ",
    maximum  : "http://37.59.205.232:9406/; ",
    superfm : "https://17733.live.streamtheworld.com/SUPER_FM.mp3",
    Joytürk    : "https://17703.live.streamtheworld.com/JOY_TURK2.mp3 ",
    fenomenpop : "http://fenomenoriental.listenfenomen.com/fenomenpop/128/icecast.audio",
    slowtürk:   "http://yayindaslowradyo.net:5050/; ",
    taksimclup: "http://cast1.taksim.fm:8016/; ",
    megafm: "http://46.105.35.48:9346/; ",
    Vokalfm: "http://37.247.98.8/stream/35/ ",
    showpop: "http://46.20.3.229/; ",
    powerakustik: " http://powerturkakustik.listenpowerapp.com/powerturkakustik/mpeg/icecast.audio",
    fenomenrap: "http://fenomenoriental.listenfenomen.com/fenomenrap/128/icecast.audio ",
    fenomentürk: "http://fenomenturk.listenfenomen.com/fenomenturk/128/icecast.audio  ",
    istanbulfm: " http://45.32.154.169:9300/;",
    powerdance: "http://powerdance.listenpowerapp.com/powerdance/mpeg/icecast.audio ",
    powertürk: "http://mpegpowerturk.listenpowerapp.com/powerturk/mpeg/icecast.audio",
    popularfm: "http://37.59.205.232:9344/; ",
    palslow: " http://shoutcast.radyogrup.com:2020/stream/1;",
    radyopop: "http://80.radyopop.com/stream/1/",
	radyodamar:"http://radyodamarfm.com:8404/; ",
	radyoviva:"http://46.20.3.231/;",
    arabesttürk: "http://91.121.48.78:9328/;",
    türkfm: "http://turkiyemfm.canliyayinda.com:8032/;",
    hitfm: "http://yayin.turkiletisim.com.tr:1094/;",
    hocalarfm: " http://95.173.185.128:9316/;",
    powertürkcover: "http://powerturkcover.listenpowerapp.com/powerturkcover/mpeg/icecast.audio",
    showradyo: "http://windows.showradyo.com.tr/;",
    
    

}

exports.run = function(bot, message, args) {
/////ÖGÜN SERT DESTEK EKİBİ VENQTM İLETŞİM:   OgünSert | Kobs#2738
message.delete(10000).catch(console.error);
    if (!message.member.voiceChannel) return message.reply("**💥 Sana bağlanmam için ilk önce sesli bir kanala katılmalısın. 💥**").then(m => m.delete(15000)).catch(console.error)
          else if (args[0].toLowerCase() === "fenomen" || args[0] === "1") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.fenomen);
                message.reply("🎧 | **Başarılı! 🎻`FenomenFM`🎻 çalınıyor. :musical_keyboard:**").then(m => m.delete(10000)).catch(console.error);
            })
         else if (args[0].toLowerCase() === "kral" || args[0] === "2") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.kral);
                message.reply("🎧 | **Başarılı! 🎻`KralFM`🎻 çalınıyor. :musical_keyboard:**").then(m => m.delete(10000)).catch(console.error);
            })
			 else if (args[0].toLowerCase() === "kralpop" || args[0] === "3") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.kralpop);
                message.reply("🎧 | **Başarılı! 🎻`KralpopFM`🎻 çalınıyor. :musical_keyboard:**").then(m => m.delete(10000)).catch(console.error);
            })
			 else if (args[0].toLowerCase() === "lovefm" || args[0] === "4") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.lovefm);
                message.reply("🎧 | **Başarılı! 🎻`LoveFM`🎻 çalınıyor. :musical_keyboard:**").then(m => m.delete(10000)).catch(console.error);
            })
			 else if (args[0].toLowerCase() === "metro" || args[0] === "5") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.metro);
                message.reply("🎧 | **Başarılı! 🎻`MetroFM`🎻 çalınıyor. :musical_keyboard:**").then(m => m.delete(10000)).catch(console.error);
            })
			 else if (args[0].toLowerCase() === "maximum" || args[0] === "6") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.maximum);
                message.reply("🎧 | **Başarılı! 🎻`MaximumFM`🎻 çalınıyor. :musical_keyboard:**").then(m => m.delete(10000)).catch(console.error);
            })
			 else if (args[0].toLowerCase() === "superfm" || args[0] === "7") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.superfm);
                message.reply("🎧 | **Başarılı! 🎻`SuperFM`🎻 çalınıyor. :musical_keyboard:**").then(m => m.delete(10000)).catch(console.error);
            })
			 else if (args[0].toLowerCase() === "Joytürk" || args[0] === "8") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.Joytürk);
                message.reply("🎧 | **Başarılı! 🎻`JoytürkFM`🎻 çalınıyor. :musical_keyboard:**").then(m => m.delete(10000)).catch(console.error);
            })
			 else if (args[0].toLowerCase() === "fenomenpop" || args[0] === "9") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.fenomenpop);
                message.reply("🎧 | **Başarılı! 🎻`FenomenpopFM`🎻 çalınıyor. :musical_keyboard:**").then(m => m.delete(10000)).catch(console.error);
            })
			 else if (args[0].toLowerCase() === "slowtürkpop" || args[0] === "10") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.slowtürkpop);
                message.reply("🎧 | **Başarılı! 🎻`SlowtürkpopFM`🎻 çalınıyor. :musical_keyboard:**").then(m => m.delete(10000)).catch(console.error);
            })
			 else if (args[0].toLowerCase() === "taksimclup" || args[0] === "11") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.taksimclup);
                message.reply("🎧 | **Başarılı! 🎻`TaksimclupFM`🎻 çalınıyor. :musical_keyboard:**").then(m => m.delete(10000)).catch(console.error);
            })
			 else if (args[0].toLowerCase() === "megafm" || args[0] === "12") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.megafm);
                message.reply("🎧 | **Başarılı! 🎻`MegaFM`🎻 çalınıyor. :musical_keyboard:**").then(m => m.delete(10000)).catch(console.error);
            })
			 else if (args[0].toLowerCase() === "Vokalfm" || args[0] === "13") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.Vokalfm);
                message.reply("🎧 | **Başarılı! 🎻`VokalFM`🎻 çalınıyor. :musical_keyboard:**").then(m => m.delete(10000)).catch(console.error);
            })
			 else if (args[0].toLowerCase() === "showpop" || args[0] === "14") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.showpop);
                message.reply("🎧 | **Başarılı! 🎻`ShowpopFM`🎻 çalınıyor. :musical_keyboard:**").then(m => m.delete(10000)).catch(console.error);
            })
			 else if (args[0].toLowerCase() === "powerakustik" || args[0] === "15") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.powerakustik);
                message.reply("🎧 | **Başarılı! 🎻`PowerakustikFM`🎻 çalınıyor. :musical_keyboard:**").then(m => m.delete(10000)).catch(console.error);
            })
			 else if (args[0].toLowerCase() === "fenomenrap" || args[0] === "16") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.fenomenrap);
                message.reply("🎧 | **Başarılı! 🎻`FenomenrapFM`🎻 çalınıyor. :musical_keyboard:**").then(m => m.delete(10000)).catch(console.error);
            })
			 else if (args[0].toLowerCase() === "fenomentürk" || args[0] === "17") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.fenomentürk);
                message.reply("🎧 | **Başarılı! 🎻`FenomentürkFM`🎻 çalınıyor. :musical_keyboard:**").then(m => m.delete(10000)).catch(console.error);
            })
			 else if (args[0].toLowerCase() === "istanbulfm" || args[0] === "18") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.istanbulfm);
                message.reply("🎧 | **Başarılı! 🎻`İstanbulFM`🎻 çalınıyor. :musical_keyboard:**").then(m => m.delete(10000)).catch(console.error);
            })
			 else if (args[0].toLowerCase() === "powerdance" || args[0] === "19") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.powerdance);
                message.reply("🎧 | **Başarılı! 🎻`PowerdanceFM`🎻 çalınıyor. :musical_keyboard:**").then(m => m.delete(10000)).catch(console.error);
            })
			 else if (args[0].toLowerCase() === "powertürk" || args[0] === "20") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.powertürk);
                message.reply("🎧 | **Başarılı! 🎻`PowertürkFM`🎻 çalınıyor. :musical_keyboard:**").then(m => m.delete(10000)).catch(console.error);
            })
			 else if (args[0].toLowerCase() === "popularfm" || args[0] === "21") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.popularfm);
                message.reply("🎧 | **Başarılı! 🎻`PopularFM`🎻 çalınıyor. :musical_keyboard:**").then(m => m.delete(10000)).catch(console.error);
            })
			 else if (args[0].toLowerCase() === "palslow" || args[0] === "22") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.palslow);
                message.reply("🎧 | **Başarılı! 🎻`PalslowFM`🎻 çalınıyor. :musical_keyboard:**").then(m => m.delete(10000)).catch(console.error);
            })
			 else if (args[0].toLowerCase() === "radyopop" || args[0] === "23") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.radyopop);
                message.reply("🎧 | **Başarılı! 🎻`RadyopopFM`🎻 çalınıyor. :musical_keyboard:**").then(m => m.delete(10000)).catch(console.error);
            })
			 else if (args[0].toLowerCase() === "radyodamar" || args[0] === "24") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.radyodamar);
                message.reply("🎧 | **Başarılı! 🎻`RadyodamarFM`🎻 çalınıyor. :musical_keyboard:**").then(m => m.delete(10000)).catch(console.error);
            })
			 else if (args[0].toLowerCase() === "radyoviva" || args[0] === "25") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.radyoviva);
                message.reply("🎧 | **Başarılı! 🎻`RadyovivaFM`🎻 çalınıyor. :musical_keyboard:**").then(m => m.delete(10000)).catch(console.error);
            })
			 else if (args[0].toLowerCase() === "arabesttürk" || args[0] === "26") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.arabesttürk);
                message.reply("🎧 | **Başarılı! 🎻`ArabesttürkFM`🎻 çalınıyor. :musical_keyboard:**").then(m => m.delete(10000)).catch(console.error);
            })
			 else if (args[0].toLowerCase() === "türkfm" || args[0] === "27") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.türkfm);
                message.reply("🎧 | **Başarılı! 🎻`TürkFM`🎻 çalınıyor. :musical_keyboard:**").then(m => m.delete(10000)).catch(console.error);
            })
			 else if (args[0].toLowerCase() === "hitfm" || args[0] === "28") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.hitfm);
                message.reply("🎧 | **Başarılı! 🎻`HitFM`🎻 çalınıyor. :musical_keyboard:**").then(m => m.delete(10000)).catch(console.error);
            })
			 else if (args[0].toLowerCase() === "hocalarfm" || args[0] === "29") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.hocalarfm);
                message.reply("🎧 | **Başarılı! 🎻`HocalarFM`🎻 çalınıyor. :musical_keyboard:**").then(m => m.delete(10000)).catch(console.error);
            })
			 else if (args[0].toLowerCase() === "powerturkcover" || args[0] === "30") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.powerturkcover);
                message.reply("🎧 | **Başarılı! 🎻`PowertürkcoverFM`🎻 çalınıyor. :musical_keyboard:**").then(m => m.delete(10000)).catch(console.error);
            })
			 else if (args[0].toLowerCase() === "showradyo" || args[0] === "31") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.showradyo);
                message.reply("🎧 | **Başarılı! 🎻`ShowradyoFM`🎻 çalınıyor. :musical_keyboard:**").then(m => m.delete(10000)).catch(console.error);
            })
			            
        } else if (args[0].toLowerCase() === "kapat" || args[0].toLowerCase() === "bitir") {
                message.member.voiceChannel.leave();
    return message.channel.send(`**Radyo kapatıldı** ${message.member.voiceChannel}.`);
        }
    }
    
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'radyo',
  description: '',
  usage: 'radyo'
};

  