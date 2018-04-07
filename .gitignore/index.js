const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("!")

bot.on('ready', function() {
    bot.user.setGame("Fortnite");
    console.log("Connected");
});

bot.login(process.env.TOKEN);


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


client.on('message', message => {
    // If the message is "what is my avatar"
    if (message.content === 'what is my avatar') {
      // Send the user's avatar URL
      message.reply(message.author.avatarURL);
    }
  });
