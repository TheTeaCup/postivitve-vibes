const Discord = require('discord.js');
const db = require('quick.db');
exports.run = async (client, message, args) => {
  const slot = ["RED","DARK RED","ORANGE"]
  const slotOn = slot[Math.floor(Math.random() * slot.length)];
  let user = message.mentions.users.first() || message.author;
  db.fetch(`userBalance_${user.id}`).then(i => {
    if(!i)i = "0"
    let embed = new Discord.RichEmbed()
    .setTitle(`${user.username} x Credits`)
    .setColor(slotOn)
    .setThumbnail(user.avatarURL)
    .setDescription(`${user} has £ ${i} \nAnd N/A User Ranks`)
    message.channel.send(embed)
  })
}
