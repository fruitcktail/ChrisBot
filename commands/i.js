module.exports = {
	name: 'i',
    description: 'love/hate relationship',
	execute(message, args) {
        if (args[0] === "love") {
            if (args[1] == "you") {
                message.reply("I love you too!");
            }
            else {
                message.reply("I agree, " + args[1] + " is great.");
            }
            return;
        }
        if (args[0] === "hate") {
            message.reply("Fuck you.");
            return;
        }
        else {
            message.channel.send("i-");
        }
	},
};