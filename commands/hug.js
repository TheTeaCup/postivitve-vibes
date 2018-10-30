const db = require('quick.db');
const Discord = require("discord.js");
const { get } = require("snekfetch");
module.exports.run = async (client, message, args) => {
     const slot = ["RED","DARK RED","ORANGE"]
     const slotOn = slot[Math.floor(Math.random() * slot.length)];
     const { body } = await get("https://nekos.life/api/v2/img/hug").catch(e => {
     Error.captureStackTrace(e);
     return e;
     });
  let user = message.mentions.users.first()
  if(!user)return message.channel.send("Please mention someone!")
  let embed = new Discord.RichEmbed()
  .setTitle("Hug!")
  .setImage(body.url)
  .setColor(slotOn)
  message.channel.send(`🤗 | ${message.author} Just Hugged ${user}`,embed)
}
