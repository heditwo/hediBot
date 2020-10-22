const querystring = require('querystring');
const url = 'https://lmgtfy.app/?q='


module.exports = {
    name: 'lmgtfy',
    description: 'when simple questions are just a google search away!',
    aliases: ['google'],
    execute(message, args) {
        const query = querystring.stringify({ term: args.join(' ') });
        message.channel.send(url + query)
    }
}