const Discord = require('discord.js'); //requerimos la libreria que instalamos
const client = new Discord.Client(); //Instancia del cliente de discord
const messageEmbed = require('./Utils/MessageEmbed');

require('dotenv').config(); // gracias a esto leemos el archivo .env

const DISCORD_TOKEN = process.env.DISCORD_TOKEN; // llamamos a discordToken

client.on('ready', () =>{
    console.log(`Conectado.... ${client.user.tag}`); //aqui obtenemos el cliente para saber a donde nos conectamos
});

client.on('message', msg => {
    console.log(msg);

    if(msg.channel.type === 'dm'){

        console.log('Enviaste un DM')
        msg.reply('Hola  mundo');
        msg.reply('https://tenor.com/view/blue-bird-gif-20917099')
        msg.react('😃😃')
    }

    if (msg.content.toLocaleLowerCase() === 'hola') {          //Aqui se hace una validacion que si el contenido del mensaje es hola, pues que lo replique o devuelva otro mensaje--
        msg.reply('Bienvenido al servidor');                 //-- usamos toLocalelowercase para parcial el mensaje y que aunque se escriba en mayusculas lo reciba como minusculas y lo compare
        msg.channel.send(messageEmbed());
        msg.react('👌👌👌👌👌');                              //aqui estamos mandando una reaccion del mensaje Hola
        msg.url('https://github.com/ChrisJobs046');
    }
    });

client.login(DISCORD_TOKEN);