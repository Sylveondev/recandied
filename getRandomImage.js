const { randomInt } = require('crypto');
const fs = require('fs');
exports.random = async (category) => {
    const images = require(`./images.json`);
    switch(category) {
        case 'kiss': return images.kiss[randomInt(0, images.kiss.length)];
        case 'hug': return images.hug[randomInt(0, images.hug.length)];
    }
}