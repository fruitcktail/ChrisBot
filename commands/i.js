module.exports = {
	name: 'i',
    description: 'love/hate relationship',
	execute(message, args) {
	console.log(args[0])
        if (args[0]=== "love") {
            if (args[1] == "you") {
                message.reply("I love you too!");
            }
            else if (message.content.includes("@")){
                message.reply("I'm not saying that!")
            }
            else {
                message.reply("I also " + args.join(" "));
            }
            return;
        }
        if (args[0] === "hate") {
            message.reply("I hate you too.");
            return;
        }
        else {
            message.channel.send("i-");
        }
        console.log("i-")
	},
};