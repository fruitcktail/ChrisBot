module.exports = {
	name: 'lapisbot',
    description: 'talk to lapis!',
	execute(message, args) {
        if (args[0] === "goodbye") {
            message.channel.send("Oh, ok! Goodbye!");
            return;
        }
        if (args[0] === "hello") {
            message.channel.send("Hello! I'm LapisBot!");
            return;
        }
        if (args[0]=== "hi") {
        message.channel.send("Hey! I'm LapisBot!");
        return;
      }
       if (args[0]==='help' && args[1]==='please') {
       message.channel.send("No. I don\'t think I will. You should be more polite next time.");
       return;
      }
       if (args[0]==='help' && args[1]==='pls') {
       message.channel.send("No. I don\'t think I will. You should be more polite next time.");
       return;
      }
      if (args[0]==='help' && args[1]==='plz') {
       message.channel.send("No. I don\'t think I will. You should be more polite next time.");
       return;
      }
      if (args[0]=== "help") {
      message.channel.send("What\'s the magic word?");
      return;
      }
        if (args[0]=== "owo") {
        message.channel.send("Please don\'t say owo. It\'s deeply offensive in my native tounge!");
        return;
      }
        if (args[0]=== "uwu") {
        message.channel.send("Please don\'t say uwu. It\'s deeply offensive in my native tounge!");
        return;
      }
      if (args[0]=== "uwo") {
        message.channel.send("Please don\'t say uwo. It\'s deeply offensive in my native tounge!");
        return;
      }
      if (args[0]=== "owu") {
        message.channel.send("Please don\'t say owu. It\'s deeply offensive in my native tounge!");
        return;
      }
       if (args[0]==='whats' && args[1]==='up') {
       message.channel.send("If I say *the sky*, are you going to hurt me?");
       return;
      }
      if (args[0]==='what\'s' && args[1]==='up') {
       message.channel.send("If I say *the sky*, are you going to hurt me?");
       return;
      }
      else {
        elseresponse = ['Yes?', 'Mmmm.']
        var factno = Math.floor(Math.random() * elseresponse.length);
        message.channel.send(elseresponse[factno])  
        }
      }
};