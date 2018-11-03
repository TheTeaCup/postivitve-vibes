const db = require('quick.db');
const Discord = require("discord.js");
const { get } = require("snekfetch");
const ms = require('parse-ms');
//let devs = ["338192747754160138","364007557045551106","297096161842429963"]
module.exports.run = async (client, message, args) => {
  
     let cooldown = 900000;
    

    let lastDaily = await db.fetch(`lastDailys_${message.author.id}`);
  
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
  
      const slot = ["You shot a Deer!","You shot a Bear","You caught, uh.. whats this?","You went deep into the mountains, just to fall down a hill..","Can you hold a Gun?\n(YOU just shot a trash can)","\"What are you doing?\", you shot at a teeny,tiney bird"]
    const slotOne = slot[Math.floor(Math.random() * slot.length)];
    let numbers =['3','4','5','5','3','4','2','2','1','2','8','9']
     
    var amount;
amount = numbers[Math.floor(Math.random() * numbers.length)];
if(isNaN(amount)) {
amount = parseInt(amount) 
}
  if(slotOne === "Can you hold a Gun?\n(YOU just shot a trash can)")amount = "1"
  let embed = new Discord.RichEmbed()
  .setTitle("The Great Hunt!")
  .setColor("BROWN")
  .setDescription(`${slotOne}\nAnd got paid \`${amount}\``)
   db.add(`userBalance_${message.author.id}`, amount * 1)
       db.set(`lastDailys_${message.author.id}`, Date.now());
  message.channel.send(embed)
}
 } catch(err) {
    }
}
