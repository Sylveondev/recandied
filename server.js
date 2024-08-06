const { verifyKeyMiddleware, InteractionType, InteractionResponseType } = require('discord-interactions');
const express = require('express');
const fs = require('fs');

// Setup the bot
const app = express();

// Fetch all commands
const commands = [];
const commandPath = './commands';
fs.readdir(commandPath, (err, files) => {
  if (err) {
    throw new Error(err);
  } else {
    files.forEach(file => {
      const { command, run } = require(`./commands/${file}`);
      commands.push({ cmdMeta: command, runCmd: run });
    });
  }
});

app.get('/icon', (req, res) => res.sendFile('./docs/recandied.png'));

app.get('/candybot', (req, res) => {
  res.send(`Hello, this is the Recandied bot interaction endpoint. This is practically useless if you're not self hosting, sorry.`);
});

app.post('/candybot', verifyKeyMiddleware(process.env["clientpubkey"]), (req, res) => {
    const message = req.body;
    
    if (message.type == InteractionType.PING) {
        console.log(`[Interaction] Recieved ping request`);
        res.send({
            type: InteractionResponseType.PONG
        })
    }
    else if (message.type === InteractionType.APPLICATION_COMMAND) {
        console.log(`[Interaction] Recieved application command request`);
        const command = commands.findIndex(p => p.cmdMeta.name === message.data.name);
        if (command > -1) {
            commands[command].runCmd(message, res);
        }
        else {
            res.status(400).send({ error: `Unknown command` })
        }
    }
    else {
        console.log(`[Interaction] Recieved unknown request`);
        res.status(400).send({ error: `Unknown type` });
    }
})

app.listen(process.env["port"], () => {
    console.log(`[Listener] Now listening on port ${process.env["port"]}.`);
});