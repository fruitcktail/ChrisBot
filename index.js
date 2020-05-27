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

var chrisemotes = ['<:chris1:714946778318766090>', '<:chris2:714946786170634255>', '<:chris3:714946793166733332>', '<:chris4:714946800230072423>', '<:chris5:714956395409047635>']
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message', message => {
  if (message.content.includes("hysteria")) message.channel.send("Hysteria hurts my fingers!");
  if (!message.content.startsWith(prefix) || message.author.bot) return;
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