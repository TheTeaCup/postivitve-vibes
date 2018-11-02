// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', async(req, res) => {
let guuild = client.guilds.get("372145652798324738")
  res.render(process.cwd() + '/views/index.ejs', {guild,bot:client,user:req.isAuthenticated() ? req.user : null });
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});



var bodyParser = require('body-parser');

// http://expressjs.com/en/starter/basic-routing.html

const  Discord = require('discord.js'),
     
  client = new Discord.Client({
    fetchAllMembers: true
  });
let bot = client;
const db = require("quick.db")

const passport = require("passport");
const session = require("express-session");
const MemoryStore = require("memorystore")(session);
const Strategy = require("passport-discord").Strategy;
const helmet = require("helmet");
let guild;

 
	passport.serializeUser((user, done) => {
		done(null, user);
	});
	passport.deserializeUser((obj, done) => {
		done(null, obj);
	});
	passport.use(new Strategy({
		clientID: "---",
    clientSecret: "---",
    callbackURL: "https://positivevibes.glitch.me/callback",
    scope: ["identify", "guilds"]
	}, (accessToken, refreshToken, profile, done) => {
		process.nextTick(() => {
			return done(null, profile);
		});
	}));
  app.use(session({
    store: new MemoryStore({ checkPeriod: 86400000 }),
    secret: "FROPT",
    resave: false,
    saveUninitialized: false
  }));

  app.use(passport.initialize());
  app.use(passport.session());
  app.use(helmet());
  app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
  }));
const path = require('path')
  app.engine("html", require("ejs").renderFile);
	app.set('views', path.join(__dirname, 'views'));
  var bodyParser = require("body-parser");
  app.use(bodyParser.json()); 
  app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
  })); 
  app.use(bodyParser.json()); 

  function checkAuth(req, res, next) {
    if (req.isAuthenticated()) return next();
    req.session.backURL = req.url;
    res.redirect("/login");
  }

  app.get('/callback',
        passport.authenticate('discord', { failureRedirect: '/404' }),
        (req, res) => { 
               if (req.user.id === "338192747754160138") {
      req.session.isAdmin = true;
    } else {
      req.session.isAdmin = false;
    }
    res.redirect('/dashboard') } )
   
    

  app.get("/logout", function(req, res) {
    req.session.destroy(() => {
      req.logout();
      res.redirect("/"); //Inside a callback… bulletproof!
    });
  });

   app.get("/login", (req, res, next) => {
  res.redirect (`https://discordapp.com/api/oauth2/authorize?client_id=504806979273883648&redirect_uri=https%3A%2F%2Fpositivevibes.glitch.me%2Fcallback&response_type=code&scope=identify%20guilds`)
})
  

   app.get("/dashboard",  checkAuth, async(req, res) => {
    const perms = Discord.EvaluatedPermissions;
     let user =  req.isAuthenticated() ? req.user : null
     
   let desc = await db.fetch(`userDesc_${user.id}`)
   if(desc === null)desc = "";
   let co = await db.fetch(`userColor_${user.id}`)
   if(co === null)co="";
      
    res.render(process.cwd() + '/views/dashboard.ejs', {perms,bot:client,user: req.isAuthenticated() ? req.user : null,desc,co});
  });

    app.post("/dashboard", checkAuth,async (req, res) => {
     
      let user = req.isAuthenticated() ? req.user : null
      db.set(`userDesc_${user.id}`,req.body.desc)
      db.set(`userColor_${user.id}`,req.body.color)
      res.redirect("https://positivevibes.glitch.me/dashboard");
      })

