const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("!")

bot.on('ready', function() {
    bot.user.setGame("Fortnite");
    console.log("Connected");
});

bot.login("NDMwMTA0OTgxMjIwMzYwMTkz.DaPBog.vW4IvxyC9B38-2h--oJs1AhB5G0");


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n -!help");
    }

    if(message.content === "Salut"){
        message.reply("Bien le bonjour, êtes-vous prêt à repartir à l'assault de la Tempête ?!");
        console.log("Commande Salut effectué");
    }
});


bot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "ray_exe").send(`Bienvenue ${member}, Commandant, vite un Survivant à rejoind le Refuge !`);
});


bot.on('guildMemberAdd', member => {
    var role = member.guild.roles.find('name', 'Membres');
    member.addRole(role)
});
