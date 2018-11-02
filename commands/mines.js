const Discord = require('discord.js');
const db = require('quick.db');

module.exports.run = async (Koala, message, args) => {
     

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
  } else {
    let no = new Discord.RichEmbed()
    .setTitle("You were wrong :(")
    .setDescription(`Sorry You didnt get the right Ore the right one was \`${slotOne}\``)
    .setColor("FF0000")
  message.channel.send(no)
    }
}

