//load node fs module and discord.js

const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
// Here we load the config.json file that contains our token and our prefix values. 
const config = require("./config.json");
// config.token contains the bot's token
// config.prefix contains the message prefix.

//enmap4points
const Enmap = require("enmap");
client.points = new Enmap({name: "points"});

client.commands = new Discord.Collection();

// readdirSync() Creates an array of all files in the "commands" directory, filter filters out non .js files
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

prefix = config.prefix

// load commands
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

var chrisemotes = ['<:chris1:775413580257689630>', '<:chris2:775413580212338708>', '<:chris3:775413580585107487>', '<:chris4:775413580807667720>', '<:chris5:775413580891553833>', '<:chris6:775413581021052958>',  '<:chris7:775413580782501918>',  '<:chris8:775413580832178206>'];
client.on('ready', () => {
  console.log(`we really do be logging in doe...`);
  client.user.setActivity('wubwub bass', { type: 'PLAYING' }); 
});
var exactmatches = ["delete server", "please tone down", "ave rights", "trans rights"];
var exactmatchesresponses = ["No!", "the weirdness guys", "No way!", "Trans Rights!"];
var othermatches = ["hysteria", "dead star", "acab", "havery", "ur so sexy", "gebii", "averannah"];
var othermatchesresponses = ["Hysteria hurts my fingers!", "FFIIGGHHTTIINNGG YYOOUURRSSEELLFF", "1312!!", "ChrisBot officially ships Havery! (Action/Caw when)", "no don't ur so sexy aha", "gebii > overy", "god that ship name fucking sucks"];
client.on('message', message => {
  if (message.author.bot) return;
  if (message.guild) {
    //points uwu
    // We'll use the key often enough that simplifying it is worth the trouble.
    const key = `${message.guild.id}-${message.author.id}`;

    // Triggers on new users we haven't seen before.
    client.points.ensure(`${message.guild.id}-${message.author.id}`, {
      user: message.author.id,
      guild: message.guild.id,
      points: 0,
      level: 1
    });
    var RandPoints = Math.floor(Math.random() * 10) + 5;
    client.points.math(key, "+", RandPoints, "points")
    // Calculate the user's current level
    const curLevel = Math.floor(0.1 * Math.sqrt(client.points.get(key, "points")));
    
    // Act upon level up by sending a message and updating the user's level in enmap.
    if (client.points.get(key, "level") < curLevel) {
      console.log(message.author);
      console.log(curLevel);
      client.points.set(key, curLevel, "level");
    }
  }
  var i;
  for (i = 0; i < exactmatches.length; i++) {
    if (message.content == exactmatches[i]) {
      message.channel.send(exactmatchesresponses[i]);
      console.log(exactmatchesresponses[i]);
      return;
    }
  }  
  for (i = 0; i < othermatches.length; i++) {
    if (message.content.includes(othermatches[i])) {
      message.channel.send(othermatchesresponses[i]);
      console.log(othermatchesresponses[i]);
      return;
    }
  } 
  if (!message.content.startsWith(prefix)) return;
   // These are the Prefix commands, you have to say "ChrisBot" to use them. Later ones might be hardcoded, I have no idea what I'm doing.
  const args = message.content.slice(prefix.length + 1).split(/ +/);
  // I'm a nice person, so I'm making it case insensitive.
  const cmdName = args.shift().toLowerCase();
  if (cmdName === "points") {
    const key = `${message.guild.id}-${message.author.id}`;
    return message.channel.send(`You currently have ${client.points.get(key, "points")} points, and are level ${client.points.get(key, "level")}!`);
  }
  if(cmdName === "leaderboard") {
    // Get a filtered list (for this guild only), and convert to an array while we're at it.
    const filtered = client.points.filter( p => p.guild === message.guild.id ).array();
  
    // Sort it to get the top results... well... at the top. Y'know.
    const sorted = filtered.sort((a, b) => b.points - a.points);
  
    // Slice it, dice it, get the top 10 of it!
    const top10 = sorted.splice(0, 10);
  
    // Now shake it and show it! (as a nice embed, too!)
    const embed = new Discord.MessageEmbed()
      .setTitle("Leaderboard")
      .setAuthor(client.user.username, message.guild.iconURL())
      .setDescription("Our top 10 points leaders!")
      .setColor(0x00AE86);
    for(const data of top10) {
      try {
        embed.addField(client.users.cache.get(data.user).tag, `${data.points} points (level ${data.level})`);
      } catch {
        embed.addField(`<@${data.user}>`, `${data.points} points (level ${data.level})`);
      }
    }
    return message.channel.send({embed});
  }
  // If it's not a real command, the bot will send an emoji in response.
  if (!client.commands.has(cmdName)) {
    var emoterand = Math.floor(Math.random() * chrisemotes.length);
    message.channel.send(chrisemotes[emoterand])
    return;
  }
  try {
    client.commands.get(cmdName).execute(message, args, client);
  } catch (error) {
    //ChrisBot done goofed
  console.error(error);
  message.reply('I fucked up that ~~bassline~~ command, try again?');
  }
});

client.login(config.token);
