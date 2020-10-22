const Discord = require('discord.js');
const fetch = require('node-fetch');
const trim = (str, max) => (str.length > max ? `${str.slice(0, max - 3)}...` : str);
const statusUrl = 'https://api.slothpixel.me/api/players/';
const faceUrl = 'https://crafatar.com/avatars/';

const getBedwarsStats = async (message, username) => {
    await fetch(statusUrl + username)
            .then(res => res.json())
            .then(data => getStats = data)
            .then(() => {
                let uuid = JSON.stringify(getStats.uuid).replace(/\"/g, "");
                let bwStats = getStats.stats.BedWars;
                let embed = new Discord.MessageEmbed()
                .setTitle('Bedwars Stats')
                .addFields(
                    { name: 'Level', value: JSON.stringify(bwStats.level), inline:true },
                    { name: 'Win Streak', value: JSON.stringify(bwStats.winstreak), inline:true },
                    { name: 'Coins', value: JSON.stringify(bwStats.coins), inline:true },
                    { name: 'Wins', value: JSON.stringify(bwStats.wins), inline:true },
                    { name: 'Losses', value: JSON.stringify(bwStats.losses), inline:true },
                    { name: 'Average W/L Ratio', value: JSON.stringify(bwStats.w_l), inline:true },
                    { name: 'Kills', value: JSON.stringify(bwStats.kills), inline:true },
                    { name: 'Deaths', value: JSON.stringify(bwStats.deaths), inline:true },
                    { name: 'Average KDR', value: JSON.stringify(bwStats.k_d), inline:true },
                    { name: 'Final Kills', value: JSON.stringify(bwStats.final_kills), inline:true },
                    { name: 'Final Deaths', value: JSON.stringify(bwStats.final_deaths), inline:true },
                    { name: 'Final KDR', value: JSON.stringify(bwStats.final_k_d), inline:true } )
                .setThumbnail(faceUrl + uuid)
                .setDescription(`${username}'s stats: `)
                .setColor('#001879')
                message.channel.send(embed)
            })
}

module.exports = {
    name: 'bws',
    description: 'stats this kid he\'s so fucking trash',
    cooldown: 3,
    alias: ['bws', 'bedwars'],
    async execute(message, args) {
        if (!args.length) {
            return 'You need to supply a search term!'
        }
        getBedwarsStats(message, args);

    }
}