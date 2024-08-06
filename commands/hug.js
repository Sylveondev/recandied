const { EmbedBuilder } = require("@discordjs/builders")
const { InteractionResponseType } = require("discord-interactions")
const fs = require('fs');

module.exports = {
    command: {
        name: "hug",
        description: "Hehe hug a friend",
        type: 1,
        options: [{
            name: "member",
            description: "The member to use",
            type: 6,
            required: true
        }],
        integration_types: [0, 1],
        contexts: [0, 1, 2]
    },

    /**
     * Runs the command.
     * @param {Body} message 
     * @param {Response} response 
     */
    async run(message, response) {
        const member = message.data.options[0].value;
        console.log(member);
        const img = await require('../getRandomImage').random("hug")
        console.log(img);
        const embed = new EmbedBuilder()
        .setDescription(`:hugging: Awwww hehe <@${message.member.user.id}> is hugging <@${member}>!`)
        .setImage(img)
        .setColor(0xEB3495)
        .setTimestamp(new Date())

        response.status(200).send({
            type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: {
                embeds: [embed]
            }
        })
    }
}