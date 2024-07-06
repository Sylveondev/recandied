const fs = require('fs');

const commands = [];
const commandPath = './commands';
fs.readdir(commandPath, function (err, files) {
  if (err) {
    throw new Error(err);
  } else {
    files.forEach(function (file) {
      const { command } = require(`./commands/${file}`);
      commands.push(command);
    });
  }
});

setTimeout(function () {
    console.log(`[Registry] Registering the following commands: ${commands.map(c => c.name)}`);
    if (commands.length == 0) return console.log(`[Registry] No commands to register.`);
    const response = fetch(
        `https://discord.com/api/v8/applications/${process.env.clientid}/commands`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bot ${process.env.clienttoken}`,
            },
            method: "PUT",
            body: JSON.stringify(commands),
        },
    ).then(async response => {
        if (response.ok) {
            console.log("[Registry] Successfully registered commands");
        } else {
            const text = await response.text();
            console.error("[Registry] Error registering commands", text);
        }
    });
}, 1000);