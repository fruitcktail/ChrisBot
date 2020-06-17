module.exports = {
	name: 'elephant',
	description: 'IF YOU GUESS THIS ANIMAL',
	execute(message) {
        message.channel.send("That's a no no word!");
        console.log(`message "no no word" sent.`);
	},
};