app.get("/profile/:guildID", async(req,res) => {
   let user =  req.isAuthenticated() ? req.user : null
     let co = await db.fetch(`userColor_${req.params.guildID}`)
   if(co === null)co="#DCE0EB";
  

  await client.fetchUser(req.params.guildID).then(async use => {
       let sz = "15pt"
       let ava = use.displayAvatarURL.split('?')[0]
       let d = await db.fetch(`userDesc_${req.params.guildID}`)
       if(!d)d = "Not Set";
 let p;
 let e = use
 let status;
 let pic;
 let username =e.username
 
  if(e.id === "338192747754160138")status = `Creator of Positivty Bot`
  if(e.id === "338192747754160138")pic = `https://discordapp.com/assets/779fb0d7cf9afd16249ff8f82f0450e4.svg`
  if(e.id === "242832450890366977")status = `Creator of Positive Vibes`
  if(e.id === "242832450890366977")pic = `https://discordapp.com/assets/779fb0d7cf9afd16249ff8f82f0450e4.svg`
  
  if(e.id === "251221845792129025")status = `${username} is a Staff Member`
  if(e.id === "285178967370235904" )status = `${username} is a Staff Member`
  if(e.id === "384848967470415875")status = `${username} is a Staff Member`
  if(e.id === "371305790465900544")status = `${username} is a Staff Member`
  if(e.id === "224322955713314818")status = `${username} is a Staff Member`
  if(e.id === "190008862865227776")status = `${username} is a Staff Member`
  if(e.id === "219034569607741440")status = `${username} is a Staff Member`
  if(e.id === "157239723381751808")status = `${username} is a Staff Member`
  if(e.id === "303012320546914316")status = `${username} is a Staff Member`
  if(e.id === "223470418688737281")status = `${username} is a Staff Member`
  if(e.id === "242384591527084033")status = `${username} is a Staff Member`
  if(e.id === "242384591527084033")status = `${username} is a Staff Member`
  if(e.id === "242384591527084033")status = `${username} is a Staff Member`
  if(e.id === "242384591527084033")status = `${username} is a Staff Member`
  if(e.id === "252314853820203010")status = `${username} is a Staff Member`
  if(e.id === "392092015283929130")status = `${username} is a Staff Member`
  if(e.id === "162672710005030912")status = `${username} is a Staff Member`
  if(e.id === "298618155281154058")status = `${username} is a Staff Member`
       
  if(e.id === "251221845792129025")pic = "https://cdn.discordapp.com/emojis/447098955004772353.png?v=1"
  if(e.id === "285178967370235904")pic = "https://cdn.discordapp.com/emojis/447098955004772353.png?v=1"
  if(e.id === "384848967470415875")pic = "https://cdn.discordapp.com/emojis/447098955004772353.png?v=1"
  if(e.id === "371305790465900544")pic = "https://cdn.discordapp.com/emojis/447098955004772353.png?v=1"
  if(e.id === "224322955713314818")pic = "https://cdn.discordapp.com/emojis/447098955004772353.png?v=1"     
  if(e.id === "190008862865227776")pic = "https://cdn.discordapp.com/emojis/447098955004772353.png?v=1"
  if(e.id === "219034569607741440")pic = "https://cdn.discordapp.com/emojis/447098955004772353.png?v=1"
  if(e.id === "157239723381751808")pic = "https://cdn.discordapp.com/emojis/447098955004772353.png?v=1"
  if(e.id === "303012320546914316")pic = "https://cdn.discordapp.com/emojis/447098955004772353.png?v=1"
  if(e.id === "223470418688737281")pic = "https://cdn.discordapp.com/emojis/447098955004772353.png?v=1"
  if(e.id === "242384591527084033")pic = "https://cdn.discordapp.com/emojis/447098955004772353.png?v=1"
  if(e.id === "242384591527084033")pic = "https://cdn.discordapp.com/emojis/447098955004772353.png?v=1"
  if(e.id === "242384591527084033")pic = "https://cdn.discordapp.com/emojis/447098955004772353.png?v=1"
  if(e.id === "242384591527084033")pic = "https://cdn.discordapp.com/emojis/447098955004772353.png?v=1"
  if(e.id === "252314853820203010")pic = "https://cdn.discordapp.com/emojis/447098955004772353.png?v=1"
  if(e.id === "392092015283929130")pic = "https://cdn.discordapp.com/emojis/447098955004772353.png?v=1"
  if(e.id === "162672710005030912")pic = "https://cdn.discordapp.com/emojis/447098955004772353.png?v=1"
  if(e.id === "298618155281154058")pic = "https://cdn.discordapp.com/emojis/447098955004772353.png?v=1"
 
   res.render(process.cwd() + '/views/profile.ejs', {bot:client,user: req.isAuthenticated() ? req.user : null,co,d,p,use,ava,status,pic})
})
});
app.get("/leaderboard", async(req,res) => {
     let user =  req.isAuthenticated() ? req.user : null
       db.startsWith(`guildMessages_372145652798324738`,{ sort: '.data'  }).then(async resp => {
    let guild = client.guilds.get("372145652798324738")
    resp.length = 15
         let  bal;
         res.render(process.cwd() + '/views/leaderboard.ejs', {bot:client,user: req.isAuthenticated() ? req.user : null,resp,out:bal,db})
        
       });
     });

client.login("_TOKEN_");
const discord = require("./discord.js")(client)
