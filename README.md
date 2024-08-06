# Recandied
Recandied is a simplistic discord bot that displays Eeveelution images and some other commands. This bot functions through http interactions rather than the gateway, making this bot really lightweight as it doesn't need to load any events.

# Setting up
### Perquisites
* [node.js 18 or newer](https://nodejs.org) is needed to run this bot.
* You need a vps or web server to host this bot. It's the easiest way tbh.

### Hosting
To get Recandied up and running, you need to follow these steps. By self hosting Recandied, it's assumed you have a vps, and you know what you're doing. If you plan on running Recandied locally, you need to setup a https tunnel or Discord will not allow you to run step 5.
The steps are as followed:
1. Setup your vps/web server, and fork the Recandied's source code.
2. Create a new app on the [Discord developer website](https://discord.com/developers).
3. Configure the `example.env` file, copy the needed values from the site to the variables.
4. Rename `example.env` to `.env`.
5. Modify **Interactions Endpoint URL** on the developer website to your web server's url.
6. Run `npm i` to install Recandied's dependencies.
7. Run `npm run register` to register all of Recandied's slash commands and context menus.
8. Run `npm start` to start the bot.

**Note:** In most cases, the bot will not restart if the process dies due to a crash or any other reasons. In this case you should install **pm2** on your vps as it will restart Recandied in the case of a crash. [You can set pm2 up here](https://pm2.keymetrics.io/).

# Contributing
### Pull requests
Contributing to Recandied requires making a pull request. To do so, fork this repository. When you are done, make a pull request. 

### Adding art
Every image Recandied has is stored in the `images.json` file. Changing these values will add and remove images from Recandied's responses. Images must be links to other websites as http apps cannot post images to the cdn (at least, not easily). You can use sites like [imgbox](https://imgbox.com) or Google photos to do so.

### Adding commands
You can add commands by creating a new file in the `commands` folder. You can use other commands as templates for your command.