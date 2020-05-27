module.exports = {
	name: 'send',
	description: 'Why am I making myself suffer?',
	execute(message, args) {
		console.log(args);
        if(args[0] == "nudes") {
			var randint = Math.floor(Math.random() * 10);
			if(randint === 0) {
				message.channel.send("<:chrisxdom:714946807058399283>");
			}
			else {
				message.channel.send("No!");
			}
		}
		else {
			message.channel.send("What am I to send?");
		}
	},
};