module.exports = {
	name: 'why',
	description: 'Why am I making myself suffer?',
	execute(message, args) {
        message.channel.send('*We can\'t all have what we want*');
        console.log(`Message "Hysteria hurts my fingers!" sent.`);
	},
};