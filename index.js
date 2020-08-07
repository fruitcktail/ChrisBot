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

var chrisemotes = ['<:chris1:714946778318766090>', '<:chris2:714946786170634255>', '<:chris3:714946793166733332>', '<:chris4:714946800230072423>', '<:chris5:714956395409047635>'];
client.on('ready', () => {
  console.log(`we really do be logging in doe...`);
  client.user.setActivity('wubwub bass', { type: 'PLAYING' }); 
});
var exactmatches = ["uwu", "delete server", "please tone down"];
var exactmatchesresponses = ["cummy mpreg", "No!", "the weirdness guys"];
var othermatches = ["hysteria", "dead star", "acab", "overy", "ur so sexy", "gebii"];
var othermatchesresponses = ["Hysteria hurts my fingers!", "FFIIGGHHTTIINNGG YYOOUURRSSEELLFF", "1312!!", "ChrisBot officially ships Overy! (Action/Caw when)", "no don't ur so sexy aha", "gebii > overy"];
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
    
    client.points.math(key, "+", 10, "points")
    // Calculate the user's current level
    const curLevel = Math.floor(0.1 * Math.sqrt(client.points.get(key, "points")));
    
    // Act upon level up by sending a message and updating the user's level in enmap.
    if (client.points.get(key, "level") < curLevel) {
      console.log(message.author)
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
  // If it's not a real command, the bot will send an emoji in response.
  if (!client.commands.has(cmdName)) {
    var emoterand = Math.floor(Math.random() * 5);
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
