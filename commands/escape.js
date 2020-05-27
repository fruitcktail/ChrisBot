module.exports = {
	name: 'escape',
	description: 'assistance',
	execute(message) {
		message.channel.send('YOUR BRAIN NEEDS SOME ASSISTANCE');
        console.log(`Assistance given.`);
	},
};