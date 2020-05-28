module.exports = {
	name: 'where',
	description: 'Where was my thought process when I made this bot?',
	execute(message) {
        message.channel.send('Most likely in Teignmouth.');
        console.log(`message "Teignmouth" sent.`);
	},
};