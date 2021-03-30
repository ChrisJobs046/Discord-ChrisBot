const Discord = require('discord.js');

const messageEmbed = () => {

    const msgEmbed = new Discord.MessageEmbed()
    .setColor('#009ff')
    .setTitle('Hola soy el mejor bot que hiciste')
    .setDescription('Hola mundo')

    return msgEmbed;
};

module.exports = messageEmbed;