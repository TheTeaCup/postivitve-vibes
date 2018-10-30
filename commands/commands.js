const db = require('quick.db');
const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
    const slots = ["I luv You! ❤","How are you today?","Status: Workin'"];
    const slot = ["RED","ORANGE","BLURPLE"]
    const slotOne = slots[Math.floor(Math.random() * slots.length)];
    const slotOn = slot[Math.floor(Math.random() * slot.length)];
  let embed = new Discord.RichEmbed()
  .setColor(slotOn)
  .setAuthor("Positivity x Commands",client.user.avatarURL)
  .setDescription(`\`+fight @user\`\n\`+hug @user\`\n\`+help\`\n\`+credits\``)
  .setFooter(`${slotOne}`,client.user.avatarURl)
  message.channel.send(embed)
}
