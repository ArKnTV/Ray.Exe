const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("Fortnite");
    console.log("Connected");
});

bot.login("NDMwMTA0OTgxMjIwMzYwMTkz.DaORTQ._tP0oV7YWh8U_xzy7cZu_CpLl3g");


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n -*help");
    }

    if (message.content === "Salut"){
        message.reply("Bien le Bonjour, {User} Merci d'être aux côtés de notre Commandant.");
        console.log ("Commande Salut effectué");
    }
});
