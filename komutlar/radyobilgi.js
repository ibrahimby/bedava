const  ikilik  =  gerektirir ( 'discord.js' ) ;
ihracat . run  =  async  ( client ,  message ,  args )  =>  { 
let  önek  =  '!'
let  yardım  =  new  Discord . RichEmbed ( )  
. setAuthor ( ` $ { istemci . kullanıcı . kullanıcı adı } ` ,  istemci . kullanıcı . avatarURL )
. setColor ( 'KIRMIZI' )
. addField ( 'müzik_radyo | Radyo Komutları' , `
** r! radyo 1 **: FenomenFM 
** r! radyo 2 **: KralFM
** r! radyo 3 **: KralPopFM
** r! radyo 4 **: LoveFM
** r! radyo 5 **: MetroFM 
** r! radyo 6 **: Maksimum
** r! radyo 7 **: SuperFM
** r! radyo 8 **: JoytürkFM
** r! radyo 9 **: FenomenPop
** r! radyo 10 **: SlowtürkFm
** r! radyo 11 **: TaksimClup
** r! radyo 12 **: MegaFM
** r! radyo 13 **: Vokal
** r! radyo 14 **: ShowPoP
** r! radyo 15 **: PowerAkustik
** r! radyo 16 **: FenomenRap
** r! radyo 17 **: FenommenTürk
** r! radyo 18 **: İstanbulFM
** r! radyo 19 **: PowerDance
** r! radyo 20 **: PowerTürk
** r! radyo 21 **: PopularFm
** r! radyo 22 **: Palslow
** r! radyo 23 **: Radyopop
** r! radyo 24 **: Radyodamar
** r! radyo 25 **: Radyoviva
** r! radyo 26 **: Arabesttürk
** r! radyo 27 **: TürkFM
** r! radyo 28 **: HitFM
** r! radyo 29 **: HocalarFM
** r! radyo 30 **: PowertürkcoverFM
** r! radyo 30 **: ShowFM` )
. setFooter ( ` $ { mesaj . yazar . tag } Tarafından İstendi.` ,  mesaj . yazar . avatarURL )
. setThumbnail ( )
 mesaj . kanal . gönder ( yardım ) 
  } ;
ihracat . conf  =  {
  etkin : doğru ,  
  guildOnly : false , 
  takma adlar : [ "yardım" ] , 
  permLevel : 0
} ;
ihracat . help  =  {
  isim : 'yardım'
} ;