module.exports = {
	name: 'rate',
	description: 'rate ur shit',
	execute(message, args) {
        if (args[0] == "ave" || args[0] == "avery") {
            message.channel.send("I'd give Ave a 0/10!")
        }
        else if (args[0] == "ChrisBot") {
            message.channel.send("I'd give myself four stars out of five.")
        }
        else {
            var randno = Math.floor(Math.random() * 11);
            message.channel.send("I'd give that a " + randno + "/10");
        }
	},
};