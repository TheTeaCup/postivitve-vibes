exports.run = (client) => {
  
    var clientonmessage = `
------------------------------------------------------
> Logging in...
------------------------------------------------------
Logged in as ${client.user.tag}
Working on ${client.guilds.size} servers!
${client.channels.size} channels and ${client.users.size} users cached!
I am logged in and ready to roll!
LET'S GO!
------------------------------------------------------
----------Bot created by Tea Cup#9999-----------
------------------------------------------------------
-----------------Bot's commands logs------------------`
    console.log(clientonmessage);
client.user.setPresence({ game: { name: `  🎃  ${client.users.size - 1} Users`,  type: 2 } });
 client.user.setStatus("idle")
  
    function setActivity() {
    let Gameinfo = [ "+help","Made by Tea Cup","I love you!",`🎃  ${client.users.size - 1} Users`];
    let DebugMode = "1";
            
    var Info = Gameinfo[Math.floor(Math.random() * Gameinfo.length)];
            
 client.user.setPresence({ game: { name: Info, type: 2 } });
            
    if(DebugMode === "1"){ console.log(`[Pos] Activity set to ( ${Info} )`); };
  };
    
  setInterval(setActivity, 1000 * 60 * 2); 

}
