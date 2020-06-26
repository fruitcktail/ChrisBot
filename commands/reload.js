module.exports = {
	name: 'reload',
	description: 'Reloads a command',
	args: true,
	execute(message, args) {
		message.channel.send("Crash Out.")
	},
};