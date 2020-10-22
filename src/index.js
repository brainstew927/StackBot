const Discord = require('discord.js');
const client = new Discord.Client();
var fs = require("fs");

// commands that the bot will listen for
const commands = {
  searchError: "!error"
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    for(var x in commands){
      // if the message starts with one of the commands that are defined 
      // in the commands structure then proceed to execute the command.
      if(msg.content.startsWith(commands[x])){
        msg.reply("comando chiamato: " + commands[x]);
        // implementation of the commands logic
        switch(commands[x]){
          case "!error":
            let errorCode = msg.content.replace("!error", "");
            msg.reply("errore da cercare:" + errorCode)
            break;
        }
      }
    }
});

function setup(){
    var token = JSON.parse(fs.readFileSync("./auth.json")).token;
    client.login(token);
}

setup();