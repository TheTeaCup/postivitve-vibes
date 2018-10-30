const db = require('quick.db');
const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
  const slots = ["I luv You! ❤","Invite Me!","How are you today?","Status: Workin'"];
  const slot = ["RED","ORANGE","BLURPLE"]
  const slotOne = slots[Math.floor(Math.random() * slots.length)];
  const slotOn = slot[Math.floor(Math.random() * slot.length)];
  let prefix = "+";
  let devs = ["338192747754160138"]
  let em
  if (devs.includes(message.author.id)) em = "Hi Dev!"
  
 let embed = new Discord.RichEmbed()
 .setColor(slotOn)
 .setTitle("Welcome to Positivity"+ ` ${em}`)
 .setDescription(`Hi, i'm Positivity! I was made by <@338192747754160138> For Positive Vibes!`)
 .addField("Commands",`${prefix}commands`,true)
 .addField("Website",`[Positivity](https://positivevibes.glitch.me/)`)
 .setThumbnail(message.author.avatarURL)
 .setFooter(`${slotOne}`,client.user.avatarURL)
 message.channel.send(embed)
}
