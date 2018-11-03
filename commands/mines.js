const db = require('quick.db');
const Discord = require("discord.js");
const { get } = require("snekfetch");
const ms = require('parse-ms');
//let devs = ["338192747754160138","364007557045551106","297096161842429963"]
module.exports.run = async (client, message, args) => {
  
     let cooldown = 900000;
    

    let lastDaily = await db.fetch(`lastDailyss_${message.author.id}`);
  
    try {
     


  if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
      
        let timeObj = ms(cooldown - (Date.now() - lastDaily))

const lembed = new Discord.RichEmbed()
.setAuthor("PS ▸ 🚀", client.user.avatarURL)
 .setColor(0x36393e)
 .setFooter(`Uh-oh.. not again! | 🚀 🢒 PS`, message.author.avatarURL)
 .setDescription("**!** |  ⬪ Whoopsies! I have searched far and wide, but I have received an error..")
 
 .addField("🢒 Error Detected | ❗", "HEY! You will receive your daily income in | " + `**${timeObj.hours} hours, ${timeObj.minutes} minutes**`);
              return message.channel.send(lembed)
    } else {
     

  let mined = ['gold','fools_gold','diamonds','silver','quartz','lapis','ruby', 'iron', 'emerald', 'sapphire'];
  let numbers =['34','4','5','5','3','4','23','2','1','24','8','9']
      const slotOne = mined[Math.floor(Math.random() * mined.length)];
    var amount;
amount = numbers[Math.floor(Math.random() * numbers.length)];
if(isNaN(amount)) {
amount = parseInt(amount) 
}
  let user = message.author;
  let sections = new Discord.RichEmbed()
  .setTitle("Our Selection's Of Ore's")
  .setDescription(`Please think what the ore will be \n
\`${mined}\``)
  .setColor("#7289DA")
  if(!args[0])return message.channel.send(sections)
  
  if( slotOne === args[0] ){
   let yes = new Discord.RichEmbed()
   .setTitle("You were Right")
   .setDescription(`You got $\`${amount}\` from you're mining trip`)
   .setColor("00FF00")
   message.channel.send(yes)
    db.add(`userBalance_${user.id}`, amount * 1)
         db.set(`lastDailyss_${message.author.id}`, Date.now());
  } else {
    let no = new Discord.RichEmbed()
    .setTitle("You were wrong :(")
    .setDescription(`Sorry You didnt get the right Ore the right one was \`${slotOne}\``)
    .setColor("FF0000")
  message.channel.send(no)
    }
    }
       } catch(err) {
    }
}
    


