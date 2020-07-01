//load node fs module and discord.js

const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
// Here we load the config.json file that contains our token and our prefix values. 
const config = require("./config.json");
// config.token contains the bot's token
// config.prefix contains the message prefix.

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
  client.user.setActivity('wubwub bass');   
});
var exactmatches = ["uwu", "delete server"];
var exactmatchesresponses = ["cummy mpreg", "No!"];
var othermatches = ["hysteria", "dead star", "acab", "overy", "ur so sexy", "cave"];
var othermatchesresponses = ["Hysteria hurts my fingers!", "FFIIGGHHTTIINNGG YYOOUURRSSEELLFF", "1312!!", "ChrisBot officially ships Overy! (Action/Caw when)", "no don't ur so sexy aha", "<@643545858473852928> please let me play that again! I love the bassline."];
client.on('message', message => {
  if (message.author.bot) return;
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
    client.commands.get(cmdName).execute(message, args);
  } catch (error) {
    //ChrisBot done goofed
  console.error(error);
  message.reply('I fucked up that ~~bassline~~ command, try again?');
  }
});

client.login(config.token);