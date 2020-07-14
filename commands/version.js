module.exports = {
	name: 'version',
	description: 'Where was my thought process when I made this bot?',
	execute(message) {
        message.channel.send('This is version **1.2.1**');
        console.log(`version no. sent`);
	},
};