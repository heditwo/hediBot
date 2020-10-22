const fetch = require('node-fetch');

module.exports = {
    name: 'cat',
    description: 'gets a cat',
    cooldown: 3,
    async execute(message) {
        const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());
        message.channel.send(file);
    }
}