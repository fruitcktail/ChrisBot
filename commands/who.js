module.exports = {
	name: 'who',
	description: 'WHO?',
	execute(message, args) {
        if (args[0] == null) {
            /* File should wrapped in an array! */
            console.log("who?");
            message.channel.send({
            files: ['./images/who.mp4']
        });
        }   
        else if (args[0] == "is" && args[1] == "the" && args[2] == "best" && args[3] == "member" && args[4] == "of" && args[5] == "the" && args[6] == "server") {
            message.channel.send("Ave!")
        }
        else {
            message.channel.send("Either Matt or Dom, can't remember.")
        }
	},
};