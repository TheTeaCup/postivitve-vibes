const Discord = require('discord.js');
const db = require('quick.db')
const ms = require('parse-ms');

exports.run = async (client, message, args) => {
  
    let cooldown = 8.64e+7;
    let amount = 15;

    let lastDaily = await db.fetch(`lastDaily_${message.author.id}`);
  
    try {
      
    db.fetch(`userBalance_${message.member.id}`).then(i => {
      
 if (i === null) i = 0;

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
      
        db.set(`lastDaily_${message.author.id}`, Date.now());
        db.add(`userBalance_${message.member.id}`, amount).then(i => {
    
const dembed = new Discord.RichEmbed()
  .setAuthor("PS ▸ 🚀", client.user.avatarURL)
  .setColor(0xf24946)
  .setDescription("**X** | 🎁 ⬪ " + `Welcome back to **__PositiveBank__**! You have successfully earned your daily income!`)

  .addField("🢒 Account Holder | 📑", `**${message.author.username}**`, true)
  .addField("🢒 Daily Income | 💰", "`£` ▸ " + `**${amount}**`, true);
          
            message.channel.send(dembed)
        })}
    })
    } catch(err) {
    }
 }
