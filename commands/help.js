module.exports = {
	name: 'help',
	description: 'Help',
	execute(message) {
		message.channel.send('I\'m ChrisBot, here to help. If you want a list of my useless commands, go to fruitcktail.github.io/ChrisBot. This is ChrisBot v1.0.2');
        console.log(`Help given.`);
	},
};