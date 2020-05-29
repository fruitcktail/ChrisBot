module.exports = {
	name: 'when',
	description: 'when will my pain end',
	execute(message) {
        message.channel.send('#soon');
        console.log(`message "#soon" sent.`);
	},
};