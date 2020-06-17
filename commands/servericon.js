module.exports = {
	name: 'servericon',
	description: 'Help',
	execute(message) {
		message.channel.send(message.guild.iconURL());
        console.log(`Icon.`);
	},
};