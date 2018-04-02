const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("!")

bot.on('ready', function() {
    bot.user.setGame("Fortnite");
    console.log("Connected");
});

bot.login("NDMwMTA0OTgxMjIwMzYwMTkz.DaORTQ._tP0oV7YWh8U_xzy7cZu_CpLl3g");

bot.on("guildMemberAdd", menber => {
    member.guild.channel("name", "ray_exe").send ('Bienvenue ${member}')
})

bot.on('guildMemberAdd', member => {
    var role = member.guild.roles.find('name', 'Membres');
    member.addRole(role)
})


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n -*help");
    }

    if (message.content === "Salut"){
        message.reply("Bien le Bonjour ${User}, j'espère que vous avez pu reprendre votre souffle par cette courte brève de la Tempète.");
        console.log ("Commande Salut effectué");
    }
});
