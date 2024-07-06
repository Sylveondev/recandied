const { EmbedBuilder } = require("@discordjs/builders")
const { InteractionResponseType } = require("discord-interactions")
const fs = require('fs');

module.exports = {
    command: {
        name: "about",
        description: "Sends info about the bot",
        type: 1,
        integration_types: [0, 1],
        contexts: [0, 1, 2]
    },

    /**
     * Runs the command.
     * @param {Body} message 
     * @param {Response} response 
     */
    async run(message, response) {
        const embed = new EmbedBuilder()
        .setTitle(`RecandiedBot`)
        .setDescription(`RecandiedBot is an open-source recreation of [CandyBot by Fabi](https://discord.gg/Eeveelution_box) made in the http discord interaction library, offering more stability and costs way less to run, all you need is a web server. This bot was created by SylveonDev to test her skills on http requests.`)
        .setThumbnail(`attachment://recandied.png`)
        .setColor(0xEB3495)
        .setTimestamp(new Date())

        const img = await fs.readFileSync(__dirname+`/../docs/recandied.png`);
        response.status(200).send({
            type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: {
                embeds: [embed],
                attachments : [{
                    attachment: img,
                    name:'recandied.png'
                }]
            }
        })
    }
}