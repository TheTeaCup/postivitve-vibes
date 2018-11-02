const db = require('quick.db');
const Discord = require("discord.js");
const { get } = require("snekfetch");
//let devs = ["338192747754160138","364007557045551106","297096161842429963"]
module.exports.run = async (client, message, args) => {
  
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
  message.channel.send(embed)
}
