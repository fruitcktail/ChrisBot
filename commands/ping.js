module.exports = {
	name: 'ping',
	description: 'pong you fucker',
	execute(message) {
		message.channel.send('ping pong ding dong happy now');
        console.log(`ping`);
	},
};