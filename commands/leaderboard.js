const Discord = require('discord.js');
const db = require('quick.db');


exports.run = async (client, message, args) => {
    
    const slot = ["RED","DARK RED","ORANGE"]
    const slotOn = slot[Math.floor(Math.random() * slot.length)];
    let embed = new Discord.RichEmbed()
    .setThumbnail(message.guild.iconURL)
    .setDescription(`Go to https://positivevibes.glitch.me/leaderboard`)
    .setColor("#00CC99")
    message.channel.send(embed)
}
