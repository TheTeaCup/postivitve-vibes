const Discord = require('discord.js');
const db = require('quick.db');
exports.run = async (client, message, args) => {
     const slot = ["RED","DARK RED","ORANGE"]
    const slotOn = slot[Math.floor(Math.random() * slot.length)];
 
  let user = message.mentions.users.first() || message.author;
  let userank = await db.fetch(`guildMessages_${message.guild.id}_${message.author.id}`)
  if(!userank)userank = "0"
  db.fetch(`userBalance_${user.id}`).then(i => {
    if(!i)i = "0"
    let embed = new Discord.RichEmbed()
    .setTitle(`${user.username} x Credits`)
    .setColor(slotOn)
    .setThumbnail(user.avatarURL)
    .setDescription(`${user} has **£ ${i}** \n\nAnd **${userank} User Ranks**\n\n[Profile](https://positivevibes.glitch.me/profile/${user.id})`)
    message.channel.send(embed)
  })
  
  
}
