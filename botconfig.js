module.exports = {
  Admins: ["Harsh2004k#3826"], // Admins of the bot, I don't know what this do. -Darren.
  ExpressServer: true, // If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || "/", // Default prefix, Server Admins can change the prefix
  Port: 4200, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/r9w9pgMvpm", // Support Server Link
  Token: process.env.Token || "OTg2MTgwNjk3NjMyOTM1OTQ2.G33fuP.VQS6-ycJn3aPa1zql0zVwzSdSf2XP9GSsKG0rE", // Discord Bot Token
  ClientID: process.env.Discord_ClientID || "986180697632935946", // Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "LE1-OOhKEI3fXnBZzK7CyDQPbwuEphkB", // Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], // Discord OAuth2 Scopes
  ServerDeafen: true, // If you want bot to stay deafened
  DefaultVolume: 100, // Sets the default volume of the bot, You can change this number anywhere from 1 to 9007199254740991 (JS Integer limit. If you do set it to that, you're a monster.)
  CallbackURL: "/api/callback", // Discord API Callback url. Do not touch it if you don't know what you are doing. All you need to change for website to work is on line 20.
  "24/7": false, // Make the bot stays in VC 24/7 (when you reboot the bot will **not** automatically rejoin.)
  CookieSecret: "MrRobot123!", // A cookie for you, cookie for me. make sure you change this value!
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif", // URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  EmbedColor: "RANDOM", // Color of most embeds | Custom Hex value are supported. I.e: "#36393F"
  Permissions: 2205281600, // Bot Inviting Permissions
  Website: process.env.Website || "http://localhost", // Website where it is hosted at includes http or https || Use "0.0.0.0" if you using Heroku || Do not include /api/callback. Just the website url. I.e. "https://foo.bar"
  // If you get invalid oauth, make sure on the discord developer page you set the oauth url to something like: https://example.com/api/callback.

  Presence: {
    status: "online", // You can show online, idle, and dnd
    name: "Hentai", // The message shown
    type: "WATCHING", // PLAYING, WATCHING, LISTENING, STREAMING
  },

  // You need a lavalink server for this bot to work!!!!
  // Lavalink server; public lavalink -> https://lavalink-list.darrennathanael.com/; create one yourself -> https://darrennathanael.com/post/how-to-lavalink
  Lavalink: {
    id: "Main", //- Used for indentifier. You can set this to whatever you want.
    host: "lavalink-replit.mrrobot61.repl.co", //- The host name or IP of the lavalink server.
    port: 443, // The port that lavalink is listening to. This must be a number!
    pass: "MrRobot123!", //- The password of the lavalink server.
    secure: true, // Set this to true if the lavalink uses SSL. if not set it to false.
    retryAmount: 1000, //- The amount of times to retry connecting to the node if connection got dropped.
    retryDelay: 10, //- Delay between reconnect attempts if connection is lost.
  },
  // Spotify Integration, allows you to enter a spotify link.
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "c6ac73522bc44134b63ff81f7ac53edc", // Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "e422afce2cc74d099d4fed7a7a93171f", // Spotify Client Secret
  },
};
