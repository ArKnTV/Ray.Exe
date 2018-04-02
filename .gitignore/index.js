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

    if(message.content === prefix + "infodiscord"){
        var embed = new Discord.RichEmbed()
        .setDescription("Imformation du Discord")
        .addField("Nom du Discord", message.guild.name)
        .addField("Crée le", message.guild.createdAt)
        .addField("Tu as rejoin le", message.member.joinedAt)
        .addField("Utilisateurs sur le discord", message.guild.memberCount)
        .setColor("0x0000FF")
    message.channel.sendEmbed(embed)
    }

    if (message.content.startsWith(prefix + "sondage")) {
        if(message.author.id == "430008711889682432"){
            let args = message.content.split(" ").slice(1);
            let thingToEcho = args.join(" ")
            var embed = new Discord.RichEmbed(){
                .setDescription("Sondage")
                .addField(thingToEcho, "Répondre avec :white_check_mark: ou :x:")
                .setColor("0xB40404")
                .setTimestamp()
            message.guild.channels.find ("name", "question").sendEmbed(embed)
            .then(function (message) {
                message.react("Promise")
                message.react("emoji:string")
            }).catch(function() {
            });
        }else{
            return message.reply("Tu n'as pas la permission")
}}})

    if (message.content === "Salut"){
        message.reply("Bien le Bonjour ${user} , j'espère que vous avez pu reprendre votre souffle par cette courte brève de la Tempète.");
        console.log ("Commande Salut effectué");
    }
});

