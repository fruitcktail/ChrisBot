module.exports = {
	name: 'i',
    description: 'love/hate relationship',
	execute(message, args) {
        if (args[0] === "love") {
            message.reply("I love you too <:heartato:715184960096698398>");
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