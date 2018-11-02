const db = require('quick.db'),
      Discord = require('discord.js');
const fs = require('fs');
let prefix = "+"
module.exports = function(client) {  
  
    client.on('ready', () => {
    console.log('Discord Instance Launched');
    console.log(`--- Logged in as ${client.user.tag} ---`)
  });
  
      fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];

    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});
  
    client.on("message", async message => {
        if(message.author.bot) return;
        if(message.channel.type === 'dm') return ;
   db.add(`guildMessages_${message.guild.id}_${message.author.id}`, 1)
 



 
    
     if (message.content == `<@${client.user.id}>`) {
        const embed2 = new Discord.RichEmbed()
         .setTitle("You Ring?")
          .setColor("BLURPLE")
          .setDescription(`Need Help? then do ${prefix}help!`)
    
    message.channel.send(embed2)
  }
  
                                           
  if (message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();  

try{
let commandFile = require(`./commands/${command}.js`);
 commandFile.run(client, message, args);
if(!commandFile) return;
} catch (err) {
}
       
});
  
}
