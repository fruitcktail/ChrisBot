module.exports = {
	name: 'level',
	description: 'shh secret command',
	execute(message, args, client) {
        const key = `${message.guild.id}-${message.author.id}`;
        message.channel.send(`You currently have ${client.points.get(key, "points")} points, and are level ${client.points.get(key, "level")}!`);
	},
};
